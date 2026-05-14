import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const dailySalesData = [
  { id: 'd1', date: '01/04', value: 1450 },
  { id: 'd2', date: '02/04', value: 1820 },
  { id: 'd3', date: '03/04', value: 1320 },
  { id: 'd4', date: '04/04', value: 1980 },
  { id: 'd5', date: '05/04', value: 2240 },
  { id: 'd6', date: '06/04', value: 2890 },
  { id: 'd7', date: '07/04', value: 3450 },
  { id: 'd8', date: '08/04', value: 2120 },
  { id: 'd9', date: '09/04', value: 1650 },
  { id: 'd10', date: '10/04', value: 1890 },
  { id: 'd11', date: '11/04', value: 2340 },
  { id: 'd12', date: '12/04', value: 2780 },
  { id: 'd13', date: '13/04', value: 3120 },
  { id: 'd14', date: '14/04', value: 3680 },
  { id: 'd15', date: '15/04', value: 2450 },
  { id: 'd16', date: '16/04', value: 1920 },
  { id: 'd17', date: '17/04', value: 2180 },
  { id: 'd18', date: '18/04', value: 2540 },
  { id: 'd19', date: '19/04', value: 2920 },
  { id: 'd20', date: '20/04', value: 3340 },
  { id: 'd21', date: '21/04', value: 3890 },
  { id: 'd22', date: '22/04', value: 2680 },
  { id: 'd23', date: '23/04', value: 2120 },
  { id: 'd24', date: '24/04', value: 2450 },
  { id: 'd25', date: '25/04', value: 2840 },
  { id: 'd26', date: '26/04', value: 3180 },
  { id: 'd27', date: '27/04', value: 3520 },
  { id: 'd28', date: '28/04', value: 4120 },
  { id: 'd29', date: '29/04', value: 2890 },
  { id: 'd30', date: '30/04', value: 2340 },
];

const topProductsData = [
  { id: 'p1', product: 'Rosas', sales: 245 },
  { id: 'p2', product: 'Orquídeas', sales: 189 },
  { id: 'p3', product: 'Lírios', sales: 156 },
  { id: 'p4', product: 'Tulipas', sales: 142 },
  { id: 'p5', product: 'Girassóis', sales: 128 },
];

const lowStockProducts = [
  { id: 's1', name: 'Laços de Cetim', current: 7, minimum: 30 },
  { id: 's2', name: 'Girassóis', current: 5, minimum: 20 },
  { id: 's3', name: 'Lírios Brancos', current: 12, minimum: 20 },
  { id: 's4', name: 'Orquídeas', current: 8, minimum: 15 },
  { id: 's5', name: 'Fita Decorativa', current: 3, minimum: 15 },
];

export default function Statistics() {
  return (
    <div className="p-12">
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
        Estatísticas
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Receita do Mês</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            R$ 74.280,00
          </div>
          <div className="text-xs text-primary mt-1">+12% vs. mês anterior</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Vendas do Mês</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            1.248
          </div>
          <div className="text-xs text-primary mt-1">+8% vs. mês anterior</div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="text-sm text-muted-foreground mb-2">Ticket Médio</div>
          <div className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
            R$ 59,50
          </div>
          <div className="text-xs text-primary mt-1">+3% vs. mês anterior</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Vendas Diárias - Últimos 30 Dias
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySalesData} id="daily-sales-chart">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis
                dataKey="date"
                stroke="#6b6b6b"
                style={{ fontSize: '12px' }}
                interval={4}
              />
              <YAxis stroke="#6b6b6b" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '6px',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7a9b8e"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Top 5 Produtos Mais Vendidos
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProductsData} layout="vertical" id="top-products-chart">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis type="number" stroke="#6b6b6b" style={{ fontSize: '12px' }} />
              <YAxis
                type="category"
                dataKey="product"
                stroke="#6b6b6b"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '6px',
                }}
              />
              <Bar dataKey="sales" fill="#7a9b8e" radius={[0, 4, 4, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <h2 className="mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Produtos Abaixo do Estoque Mínimo
        </h2>
        <div className="space-y-3">
          {lowStockProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-[#f5ebe8] rounded-lg"
            >
              <div>
                <div className="text-sm">{product.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Estoque mínimo: {product.minimum} unidades
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                  {product.current}
                </div>
                <div className="text-xs text-secondary">em estoque</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
