import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#FAF8F4' }}>
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 30 L35 35 L30 50 L25 35 L10 30 L25 25 Z' fill='%23d4a5a5' /%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />

      <div className="relative bg-card border border-border rounded-lg p-12 w-full max-w-md shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Florir
          </h1>
          <p className="text-muted-foreground text-sm">Sistema de Ponto de Venda</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-foreground">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2 text-foreground">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded hover:opacity-90 transition-opacity"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
