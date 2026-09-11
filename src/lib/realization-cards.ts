import imgPompa from "@/assets/ip-realizacja-pompa.jpg";
import imgKociol from "@/assets/ip-realizacja-kociol.jpg";
import imgKlima from "@/assets/ip-realizacja-klima.jpg";
import imgTermo from "@/assets/ip-realizacja-termowizja.jpg";
import imgSolary from "@/assets/ip-realizacja-solary.jpg";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
  focus?: string;
};

const FOCUS: Record<string, string> = {
  [imgPompa]: "50% 45%",
  [imgKociol]: "50% 42%",
  [imgKlima]: "50% 40%",
  [imgTermo]: "45% 40%",
  [imgSolary]: "50% 40%",
};

function withFocus(card: Omit<RealizationCard, "focus">): RealizationCard {
  return { ...card, focus: FOCUS[card.image] ?? "50% 42%" };
}

/** Poglądowe zdjęcia AI — do podmiany na materiały klienta. */
const BY_SERVICE: Record<string, Omit<RealizationCard, "focus">[]> = {
  "pompy-ciepla": [
    {
      title: "Pompa ciepła powietrze-woda",
      year: "2025",
      scope: "Jednostka zewnętrzna przy domu jednorodzinnym.",
      image: imgPompa,
      alt: "Jednostka zewnętrzna pompy ciepła przy domu",
    },
  ],
  "kotly-gazowe-olejowe": [
    {
      title: "Kotłownia gazowa",
      year: "2025",
      scope: "Kocioł kondensacyjny i orurowanie.",
      image: imgKociol,
      alt: "Kocioł gazowy w kotłowni",
    },
  ],
  "kotly-biopaliwa": [
    {
      title: "Kotłownia na biopaliwa",
      year: "2025",
      scope: "Montaż kotła w pomieszczeniu technicznym.",
      image: imgKociol,
      alt: "Kotłownia po montażu",
    },
  ],
  "klimatyzacja-wentylacja": [
    {
      title: "Klimatyzacja multi-split",
      year: "2025",
      scope: "Jednostki zewnętrzne na elewacji.",
      image: imgKlima,
      alt: "Jednostki zewnętrzne klimatyzacji",
    },
  ],
  "badania-termowizyjne": [
    {
      title: "Badanie termowizyjne",
      year: "2025",
      scope: "Inspekcja mostków cieplnych elewacji.",
      image: imgTermo,
      alt: "Pomiar termowizyjny budynku",
    },
  ],
  solary: [
    {
      title: "Kolektory słoneczne",
      year: "2025",
      scope: "Montaż na dachu domu.",
      image: imgSolary,
      alt: "Kolektory solarne na dachu",
    },
  ],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  return (BY_SERVICE[slug] ?? []).slice(0, 4).map(withFocus);
}
