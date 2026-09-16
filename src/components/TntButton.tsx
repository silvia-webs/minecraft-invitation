import tnt from "@/assets/tnt.png";

type TntButtonProps = {
  disabled?: boolean;
  onIgnite: () => void;
};

export function TntButton({ disabled = false, onIgnite }: TntButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onIgnite}
      aria-label="Encender la TNT"
      className="relative z-10 border-0 bg-transparent p-0 transition-transform duration-200 enabled:hover:scale-105 enabled:active:scale-95 disabled:cursor-default"
    >
      <img
        src={tnt}
        alt="Bloque de TNT de Minecraft"
        className="h-auto w-[min(55vw,16rem)] mix-blend-lighten drop-shadow-lg md:w-[18rem]"
        draggable={false}
      />
    </button>
  );
}
