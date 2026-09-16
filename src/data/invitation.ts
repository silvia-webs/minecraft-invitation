export const WHATSAPP_NUMBER = "573147105676";

export const WHATSAPP_YES_TEXT = "si quiero jugar minecraft contigo corazón ❤️";

export const WHATSAPP_NO_PREFIX = "Amor hoy no puedo porque: ";

export const REASON_YES_LABEL = "Te mentí amor, sí quiero 🥺";

export type ScheduleItem = {
  icon: string;
  time: string;
  label: string;
};

export const schedule: ScheduleItem[] = [
  { icon: "🏋️", time: "7:30 PM", label: "Gimnasio" },
  { icon: "🎮", time: "9:00 PM", label: "Minecraft juntos" },
  {
    icon: "🛏️",
    time: "Después",
    label: "ser felices y hacer casitas cuadradas",
  },
];

export type InvitationStage = {
  id: string;
  showHero: boolean;
  showSchedule: boolean;
  title: string;
  body: string[];
  yesLabel: string;
  noLabel: string;
};

export const stages: InvitationStage[] = [
  {
    id: "invite",
    showHero: true,
    showSchedule: true,
    title: "Amor, ¿quieres jugar Minecraft conmigo esta noche?",
    body: ["¿Aceptas?"],
    yesLabel: "SÍ, OBVIO",
    noLabel: "NO",
  },
  {
    id: "wrong-button",
    showHero: false,
    showSchedule: false,
    title: "¿¿¿NO??? 😐",
    body: ["Amor, creo que presionaste el botón equivocado."],
    yesLabel: "Intentar otra vez",
    noLabel: "NO",
  },
  {
    id: "tricking",
    showHero: false,
    showSchedule: false,
    title: "¿Me estás engañando? 😭",
    body: [
      "Porque no encuentro ninguna otra explicación para que hayas dicho que no a jugar Minecraft conmigo.",
    ],
    yesLabel: "Bueno, SÍ quiero 🥺",
    noLabel: "NO",
  },
  {
    id: "love",
    showHero: false,
    showSchedule: false,
    title: "¿YA NO ME AMAS? 💔",
    body: [
      "En serio no puedes? 😔",
      "Yo solo quería hacer una casita contigo.",
    ],
    yesLabel: "PERDÓN, SÍ QUIERO 😭",
    noLabel: "NO",
  },
  {
    id: "last-chance",
    showHero: false,
    showSchedule: false,
    title: "Última oportunidad.",
    body: [
      "Piénsalo bien, amor.",
      "Son las 9 PM.",
      "Tú. Yo. Minecraft.",
      "¿Qué más necesitas?",
    ],
    yesLabel: "SÍ, MI AMOR 💚",
    noLabel: "NO",
  },
];

export const MAX_NO_COUNT = stages.length;

export type ConfirmCopy = {
  title: string;
  subtitle: string;
  lines: ScheduleItem[];
  closing: string;
};

export const confirmCopy: ConfirmCopy = {
  title: "¡SABÍA QUE DIRÍAS QUE SÍ! 🥰⛏️",
  subtitle: "Cita confirmada 💚",
  lines: [
    { icon: "🏋️", time: "7:30 PM", label: "Gimnasio" },
    { icon: "🎮", time: "9:00 PM", label: "Minecraft" },
    { icon: "👫", time: "", label: "Jugamos juntos" },
    { icon: "❤️", time: "", label: "Te amo" },
  ],
  closing: "Nos vemos en el mundo, minero. ⛏️",
};

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(text: string): void {
  window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
}

export function getYesScale(noCount: number): number {
  return 1 + noCount * 0.25;
}

export function getNoScale(noCount: number): number {
  return Math.max(0.35, 1 - noCount * 0.18);
}
