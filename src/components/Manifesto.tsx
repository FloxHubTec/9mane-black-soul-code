import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import treeImg from "@/assets/tree-of-life.jpg";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const treeY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const treeOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.15, 0.5, 0.5, 0.15]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center">
      <motion.div style={{ y: treeY, opacity: treeOpacity }} className="absolute inset-0">
        <img
          src={treeImg}
          alt="Tree of life"
          loading="lazy"
          width={1920}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-2 md:pt-2">
          <span className="tracking-mystic text-[10px] text-gold">— I</span>
        </div>
        <div className="md:col-span-10 space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-7xl"
          >
            Você não é apenas{" "}
            <span className="italic text-gradient-gold">um nome.</span>
            <br />
            Você é uma <span className="italic text-ice">vibração.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed"
          >
            Antes do tempo, antes da forma — havia o número. Cada alma traz consigo um código, escrito em
            datas, sílabas e ciclos. <span className="text-foreground">9Mane Black</span> é o ritual de
            decifrar esse código. Uma jornada não para responder quem você é, mas para revelar o que
            você sempre foi.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
