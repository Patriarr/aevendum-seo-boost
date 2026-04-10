import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AvisoLegal = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
        <ArrowLeft className="w-4 h-4" /> Volver
      </Link>
      <h1 className="font-display text-3xl font-light mb-8">Aviso Legal</h1>
      <div className="prose prose-sm prose-invert max-w-none font-body text-muted-foreground space-y-6 text-sm leading-relaxed">
        <h2 className="font-display text-lg text-foreground">1. Datos Identificativos</h2>
        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">Denominación social:</strong> Aevendum</li>
          <li><strong className="text-foreground">Domicilio:</strong> España</li>
          <li><strong className="text-foreground">Email:</strong> info@aevendum.com</li>
          <li><strong className="text-foreground">Sitio web:</strong> www.aevendum.com</li>
        </ul>

        <h2 className="font-display text-lg text-foreground">2. Objeto</h2>
        <p>El presente sitio web tiene por objeto facilitar información sobre los productos y servicios de Aevendum, así como permitir la adquisición de los mismos a través de su plataforma de comercio electrónico.</p>

        <h2 className="font-display text-lg text-foreground">3. Propiedad Intelectual e Industrial</h2>
        <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente, logos, marcas y demás elementos, son propiedad de Aevendum o de terceros que han autorizado su uso, estando protegidos por las normas nacionales e internacionales de propiedad intelectual e industrial.</p>
        <p>Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin la autorización expresa y por escrito de Aevendum.</p>

        <h2 className="font-display text-lg text-foreground">4. Responsabilidad</h2>
        <p>Aevendum no se hace responsable de los daños o perjuicios que pudieran derivarse del acceso, uso o mala utilización de los contenidos del sitio web, ni de las decisiones que el usuario pueda tomar basándose en la información proporcionada.</p>

        <h2 className="font-display text-lg text-foreground">5. Legislación Aplicable</h2>
        <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los juzgados y tribunales del domicilio del consumidor.</p>
      </div>
    </div>
  </div>
);

export default AvisoLegal;
