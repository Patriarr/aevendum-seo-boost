import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PoliticaPrivacidad = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 font-body">
        <ArrowLeft className="w-4 h-4" /> Volver
      </Link>
      <h1 className="font-display text-3xl font-light mb-8">Política de Privacidad</h1>
      <div className="prose prose-sm prose-invert max-w-none font-body text-muted-foreground space-y-6 text-sm leading-relaxed">
        <h2 className="font-display text-lg text-foreground">1. Responsable del Tratamiento</h2>
        <p>Aevendum · Email: info@aevendum.com</p>

        <h2 className="font-display text-lg text-foreground">2. Finalidad del Tratamiento</h2>
        <p>Los datos personales recogidos a través de los formularios del sitio web serán tratados con las siguientes finalidades:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gestión de pedidos y envíos.</li>
          <li>Atención de consultas y solicitudes de contacto.</li>
          <li>Envío de comunicaciones comerciales (solo con consentimiento previo).</li>
        </ul>

        <h2 className="font-display text-lg text-foreground">3. Base Legal</h2>
        <p>El tratamiento de los datos se basa en la ejecución del contrato de compraventa, el consentimiento del interesado y el interés legítimo del responsable.</p>

        <h2 className="font-display text-lg text-foreground">4. Destinatarios</h2>
        <p>Los datos podrán ser comunicados a empresas de transporte para la gestión de envíos y a proveedores tecnológicos necesarios para el funcionamiento del servicio. No se realizan transferencias internacionales de datos fuera del EEE sin garantías adecuadas.</p>

        <h2 className="font-display text-lg text-foreground">5. Derechos del Usuario</h2>
        <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición enviando un correo a info@aevendum.com, acompañando copia de su DNI o documento identificativo equivalente.</p>

        <h2 className="font-display text-lg text-foreground">6. Plazo de Conservación</h2>
        <p>Los datos se conservarán mientras dure la relación comercial y, una vez finalizada, durante los plazos legalmente establecidos para atender posibles responsabilidades.</p>

        <h2 className="font-display text-lg text-foreground">7. Seguridad</h2>
        <p>Aevendum adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
      </div>
    </div>
  </div>
);

export default PoliticaPrivacidad;
