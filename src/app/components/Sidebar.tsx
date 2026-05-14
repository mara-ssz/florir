import { Link, useLocation, useNavigate } from 'react-router';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/dashboard/nova-venda', label: 'Nova Venda' },
    { path: '/dashboard/estoque', label: 'Estoque' },
    { path: '/dashboard/entrada-estoque', label: 'Entrada de Estoque' },
    { path: '/dashboard/estatisticas', label: 'Estatísticas' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      <div className="p-8 border-b border-sidebar-border">
        <h1 className="text-3xl tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
          Florir
        </h1>
      </div>

      <nav className="flex-1 p-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded transition-colors relative ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4a5a5] rounded-l"></span>
                  )}
                  <span className={isActive ? 'ml-2' : ''}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 text-left text-sidebar-foreground hover:bg-sidebar-accent rounded transition-colors"
        >
          Sair
        </button>
      </div>
    </aside>
  );
}
