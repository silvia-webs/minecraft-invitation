export function ExplosionEffect() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
      aria-hidden
    >
      <div
        className="animate-explosion size-[min(70vw,28rem)] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-explosion-core) 0%, var(--color-explosion) 45%, transparent 70%)",
        }}
      />
      <div className="animate-explosion absolute size-[min(40vw,16rem)] rounded-full bg-explosion-core/90 blur-md" />
    </div>
  );
}
