import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/34687463091?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20protocolos%20Aevendum"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7 text-white" fill="white" />
  </a>
);
