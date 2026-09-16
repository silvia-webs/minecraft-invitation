type CountdownOverlayProps = {
  value: number;
};

export function CountdownOverlay({ value }: CountdownOverlayProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
      aria-live="polite"
    >
      <span
        key={value}
        className="animate-countdown-pop font-minecraft text-[min(40vw,12rem)] leading-none text-gold opacity-50"
      >
        {value}
      </span>
    </div>
  );
}
