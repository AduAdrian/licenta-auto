import { useLocation, Link } from 'react-router-dom';
import type { TreeNode } from '../types';
import { TREE } from '../data/structure';
import Breadcrumbs, { Crumb } from '../components/Breadcrumbs';

function findNodeByPath(pathname: string): {
  node: TreeNode | null;
  crumbs: Crumb[];
  children: TreeNode[];
} {
  if (pathname === '/' || pathname === '') {
    return { node: null, crumbs: [], children: TREE };
  }

  const segments = pathname.split('/').filter(Boolean); // fără stringuri goale
  let level: TreeNode[] = TREE;
  const crumbs: Crumb[] = [];
  let currentPath = '';
  let found: TreeNode | null = null;

  for (const seg of segments) {
    const next = level.find(n => n.slug === seg);
    if (!next) {
      // cale necunoscută
      return { node: null, crumbs: [], children: [] };
    }
    currentPath += `/${seg}`;
    crumbs.push({ title: next.title, path: currentPath });
    found = next;
    level = next.children ?? [];
  }

  return { node: found, crumbs, children: found?.children ?? [] };
}

export default function NodePage() {
  const { pathname } = useLocation();
  const { node, crumbs, children } = findNodeByPath(pathname);

  const title = node?.title ?? 'Acasă';
  const hasChildren = children.length > 0;

  return (
    <div className="card">
      <Breadcrumbs items={[{ title: 'Acasă', path: '/' }, ...crumbs]} />
      <h1>{title}</h1>
      {!node && (
        <>
          <p className="meta">
            Alege o secțiune din meniul din stânga pentru a naviga prin Parți / Capitole / Subcapitole.
          </p>
          <div className="placeholder">Structură pregătită — conținutul se va completa ulterior.</div>
        </>
      )}

      {node && (
        <>
          <p className="meta">
            Secțiune goală (de completat): <strong>{title}</strong>
          </p>
          <div className="placeholder">
            În această pagină vei adăuga tabele, grafice, formule și concluzii specifice secțiunii.
          </div>
        </>
      )}

      {hasChildren && (
        <>
          <h2>Subsecțiuni</h2>
          <ul className="link-list">
            {children.map((ch) => {
              const path = `${pathname === '/' ? '' : pathname}/${ch.slug}`;
              return (
                <li key={ch.slug}>
                  <Link to={path}>{ch.title}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {!node && pathname !== '/' && (
        <>
          <div className="placeholder" style={{ marginTop: 16 }}>
            Ruta nu a fost găsită. Revino la <Link to="/">Acasă</Link> sau folosește meniul din stânga.
          </div>
        </>
      )}
    </div>
  );
}
