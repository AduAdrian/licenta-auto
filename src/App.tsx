import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NodePage from './pages/NodePage';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <span className="dot" />
          <span>Licență Auto</span>
        </div>
        <small>React + Vite + TypeScript</small>
      </header>

      <Sidebar />

      <main className="main">
        <Routes>
          <Route path="/*" element={<NodePage />} />
          {/* Ruta rădăcină */}
          <Route path="/" element={<NodePage />} />
        </Routes>
      </main>
    </div>
  );
}
