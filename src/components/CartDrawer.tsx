import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border/30 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <h2 className="font-display text-xl font-semibold">Tu Selección</h2>
              <button onClick={() => setCartOpen(false)} className="p-1 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-3">
                <ShoppingBag className="w-10 h-10 opacity-30" />
                <p className="text-sm">Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4 glass-card p-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-semibold truncate">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.product.price.toFixed(2)}€</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded border border-border/50 text-muted-foreground hover:text-foreground"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-body min-w-[20px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded border border-border/50 text-muted-foreground hover:text-foreground"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto text-destructive text-xs hover:underline"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-border/30 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total</span>
                    <span className="font-display text-2xl font-semibold">{cartTotal().toFixed(2)}€</span>
                  </div>
                  <button className="w-full gold-gradient py-3 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
