import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  const inputClasses =
    'w-full bg-transparent border-b border-border/40 px-0 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors';

  return (
    <section id="contacto" className="py-24 md:py-36">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 font-body">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight">
            Solicite acceso al{' '}
            <span className="italic gold-text">Lote 01</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto mt-5 leading-relaxed">
            Debido a la exclusividad de nuestras moléculas de grado investigación, gestionamos el stock de forma personalizada. Escríbanos para recibir su certificado de análisis y formalizar su reserva.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <input
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nombre"
              className={inputClasses}
            />
            <input
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className={inputClasses}
            />
          </div>

          <textarea
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Mensaje"
            className={`${inputClasses} resize-none`}
          />

          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="gold-gradient px-10 py-3 rounded-sm text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2.5"
            >
              <Send className="w-3.5 h-3.5" />
              {sending ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
              >
                <div className="text-center px-6">
                  <h3 className="font-display text-3xl md:text-4xl font-light mb-4">
                    Solicitud recibida
                  </h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base">
                    Nos pondremos en contacto contigo en las próximas 48 horas.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-xs text-muted-foreground font-body tracking-wide"
        >
          Contacto directo:{' '}
          <a
            href="mailto:info@aevendum.com"
            className="text-foreground hover:text-primary transition-colors"
          >
            info@aevendum.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};
