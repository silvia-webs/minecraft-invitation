type StageMessageProps = {
  title?: string;
  body?: string[];
};

export function StageMessage({ title, body = [] }: StageMessageProps) {
  if (!title && body.length === 0) return null;

  return (
    <div className="mx-auto max-w-xl space-y-4 text-center">
      {title ? (
        <h2 className="font-minecraft text-3xl leading-tight text-invite drop-shadow-md md:text-4xl">
          {title}
        </h2>
      ) : null}
      {body.map((line) => (
        <p
          key={line}
          className="font-sans text-base text-invite-muted md:text-lg"
        >
          {line}
        </p>
      ))}
    </div>
  );
}
