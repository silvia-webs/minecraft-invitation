import { useEffect, useState, type CSSProperties } from "react";
import mechero from "@/assets/mechero.webp";
import tierra from "@/assets/tierra.jpg";
import { CountdownOverlay } from "@/components/CountdownOverlay";
import { ExplosionEffect } from "@/components/ExplosionEffect";
import { TntButton } from "@/components/TntButton";

type FusePhase = "idle" | "countdown" | "explosion";

type PortraitProps = {
  onComplete: () => void;
};

export function Portrait({ onComplete }: PortraitProps) {
  const [phase, setPhase] = useState<FusePhase>("idle");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (phase !== "countdown") return;

    if (count <= 0) {
      setPhase("explosion");
      return;
    }

    const timer = window.setTimeout(() => {
      setCount((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "explosion") return;

    const timer = window.setTimeout(() => {
      onComplete();
    }, 800);

    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  const handleIgnite = () => {
    if (phase !== "idle") return;
    setCount(3);
    setPhase("countdown");
  };

  const portraitStyle: CSSProperties = {
    backgroundImage: `url(${tierra})`,
    cursor: `url(${mechero}) 8 8, auto`,
  };

  return (
    <section
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-cover bg-center"
      style={portraitStyle}
    >
      {phase === "idle" || phase === "countdown" ? (
        <TntButton disabled={phase !== "idle"} onIgnite={handleIgnite} />
      ) : null}

      {phase === "countdown" && count > 0 ? (
        <CountdownOverlay value={count} />
      ) : null}

      {phase === "explosion" ? <ExplosionEffect /> : null}
    </section>
  );
}
