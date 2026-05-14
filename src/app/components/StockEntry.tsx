import { useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Rosas Vermelhas' },
  { id: 2, name: 'Lírios Brancos' },
  { id: 3, name: 'Orquídeas' },
  { id: 4, name: 'Tulipas Amarelas' },
  { id: 5, name: 'Girassóis' },
  { id: 6, name: 'Margaridas' },
  { id: 7, name: 'Vaso Cerâmica' },
  { id: 8, name: 'Fita Decorativa' },
  { id: 9, name: 'Papel Celofane' },
  { id: 10, name: 'Laços de Cetim' },
];

export default function StockEntry() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [responsible, setResponsible] = useState('');
  const [observations, setObservations] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Entrada de estoque registrada com sucesso!');
    setProduct('');
    setQuantity('');
    setCostPrice('');
    setResponsible('');
    setObservations('');
  };

  return (
    <div className="p-12 max-w-2xl">
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
        Entrada de Estoque
      </h1>

      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="product" className="block text-sm mb-2">
              Produto
            </label>
            <select
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              required
            >
              <option value="">Selecione um produto</option>
              {mockProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm mb-2">
              Quantidade
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              required
            />
          </div>

          <div>
            <label htmlFor="costPrice" className="block text-sm mb-2">
              Preço de Custo <span className="text-muted-foreground text-xs">(opcional)</span>
            </label>
            <input
              id="costPrice"
              type="number"
              step="0.01"
              min="0"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              placeholder="0.00"
            />
          </div>

          <div>
            <label htmlFor="responsible" className="block text-sm mb-2">
              Responsável
            </label>
            <input
              id="responsible"
              type="text"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background"
              required
            />
          </div>

          <div>
            <label htmlFor="observations" className="block text-sm mb-2">
              Observações <span className="text-muted-foreground text-xs">(opcional)</span>
            </label>
            <textarea
              id="observations"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background resize-none"
              placeholder="Informações adicionais sobre a entrada..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded hover:opacity-90 transition-opacity"
          >
            Confirmar Entrada
          </button>
        </form>
      </div>
    </div>
  );
}
