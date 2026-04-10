import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PoliticaCookies = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
        <ArrowLeft className="w-4 h-4" /> Volver
      </Link>
      <h1 className="font-display text-3xl font-light mb-8">Política de Cookies</h1>
      <div className="prose prose-sm prose-invert max-w-none font-body text-muted-foreground space-y-6 text-sm leading-relaxed">
        <h2 className="font-display text-lg text-foreground">1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para recordar información sobre su visita.</p>

        <h2 className="font-display text-lg text-foreground">2. Cookies que utilizamos</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">Cookies técnicas (necesarias):</strong> Permiten el funcionamiento básico del sitio web, como la gestión del carrito de compra y la navegación.</li>
          <li><strong className="text-foreground">Cookies de preferencias:</strong> Almacenan las preferencias del usuario (ej. idioma, tema visual).</li>
        </ul>

        <h2 className="font-display text-lg text-foreground">3. ¿Cómo desactivar las cookies?</h2>
        <p>Puede configurar su navegador para rechazar cookies o eliminar las ya almacenadas. Tenga en cuenta que la desactivación de cookies técnicas puede afectar al funcionamiento del sitio web.</p>

        <h2 className="font-display text-lg text-foreground">4. Más información</h2>
        <p>Para cualquier consulta sobre nuestra política de cookies, puede contactarnos en info@aevendum.com.</p>
      </div>
    </div>
  </div>
);

export default PoliticaCookies;
