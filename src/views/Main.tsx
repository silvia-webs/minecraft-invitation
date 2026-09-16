import { useState } from "react";
import piedra from "@/assets/piedra.jpg";
import tuYYo from "@/assets/tu-y-yo.png";
import { ConfirmScreen } from "@/components/ConfirmScreen";
import { InviteButtons } from "@/components/InviteButtons";
import { ReasonForm } from "@/components/ReasonForm";
import { StageMessage } from "@/components/StageMessage";
import {
  confirmCopy,
  getNoScale,
  getYesScale,
  MAX_NO_COUNT,
  openWhatsApp,
  schedule,
  stages,
  WHATSAPP_NO_PREFIX,
  WHATSAPP_YES_TEXT,
} from "@/data/invitation";

type MainView = "invite" | "reason" | "confirmed";

export function Main() {
  const [noCount, setNoCount] = useState(0);
  const [view, setView] = useState<MainView>("invite");

  const stageIndex = Math.min(noCount, stages.length - 1);
  const stage = stages[stageIndex];

  const handleYes = () => {
    openWhatsApp(WHATSAPP_YES_TEXT);
    setView("confirmed");
  };

  const handleNo = () => {
    const next = noCount + 1;
    if (next >= MAX_NO_COUNT) {
      setNoCount(next);
      setView("reason");
      return;
    }
    setNoCount(next);
  };

  const handleDecline = (reason: string) => {
    openWhatsApp(`${WHATSAPP_NO_PREFIX}${reason}`);
  };

  return (
    <section
      className="animate-fade-in relative min-h-dvh w-full overflow-y-auto bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${piedra})` }}
    >
      <div className="absolute inset-0 bg-overlay" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-2xl flex-col items-center justify-center gap-8 px-4">
        {view === "confirmed" ? (
          <ConfirmScreen copy={confirmCopy} />
        ) : view === "reason" ? (
          <ReasonForm onSubmit={handleDecline} onYes={handleYes} />
        ) : (
          <>
            <h1 className="font-minecraft text-center text-3xl tracking-wide text-gold drop-shadow-md md:text-5xl">
              ⛏️ INVITACIÓN OFICIAL ⛏️
            </h1>

            {stage.showHero ? (
              <img
                src={tuYYo}
                alt="Nosotros en estilo Minecraft"
                className="h-auto w-[min(80vw,20rem)] mix-blend-lighten drop-shadow-xl md:w-[22rem]"
                draggable={false}
              />
            ) : null}

            {stage.showSchedule ? (
              <>
                <StageMessage title={stage.title} />
                <div className="w-full max-w-md space-y-3 text-center">
                  <p className="font-minecraft text-2xl text-invite">
                    Plan de la noche:
                  </p>
                  <ul className="space-y-2 font-sans text-base text-invite-muted md:text-lg">
                    {schedule.map((item) => (
                      <li key={`${item.time}-${item.label}`}>
                        {item.icon}{" "}
                        <span className="font-semibold text-invite">
                          {item.time}
                        </span>
                        {" — "}
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <StageMessage body={stage.body} />
              </>
            ) : (
              <StageMessage title={stage.title} body={stage.body} />
            )}

            <InviteButtons
              yesLabel={stage.yesLabel}
              noLabel={stage.noLabel}
              yesScale={getYesScale(noCount)}
              noScale={getNoScale(noCount)}
              stacked={noCount > 0}
              onYes={handleYes}
              onNo={handleNo}
            />
          </>
        )}
      </div>
    </section>
  );
}
