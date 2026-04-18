import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import phoenixImg from "@/assets/phoenix.jpg";

export function PhoenixInterlude() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.1, 1.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 0.9, 0.9, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative h-[140vh] w-full overflow-hidden">
      <motion.div
        style={{ scale, rotate, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={phoenixImg}
          alt="Phoenix of fire and ice"
          loading="lazy"
          width={1920}
          height={1920}
          className="h-full w-full object-contain object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

      <motion.div
        style={{ y: textY }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 z-10"
      >
        <span className="tracking-mystic text-[10px] text-fire/80 mb-6">— interlúdio —</span>
        <h2 className="font-display text-5xl md:text-8xl max-w-4xl leading-[0.95]">
          Renascer é um <span className="text-gradient-phoenix italic">verbo numerológico.</span>
        </h2>
        <p className="mt-8 max-w-md text-muted-foreground text-sm md:text-base font-light">
          Entre o fogo e o gelo, entre o que termina e o que começa — o número é a ponte.
        </p>
      </motion.div>
    </section>
  );
}
