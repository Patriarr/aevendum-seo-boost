import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Productos', href: '#productos' },
  { label: 'Ciencia', href: '#ciencia' },
  { label: 'Contacto', href: '#contacto' },
];

export const StoreHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, cartCount } = useStore();
  const count = cartCount();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-display text-xl md:text-2xl font-semibold tracking-widest gold-text uppercase">
          Aevendum
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full gold-gradient text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
