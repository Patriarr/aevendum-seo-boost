import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const interestOptions = [
  'Protocolo 02 — Renovación Molecular',
  'Protocolo 03 — Optimización Cognitiva',
  'Protocolo 04 — Resiliencia Biológica',
  'Aevendum Essential Trio',
];

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke('notify-email', {
        body: { type: 'contact', data: { ...form } },
      });
      if (error) throw error;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setForm({ name: '', email: '', whatsapp: '', interest: '' });
    } catch {
      toast.error('Error al enviar. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  const inputClasses =
    'w-full bg-card border border-border/50 rounded-sm px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-gold/50 transition-colors';

  return (
    <section id="contacto" className="py-24 md:py-36">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-body font-medium">Información</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight">
            Dossier Técnico e Información de <span className="gold-text font-medium">Lanzamiento</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto mt-5 leading-relaxed">
            Debido a los estrictos procesos de control de calidad y a la llegada de los lotes limitados desde Berlín, nuestras moléculas están en fase de catalogación final. Deje sus datos para recibir la ficha técnica de cada protocolo y ser notificado 24h antes de la apertura del stock en España.
          </p>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-body text-muted-foreground mb-1.5 block font-medium">Nombre Completo</label>
            <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre completo" className={inputClasses} />
          </div>
          <div>
            <label className="text-xs font-body text-muted-foreground mb-1.5 block font-medium">Email de contacto</label>
            <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className={inputClasses} />
          </div>
          <div>
            <label className="text-xs font-body text-muted-foreground mb-1.5 block font-medium">WhatsApp <span className="text-muted-foreground/50">(opcional)</span></label>
            <input type="tel" maxLength={20} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="+34 600 000 000" className={inputClasses} />
          </div>
          <div>
            <label className="text-xs font-body text-muted-foreground mb-1.5 block font-medium">Interés</label>
            <select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={`${inputClasses} appearance-none cursor-pointer`}>
              <option value="" disabled>Selecciona un protocolo</option>
              {interestOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>
          <button type="submit" disabled={sending}
            className="w-full gold-gradient text-primary-foreground py-4 rounded-sm text-sm font-body font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60">
            <Send className="w-4 h-4" />
            {sending ? 'Enviando...' : 'Enviar Solicitud de Información'}
          </button>
          {submitted && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-4">
              <p className="font-display text-lg font-semibold text-foreground">Solicitud recibida</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Nos pondremos en contacto contigo en las próximas 48 horas.</p>
            </motion.div>
          )}
        </motion.form>
        <p className="text-center mt-10 text-xs text-muted-foreground font-body">
          Contacto directo: <a href="mailto:info@aevendum.com" className="text-foreground hover:text-primary transition-colors font-medium">info@aevendum.com</a>
        </p>
      </div>
    </section>
  );
};
