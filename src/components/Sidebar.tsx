import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { TreeNode } from '../types';
import { TREE } from '../data/structure';

type Props = {
  tree?: TreeNode[];
};

/** Concatenează segmente pentru a produce calea unui nod. */
function joinPath(prefix: string, slug: string) {
  if (!prefix || prefix === '/') return `/${slug}`;
  return `${prefix}/${slug}`;
}

/** Returnează true dacă `candidate` este pe traseul către `currentPath`. */
function isAncestorPath(candidate: string, currentPath: string) {
  if (candidate === '/') return true;
  return currentPath === candidate || currentPath.startsWith(candidate + '/');
}

function NodeItem({
  node,
  prefix,
  currentPath,
  depth,
  autoOpen
}: {
  node: TreeNode;
  prefix: string;
  currentPath: string;
  depth: number;
  autoOpen: boolean;
}) {
  const path = joinPath(prefix, node.slug);
  const hasChildren = !!node.children?.length;
  const initiallyOpen = autoOpen || isAncestorPath(path, currentPath) || depth <= 1;

  const [open, setOpen] = useState<boolean>(initiallyOpen);
  useEffect(() => {
    // Deschide automat ramura ce conține ruta curentă
    if (isAncestorPath(path, currentPath)) setOpen(true);
  }, [currentPath, path]);

  return (
    <li className="node">
      <div className="node-row" onClick={() => hasChildren && setOpen(o => !o)}>
        <span className="caret">{hasChildren ? (open ? '▾' : '▸') : '•'}</span>
        {node.tag && <span className="tag">{node.tag}</span>}
        {/* NavLink gestionează stilul "active" */}
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          onClick={(e) => {
            // Permite click direct pe link fără a plia/destinde
            e.stopPropagation();
          }}
          end
        >
          {node.title}
        </NavLink>
      </div>
      {hasChildren && open && (
        <ul className="children">
          {node.children!.map((child) => (
            <NodeItem
              key={child.slug}
              node={child}
              prefix={path}
              currentPath={currentPath}
              depth={depth + 1}
              autoOpen={autoOpen}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Sidebar({ tree = TREE }: Props) {
  const { pathname } = useLocation();
  const roots = useMemo(() => tree, [tree]);

  return (
    <aside className="sidebar">
      <div className="section-title">Navigație</div>
      <ul className="tree">
        {/* Un link "Acasă" pentru rădăcină */}
        <li className="node">
          <div className="node-row">
            <span className="caret">•</span>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} end>
              Acasă
            </NavLink>
          </div>
        </li>

        {roots.map((node) => (
          <NodeItem
            key={node.slug}
            node={node}
            prefix=""
            currentPath={pathname}
            depth={0}
            autoOpen={true}
          />
        ))}
      </ul>
    </aside>
  );
}
