import { useStore } from '@/lib/store';
import { useState } from 'react';
import { ArrowLeft, Lock, CreditCard, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useStore();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', zip: '', province: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const total = cartTotal();
  const shipping = total >= 80 ? 0 : 4.95;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.functions.invoke('notify-email', {
        body: {
          type: 'order',
          data: {
            ...form,
            items: cart.map((item) => ({
              name: item.product.name,
              quantity: item.quantity,
              total: (item.product.price * item.quantity).toFixed(2),
            })),
            shipping: shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)}€`,
            total: (total + shipping).toFixed(2),
          },
        },
      });
    } catch (err) {
      console.error('Error sending order email:', err);
    }
    setSubmitted(true);
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">Tu carrito está vacío</h1>
          <Link to="/" className="gold-text text-sm font-body hover:underline">← Volver a la tienda</Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass-card p-12 max-w-md mx-4"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
            <Lock className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-semibold mb-3">¡Pedido recibido!</h1>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Hemos recibido tu pedido. Te enviaremos un email de confirmación con los datos de pago y seguimiento.
          </p>
          <Link
            to="/"
            className="gold-gradient px-8 py-3 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity inline-block"
          >
            Volver a la tienda
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
          <ArrowLeft className="w-4 h-4" /> Volver a la tienda
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-light mb-10">
          Finalizar <span className="gold-text font-medium">Compra</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            {/* Shipping */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">Datos de envío</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">Nombre completo</label>
                  <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">Email</label>
                  <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">Teléfono</label>
                  <input type="tel" required maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">Dirección</label>
                  <input required maxLength={200} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">Ciudad</label>
                  <input required maxLength={100} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-body text-muted-foreground mb-1.5 block">C.P.</label>
                    <input required maxLength={10} value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="text-xs font-body text-muted-foreground mb-1.5 block">Provincia</label>
                    <input required maxLength={100} value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} className="w-full bg-background/50 border border-border/50 rounded-sm px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment info */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">Método de pago</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Tras confirmar tu pedido, recibirás un email con las instrucciones de pago seguro. Aceptamos transferencia bancaria.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-body px-3 py-1.5 rounded-sm bg-background/50 border border-border/50 text-muted-foreground">Transferencia</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full gold-gradient py-4 rounded-sm text-sm font-body font-semibold tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Confirmar pedido — {(total + shipping).toFixed(2)}€
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8 sticky top-24">
              <h2 className="font-display text-lg font-semibold mb-6">Resumen del pedido</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-body font-medium truncate">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                    </div>
                    <span className="text-sm font-body">{(item.product.price * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border/30 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Envío</span>
                  <span>{shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)}€`}</span>
                </div>
                <div className="flex justify-between font-display text-xl font-semibold pt-2 border-t border-border/30">
                  <span>Total</span>
                  <span className="gold-text">{(total + shipping).toFixed(2)}€</span>
                </div>
              </div>
              {total < 80 && (
                <p className="text-xs text-muted-foreground mt-4">
                  Añade {(80 - total).toFixed(2)}€ más para envío gratis 🚚
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
