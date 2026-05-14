import { useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Rosas Vermelhas', price: 25.0 },
  { id: 2, name: 'Lírios Brancos', price: 35.0 },
  { id: 3, name: 'Orquídeas', price: 58.0 },
  { id: 4, name: 'Tulipas Amarelas', price: 28.0 },
  { id: 5, name: 'Girassóis', price: 22.0 },
  { id: 6, name: 'Margaridas', price: 18.0 },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function NewSale() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const filteredProducts = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: typeof mockProducts[0]) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const finalizeSale = () => {
    if (cart.length > 0 && paymentMethod) {
      alert(`Venda finalizada! Total: R$ ${total.toFixed(2)}`);
      setCart([]);
      setPaymentMethod('');
      setSearch('');
    }
  };

  return (
    <div className="p-12 h-full flex flex-col">
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
        Nova Venda
      </h1>

      <div className="flex-1 flex gap-8">
        <div className="flex-1 flex flex-col">
          <input
            type="text"
            placeholder="Buscar produto por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring bg-input-background mb-6"
          />

          <div className="flex-1 bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-auto h-full">
              {filteredProducts.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-muted sticky top-0">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm">Produto</th>
                      <th className="text-right px-6 py-4 text-sm">Preço Unitário</th>
                      <th className="text-right px-6 py-4 text-sm"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr
                        key={product.id}
                        className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                      >
                        <td className="px-6 py-4">{product.name}</td>
                        <td className="px-6 py-4 text-right">R$ {product.price.toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity"
                          >
                            Adicionar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Nenhum produto encontrado
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-96 flex flex-col">
          <div className="flex-1 bg-card border border-border rounded-lg p-6 flex flex-col shadow-sm">
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Carrinho
            </h3>

            <div className="flex-1 overflow-auto mb-6">
              {cart.length > 0 ? (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="pb-3 border-b border-border last:border-0">
                      <div className="text-sm mb-2">{item.name}</div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 border border-border rounded flex items-center justify-center hover:bg-muted"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 border border-border rounded flex items-center justify-center hover:bg-muted"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            R$ {item.price.toFixed(2)} × {item.quantity}
                          </div>
                          <div>R$ {(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  Carrinho vazio
                </div>
              )}
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total</span>
                <span className="text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-3">Forma de Pagamento</label>
              <div className="grid grid-cols-2 gap-2">
                {['Pix', 'Débito', 'Crédito', 'Dinheiro'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`py-2 px-3 rounded border text-sm transition-colors ${
                      paymentMethod === method
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={finalizeSale}
              disabled={cart.length === 0 || !paymentMethod}
              className="w-full bg-primary text-primary-foreground py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Finalizar Venda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
