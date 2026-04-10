import logoFooter from '@/assets/logo-footer.png';
import { Link } from 'react-router-dom';

export const StoreFooter = () => {
  return (
    <footer className="border-t border-border/20">
      {/* About Aevendum */}
      <div className="container mx-auto px-4 pt-10 pb-6 max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-body">Sobre Aevendum</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          No vendemos botes, entregamos unidades de precisión molecular. Seleccionamos lo que la ciencia de Berlín valida hoy, para que tú lo apliques mañana.
        </p>
        <p className="font-body text-[10px] text-muted-foreground/60 mt-4 leading-relaxed italic">
          El Protocolo 01 se suministra exclusivamente como sustancia química para fines de investigación y desarrollo. No apto para el consumo humano según normativa Novel Food.
        </p>
      </div>

      {/* Legal links */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-4 md:gap-6 border-t border-border/10">
        <Link to="/aviso-legal" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide uppercase">Aviso Legal</Link>
        <Link to="/politica-privacidad" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide uppercase">Política de Privacidad</Link>
        <Link to="/politica-cookies" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide uppercase">Política de Cookies</Link>
        <Link to="/condiciones-venta" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide uppercase">Condiciones de Venta</Link>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/10">
        {/* Logo */}
        <a href="#hero" className="shrink-0 flex flex-col items-center md:items-start leading-none">
          <img
            src={logoFooter}
            alt="Aevendum — Longevidad Premium"
            className="h-16 md:h-20 w-auto"
          />
          <span className="mt-1 pl-0.5 text-[8px] md:text-[10px] tracking-[0.35em] uppercase font-body text-muted-foreground">
            Longevidad Premium
          </span>
        </a>

        {/* Copyright */}
        <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase font-body">
          © {new Date().getFullYear()} Aevendum. Todos los derechos reservados.
        </p>

        {/* Email */}
        <a
          href="mailto:info@aevendum.com"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body tracking-wide"
        >
          info@aevendum.com
        </a>
      </div>
    </footer>
  );
};
