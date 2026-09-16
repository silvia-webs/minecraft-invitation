import { useState } from "react";
import { REASON_YES_LABEL } from "@/data/invitation";

type ReasonFormProps = {
  onSubmit: (reason: string) => void;
  onYes: () => void;
};

export function ReasonForm({ onSubmit, onYes }: ReasonFormProps) {
  const [reason, setReason] = useState("");

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
      <form
        className="flex w-full flex-col items-center gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const trimmed = reason.trim();
          if (!trimmed) return;
          onSubmit(trimmed);
        }}
      >
        <label
          htmlFor="decline-reason"
          className="font-minecraft text-2xl text-invite md:text-3xl"
        >
          ¿Por qué no puedes?
        </label>
        <textarea
          id="decline-reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          rows={3}
          placeholder="Escribe tu razón…"
          className="w-full resize-none rounded-md border-2 border-stone-ink/30 bg-invite/95 px-3 py-2 font-sans text-stone-ink outline-none focus:border-gold"
        />
        <button
          type="submit"
          disabled={!reason.trim()}
          className="rounded-md bg-no px-5 py-3 font-minecraft text-xl text-white shadow-md transition hover:bg-no-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          Enviar por WhatsApp
        </button>
      </form>

      <button
        type="button"
        onClick={onYes}
        className="rounded-md bg-yes px-5 py-3 font-minecraft text-xl text-white shadow-md transition hover:bg-yes-hover md:text-2xl"
      >
        {REASON_YES_LABEL}
      </button>
    </div>
  );
}
