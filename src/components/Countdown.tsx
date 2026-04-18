import { useEffect, useState } from "react";

const TARGET = new Date("2026-04-30T00:00:00").getTime();

function calc() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-4xl md:text-6xl text-gradient-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] tracking-mystic text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Cell value={t.d} label="Dias" />
      <span className="text-gold/30 text-3xl">·</span>
      <Cell value={t.h} label="Horas" />
      <span className="text-gold/30 text-3xl">·</span>
      <Cell value={t.m} label="Min" />
      <span className="text-gold/30 text-3xl">·</span>
      <Cell value={t.s} label="Seg" />
    </div>
  );
}
