export const StoreFooter = () => (
  <footer id="contacto" className="py-16 border-t border-border/30">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-display text-xl font-semibold gold-text mb-4">Aevendum</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Suplementación premium con aval científico. Los suplementos más puros del mundo, ahora en España.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold tracking-wider uppercase mb-4">Navegación</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li><a href="#hero" className="hover:text-foreground transition-colors">Inicio</a></li>
            <li><a href="#productos" className="hover:text-foreground transition-colors">Productos</a></li>
            <li><a href="#ciencia" className="hover:text-foreground transition-colors">Ciencia</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold tracking-wider uppercase mb-4">Contacto</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>info@aevendum.com</li>
            <li>Madrid, España</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground border-t border-border/20 pt-6">
        © {new Date().getFullYear()} Aevendum. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);
