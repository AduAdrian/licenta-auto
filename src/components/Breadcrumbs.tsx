import { Link } from 'react-router-dom';

export type Crumb = { title: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items.length) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((c, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={c.path}>
            {isLast ? (
              <span>{c.title}</span>
            ) : (
              <Link to={c.path}>{c.title}</Link>
            )}
            {!isLast && <span className="sep"> / </span>}
          </span>
        );
      })}
    </nav>
  );
}
