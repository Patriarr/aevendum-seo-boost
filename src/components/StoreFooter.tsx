import { Link } from 'react-router-dom';
import logoFooter from '@/assets/logo-footer.png';

export const StoreFooter = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logoFooter} alt="Aevendum" className="h-8 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            No fabricamos, seleccionamos. Actuamos como el filtro de rigor científico que conecta los laboratorios más avanzados de Alemania con tu protocolo diario.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Protocolos</h4>
          <ul className="space-y-2">
            <li><a href="#cellular-lab" className="text-sm text-muted-foreground hover:text-foreground transition-colors">P.02 — Renovación Molecular</a></li>
            <li><a href="#cellular-lab" className="text-sm text-muted-foreground hover:text-foreground transition-colors">P.03 — Optimización Cognitiva</a></li>
            <li><a href="#cellular-lab" className="text-sm text-muted-foreground hover:text-foreground transition-colors">P.04 — Resiliencia Biológica</a></li>
            <li><a href="#packs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Essential Trio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/aviso-legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Aviso Legal</Link></li>
            <li><Link to="/politica-privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidad</Link></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trazabilidad de Lote</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-body">© 2026 Aevendum — Science &amp; Longevity.</p>
      </div>
    </div>
  </footer>
);
