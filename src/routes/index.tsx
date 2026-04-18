import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { ChaptersGrid } from "@/components/Chapters";
import { PhoenixInterlude } from "@/components/PhoenixInterlude";
import { PurposeSection } from "@/components/PurposeSection";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "9Mane Black — A jornada da sua alma codificada em números" },
      {
        name: "description",
        content:
          "9Mane Black: uma experiência imersiva de numerologia esotérica. A alma decifrada em vibração. Lançamento 30 de Abril.",
      },
      { property: "og:title", content: "9Mane Black — Numerologia Esotérica" },
      {
        property: "og:description",
        content: "A jornada da sua alma codificada em números. 30 de Abril.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Manifesto />
      <ChaptersGrid />
      <PhoenixInterlude />
      <PurposeSection />
      <FinalCTA />
    </main>
  );
}
