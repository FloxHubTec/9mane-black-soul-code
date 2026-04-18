import { motion } from "framer-motion";
import { Countdown } from "./Countdown";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden bg-gradient-aurum">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="tracking-mystic text-[10px] text-gold mb-6 block"
        >
          — em breve —
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-6xl md:text-8xl leading-[0.9]"
        >
          A revelação <br />
          <span className="italic text-gradient-gold">aguarda você.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-8 text-muted-foreground max-w-md mx-auto font-light"
        >
          30 de Abril. Marca o início de um novo ciclo — o seu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14"
        >
          <Countdown />
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-16 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="seu.email@alma.com"
            className="flex-1 bg-transparent border border-border px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 text-xs tracking-mystic font-medium hover:opacity-90 transition-opacity shadow-gold"
          >
            Receber o ritual
          </button>
        </motion.form>

        <div className="mt-32 pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-mystic text-muted-foreground">
          <span>9MANE · BLACK</span>
          <span>MMXXVI · IX</span>
          <span>Codificado em luz</span>
        </div>
      </div>
    </section>
  );
}
