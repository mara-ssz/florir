import { useState } from 'react';

const mockStock = [
  { id: 1, name: 'Rosas Vermelhas', category: 'Flores', current: 45, minimum: 30, price: 25.0 },
  { id: 2, name: 'Lírios Brancos', category: 'Flores', current: 12, minimum: 20, price: 35.0 },
  { id: 3, name: 'Orquídeas', category: 'Flores', current: 8, minimum: 15, price: 58.0 },
  { id: 4, name: 'Tulipas Amarelas', category: 'Flores', current: 32, minimum: 25, price: 28.0 },
  { id: 5, name: 'Girassóis', category: 'Flores', current: 5, minimum: 20, price: 22.0 },
  { id: 6, name: 'Margaridas', category: 'Flores', current: 28, minimum: 25, price: 18.0 },
  { id: 7, name: 'Vaso Cerâmica', category: 'Acessórios', current: 15, minimum: 10, price: 45.0 },
  { id: 8, name: 'Fita Decorativa', category: 'Acessórios', current: 3, minimum: 15, price: 8.0 },
  { id: 9, name: 'Papel Celofane', category: 'Embalagens', current: 25, minimum: 20, price: 12.0 },
  { id: 10, name: 'Laços de Cetim', category: 'Acessórios', current: 7, minimum: 30, price: 5.0 },
];

export default function Stock() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = Array.from(new Set(mockStock.map((item) => item.category)));

  const filteredStock = mockStock.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-12">
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
        Estoque
      </h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
        >
          <option value="">Todas as Categorias</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-6 py-4 text-sm">Produto</th>
              <th className="text-left px-6 py-4 text-sm">Categoria</th>
              <th className="text-center px-6 py-4 text-sm">Estoque Atual</th>
              <th className="text-center px-6 py-4 text-sm">Estoque Mínimo</th>
              <th className="text-right px-6 py-4 text-sm">Preço Unitário</th>
              <th className="text-center px-6 py-4 text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item, index) => {
              const isLowStock = item.current < item.minimum;
              return (
                <tr
                  key={item.id}
                  className={`${
                    isLowStock ? 'bg-[#f5ebe8]' : index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                  }`}
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 text-muted-foreground text-sm">{item.category}</td>
                  <td className="px-6 py-4 text-center">{item.current}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground text-sm">
                    {item.minimum}
                  </td>
                  <td className="px-6 py-4 text-right">R$ {item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center">
                    {isLowStock ? (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        Baixo
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        Normal
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
