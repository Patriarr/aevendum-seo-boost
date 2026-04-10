import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import logoHeader from '@/assets/logo-header.png';

const navLinks = [
  { label: 'Protocolos', href: '#packs' },
  { label: 'Molecular Nutrition', href: '#molecular-nutrition' },
  { label: 'Cellular Lab', href: '#cellular-lab' },
  { label: 'Ciencia', href: '#science-research' },
  { label: 'Contacto', href: '#contacto' },
];

export const StoreHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, cartCount } = useStore();
  const count = cartCount();

  const linkClass = "text-[11px] font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex flex-col items-start justify-center leading-none shrink-0">
          <img src={logoHeader} alt="Aevendum — Longevidad Premium" className="h-10 md:h-14 w-auto" />
          <span className="mt-0.5 pl-0.5 text-[6px] md:text-[8px] tracking-[0.3em] uppercase font-body text-muted-foreground">
            Longevidad Premium
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>{link.label}</a>
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
            className="lg:hidden p-2 text-muted-foreground"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
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
