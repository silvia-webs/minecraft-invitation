import type { ConfirmCopy } from "@/data/invitation";

type ConfirmScreenProps = {
  copy: ConfirmCopy;
};

export function ConfirmScreen({ copy }: ConfirmScreenProps) {
  return (
    <div className="animate-fade-in mx-auto flex max-w-lg flex-col items-center gap-6 px-4 text-center">
      <h1 className="font-minecraft text-3xl text-gold drop-shadow-md md:text-5xl">
        {copy.title}
      </h1>
      <p className="font-minecraft text-2xl text-invite md:text-3xl">
        {copy.subtitle}
      </p>
      <ul className="space-y-3 font-sans text-lg text-invite-muted md:text-xl">
        {copy.lines.map((line) => (
          <li key={`${line.icon}-${line.label}`}>
            {line.icon}{" "}
            {line.time ? (
              <>
                <span className="font-semibold text-invite">{line.time}</span>
                {" — "}
              </>
            ) : null}
            {line.label}
          </li>
        ))}
      </ul>
      <p className="font-minecraft text-xl text-invite md:text-2xl">
        {copy.closing}
      </p>
    </div>
  );
}
