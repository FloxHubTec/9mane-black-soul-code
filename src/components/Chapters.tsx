import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type Chapter = {
  number: string;
  roman: string;
  name: string;
  subtitle: string;
  description: string;
  accent: "gold" | "ice" | "fire";
};

export const chapters: Chapter[] = [
  {
    number: "01",
    roman: "I",
    name: "Dia Natalício",
    subtitle: "A Essência Emocional",
    description:
      "O número que pulsa em silêncio sob cada decisão. A vibração íntima que rege seus afetos, sua forma de amar e o modo como o mundo toca seu interior.",
    accent: "gold",
  },
  {
    number: "02",
    roman: "II",
    name: "Dia de Nascimento",
    subtitle: "Talento Natural",
    description:
      "O dom que veio antes da escolha. Aquilo que se faz com naturalidade enquanto outros lutam para aprender — sua assinatura inata no mundo.",
    accent: "ice",
  },
  {
    number: "03",
    roman: "III",
    name: "Motivação · Alma",
    subtitle: "Verdadeiros Desejos",
    description:
      "O que arde por trás da máscara. Os anseios profundos que movem a alma, mesmo quando a razão tenta silenciá-los.",
    accent: "fire",
  },
  {
    number: "04",
    roman: "IV",
    name: "Exterior",
    subtitle: "Imagem Social",
    description:
      "A primeira impressão que você projeta. A persona — escudo e cartão de visita — que o mundo enxerga antes de conhecer sua verdade.",
    accent: "gold",
  },
  {
    number: "05",
    roman: "V",
    name: "Expressão · Missão",
    subtitle: "Potencial",
    description:
      "A síntese do que você veio realizar. O território de talentos onde sua alma se expressa em plenitude — seu chamado expressivo.",
    accent: "ice",
  },
  {
    number: "06",
    roman: "VI",
    name: "Caminho da Vida",
    subtitle: "A Grande Estrada",
    description:
      "A trilha mestra. A direção principal pela qual sua existência se desenrola — o eixo cósmico em torno do qual sua história gira.",
    accent: "gold",
  },
  {
    number: "07",
    roman: "VII",
    name: "Impressão",
    subtitle: "Vibração Automática",
    description:
      "A energia que você emite sem perceber. O perfume sutil que precede sua chegada e permanece após sua saída.",
    accent: "ice",
  },
  {
    number: "08",
    roman: "VIII",
    name: "Bloqueios",
    subtitle: "Padrões de Energia",
    description:
      "Os nós invisíveis que represam sua força. Os ciclos repetitivos que pedem consciência para se desfazer e libertar fluxo.",
    accent: "fire",
  },
  {
    number: "09",
    roman: "IX",
    name: "Lição Cármica",
    subtitle: "Evolução",
    description:
      "O ensinamento que sua alma escolheu aprender nesta encarnação. O exercício espiritual ao qual você foi designado.",
    accent: "gold",
  },
  {
    number: "10",
    roman: "X",
    name: "Dívida Cármica",
    subtitle: "Reequilíbrio",
    description:
      "Os ecos de outras vidas pedindo passagem. As compensações kármicas que se transformam em portais de maturidade.",
    accent: "fire",
  },
  {
    number: "11",
    roman: "XI",
    name: "Missão · Maturidade",
    subtitle: "A Versão Sábia",
    description:
      "Aquele que você se torna após atravessar o fogo. A forma final, lapidada pelos ciclos — sua versão mais íntegra e desperta.",
    accent: "ice",
  },
  {
    number: "12",
    roman: "XII",
    name: "Ciclos Pessoais",
    subtitle: "Ano · Mês · Dia",
    description:
      "O calendário invisível da alma. Os ritmos que regem cada amanhecer, cada estação, cada movimento sutil do destino.",
    accent: "gold",
  },
];

export function ChapterCard({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const accentClass =
    chapter.accent === "gold"
      ? "text-gold border-gold/30"
      : chapter.accent === "ice"
        ? "text-ice border-ice/30"
        : "text-fire border-fire/30";

  const isOdd = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2 }}
      className={`group relative ${isOdd ? "md:translate-y-24" : ""}`}
    >
      <div className="relative overflow-hidden border border-border bg-card/30 backdrop-blur-sm p-8 md:p-10 transition-all duration-700 hover:border-gold/40 hover:bg-card/60">
        {/* Number watermark */}
        <div
          className={`absolute -top-6 -right-4 font-display text-[12rem] leading-none opacity-[0.06] select-none pointer-events-none ${accentClass}`}
        >
          {chapter.number}
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className={`tracking-mystic text-[10px] ${accentClass} pr-3 border-r`}>
              {chapter.roman}
            </span>
            <span className="tracking-mystic text-[10px] text-muted-foreground">
              {chapter.subtitle}
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl mb-5 group-hover:translate-x-1 transition-transform duration-700">
            {chapter.name}
          </h3>

          <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-md">
            {chapter.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className={`h-px w-10 bg-current ${accentClass.split(" ")[0]}`} />
            <span className="tracking-mystic text-[9px] text-muted-foreground">
              capítulo {chapter.number}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ChaptersGrid() {
  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 md:mb-32 text-center"
        >
          <span className="tracking-mystic text-[10px] text-gold/70 mb-6 block">
            — os doze portais —
          </span>
          <h2 className="font-display text-5xl md:text-7xl">
            Doze chaves para uma <span className="italic text-gradient-gold">única alma.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {chapters.map((c, i) => (
            <ChapterCard key={c.number} chapter={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
