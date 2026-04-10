import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoHeader from '@/assets/logo-header.png';

const navLinks = [
  { label: 'Ciencia', href: '#hero' },
  { label: 'Protocolos', href: '#cellular-lab' },
  { label: 'Packs', href: '#packs' },
  { label: 'Contacto', href: '#contacto' },
];

export const StoreHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoHeader} alt="Aevendum" className="h-8" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-xs font-body font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-block text-xs font-body font-semibold tracking-wider uppercase bg-foreground text-background px-5 py-2 rounded-sm hover:bg-foreground/90 transition-colors">
          Solicitar Info
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-foreground py-2">{link.label}</a>
              ))}
              <a href="#contacto" onClick={() => setMenuOpen(false)}
                className="text-xs font-body font-semibold tracking-wider uppercase bg-foreground text-background px-5 py-3 rounded-sm text-center mt-2">
                Solicitar Info
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
