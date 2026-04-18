import { motion } from "framer-motion";
import ravensImg from "@/assets/ravens.jpg";
import geometryImg from "@/assets/sacred-geometry.jpg";

const purposeItems = [
  {
    title: "Propósito",
    side: "Lições positivas e sombras a integrar",
    items: ["Coragem", "Discernimento", "Compaixão", "Disciplina", "Visão"],
  },
  {
    title: "Conexões",
    side: "Números de telefone, residência e sorte",
    items: ["Telefone Pessoal", "Endereço Residencial", "Número da Sorte"],
  },
  {
    title: "Astrologia & Espírito",
    side: "Signo, decanato, relacionamentos, anjo guardião",
    items: ["Signo Solar", "Decanato", "Sinastria", "Anjo Guardião"],
  },
];

export function PurposeSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]">
        <img
          src={ravensImg}
          alt="Runic ravens"
          loading="lazy"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-3xl"
        >
          <span className="tracking-mystic text-[10px] text-ice mb-4 block">— camadas finais —</span>
          <h2 className="font-display text-5xl md:text-7xl">
            Os <span className="italic text-gradient-gold">corvos</span> sussurram o que
            <br />
            os <span className="italic text-ice">números</span> escondem.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {purposeItems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-8 md:p-10 hover:bg-card/40 transition-colors duration-700"
            >
              <span className="tracking-mystic text-[10px] text-gold/60">{`0${i + 1}`}</span>
              <h3 className="font-display text-3xl mt-3 mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground mb-6 italic">{p.side}</p>
              <ul className="space-y-3">
                {p.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-sm text-foreground/80 font-light"
                  >
                    <span className="h-px w-4 bg-gold/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sacred geometry callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mt-32 md:mt-48 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square animate-float">
            <img
              src={geometryImg}
              alt="Sacred geometry of the number nine"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-contain animate-pulse-glow"
            />
          </div>
          <div>
            <span className="tracking-mystic text-[10px] text-gold mb-4 block">— o nove —</span>
            <h3 className="font-display text-4xl md:text-5xl mb-6">
              O número nove é o <span className="italic text-gradient-gold">fechamento</span> e
              também o <span className="italic">portal.</span>
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Onde os ciclos se completam, novos começos germinam. 9Mane Black é a leitura
              alquímica do que vibra em você — uma cartografia sagrada da sua alma, traçada não com
              tinta, mas com vibração.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
