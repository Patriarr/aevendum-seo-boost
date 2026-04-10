import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CondicionesVenta = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
        <ArrowLeft className="w-4 h-4" /> Volver
      </Link>
      <h1 className="font-display text-3xl font-light mb-8">Condiciones Generales de Venta</h1>
      <div className="prose prose-sm prose-invert max-w-none font-body text-muted-foreground space-y-6 text-sm leading-relaxed">
        <h2 className="font-display text-lg text-foreground">1. Objeto</h2>
        <p>Las presentes condiciones regulan la relación de compraventa entre Aevendum y el usuario/cliente que realice pedidos a través de la plataforma www.aevendum.com.</p>

        <h2 className="font-display text-lg text-foreground">2. Productos</h2>
        <p>Los productos ofrecidos se describen con la mayor precisión posible. Las imágenes son orientativas. Los precios incluyen IVA y se expresan en euros (€).</p>

        <h2 className="font-display text-lg text-foreground">3. Proceso de Compra</h2>
        <p>El usuario selecciona los productos deseados, los añade al carrito y completa el formulario de envío. Tras confirmar el pedido, recibirá un email con las instrucciones de pago.</p>

        <h2 className="font-display text-lg text-foreground">4. Envío</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Envíos a España peninsular: 24-48 horas laborables.</li>
          <li>Envío gratuito para pedidos superiores a 80€.</li>
          <li>Coste de envío para pedidos inferiores: 4,95€.</li>
        </ul>

        <h2 className="font-display text-lg text-foreground">5. Derecho de Desistimiento</h2>
        <p>El consumidor tiene derecho a desistir del contrato en un plazo de 14 días naturales desde la recepción del producto, sin necesidad de justificación. El producto debe devolverse en su embalaje original, sin abrir y en perfecto estado. Los gastos de devolución corren a cargo del cliente.</p>

        <h2 className="font-display text-lg text-foreground">6. Garantía</h2>
        <p>Todos los productos cuentan con la garantía legal de conformidad de 3 años establecida por la normativa europea. Si el producto presenta algún defecto, el cliente podrá solicitar su reparación, sustitución o reembolso.</p>

        <h2 className="font-display text-lg text-foreground">7. Atención al Cliente</h2>
        <p>Para cualquier incidencia con su pedido, contacte con nosotros en info@aevendum.com. Nos comprometemos a responder en un plazo máximo de 48 horas laborables.</p>

        <h2 className="font-display text-lg text-foreground">8. Legislación Aplicable</h2>
        <p>Estas condiciones se rigen por la legislación española. En caso de litigio, serán competentes los juzgados y tribunales del domicilio del consumidor.</p>
      </div>
    </div>
  </div>
);

export default CondicionesVenta;
