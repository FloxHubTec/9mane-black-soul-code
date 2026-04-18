import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import lionImg from "@/assets/black-lion.jpg";
import { Countdown } from "./Countdown";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const lionY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const lionScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const lionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[140vh] w-full overflow-hidden bg-background">
      {/* Lion Background */}
      <motion.div
        style={{ y: lionY, scale: lionScale, opacity: lionOpacity }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={lionImg}
          alt="Black lion emerging from darkness"
          width={1920}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      </motion.div>

      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
      >
        <span className="tracking-mystic text-[10px] text-gold/70">IX · MMXXVI · ESOTERIC NUMEROLOGY</span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-32 md:pb-40 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] text-center"
        >
          <span className="block text-foreground">9Mane</span>
          <span className="block text-gradient-gold italic -mt-4 md:-mt-8">Black</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="mt-8 max-w-md text-center text-sm md:text-base text-muted-foreground font-light"
        >
          A jornada da sua alma codificada em números.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12"
        >
          <div className="text-[10px] tracking-mystic text-gold/60 text-center mb-4">
            Lançamento · 30 de Abril
          </div>
          <Countdown />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-mystic text-muted-foreground">Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
