type InviteButtonsProps = {
  yesLabel: string;
  noLabel: string;
  yesScale: number;
  noScale: number;
  stacked?: boolean;
  onYes: () => void;
  onNo: () => void;
};

export function InviteButtons({
  yesLabel,
  noLabel,
  yesScale,
  noScale,
  stacked = false,
  onYes,
  onNo,
}: InviteButtonsProps) {
  return (
    <div
      className={
        stacked
          ? "flex flex-col items-center justify-center gap-6 py-4 md:gap-8"
          : "flex flex-wrap items-center justify-center gap-4 md:gap-8"
      }
    >
      <button
        type="button"
        onClick={onYes}
        style={{ transform: `scale(${yesScale})` }}
        className="origin-center rounded-md bg-yes px-5 py-3 font-minecraft text-xl text-white shadow-md transition-transform duration-300 hover:bg-yes-hover md:text-2xl"
      >
        {yesLabel}
      </button>
      <button
        type="button"
        onClick={onNo}
        style={{ transform: `scale(${noScale})` }}
        className="origin-center rounded-md bg-no px-5 py-3 font-minecraft text-xl text-white shadow-md transition-transform duration-300 hover:bg-no-hover md:text-2xl"
      >
        {noLabel}
      </button>
    </div>
  );
}
