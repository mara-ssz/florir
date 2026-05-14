import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { id: 'seg', day: 'Seg', value: 1250 },
  { id: 'ter', day: 'Ter', value: 1890 },
  { id: 'qua', day: 'Qua', value: 1620 },
  { id: 'qui', day: 'Qui', value: 2100 },
  { id: 'sex', day: 'Sex', value: 2450 },
  { id: 'sab', day: 'Sáb', value: 3200 },
  { id: 'dom', day: 'Dom', value: 1800 },
];

export default function Dashboard() {
  return (
    <div className="p-12">
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-12">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Vendas Hoje</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            R$ 3.240,00
          </div>
        </div>

        <div className="bg-[#f5ebe8] border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Produtos em Falta</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)', color: '#d4a5a5' }}>
            7
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Última Venda</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            R$ 145,00
          </div>
          <div className="text-xs text-muted-foreground mt-1">há 12 minutos</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Mais Vendido</div>
          <div className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
            Rosas Vermelhas
          </div>
          <div className="text-xs text-muted-foreground mt-1">38 unidades</div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h2 className="mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Vendas nos Últimos 7 Dias
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData}>
            <defs>
              <linearGradient id="colorValueDashboard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4a5a5" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#d4a5a5" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="day" stroke="#6b6b6b" style={{ fontSize: '14px' }} />
            <YAxis stroke="#6b6b6b" style={{ fontSize: '14px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '6px',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7a9b8e"
              strokeWidth={2}
              fill="url(#colorValueDashboard)"
              dot={{ fill: '#7a9b8e', r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
