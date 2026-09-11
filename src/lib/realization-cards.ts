import ajmPompaPanasonic from "@/assets/ajm-pompa-panasonic-aquarea.jpg";
import ajmPompaMideaDach from "@/assets/ajm-pompa-midea-dach.jpg";
import ajmPompaStiebel from "@/assets/ajm-pompa-stiebel-outdoor.jpg";
import ajmJednostkiDuo from "@/assets/ajm-jednostki-zew-midea-duo.jpg";
import ajmKotlowniaPanasonic from "@/assets/ajm-kotlownia-panasonic-galmet.jpg";
import ajmKociolHlazar from "@/assets/ajm-kociol-hlazar-pellet.jpg";
import ajmKotlowniaPellet from "@/assets/ajm-kotlownia-pellet-zasobniki.jpg";
import ajmGalmetInstalacja from "@/assets/ajm-kotlownia-galmet-instalacja.jpg";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
  /** object-position - kadr na urządzenie */
  focus?: string;
};

/** Domyślne kadry po pliku zdjęcia (wspólne dla usług). */
const FOCUS: Record<string, string> = {
  [ajmPompaPanasonic]: "50% 40%",
  [ajmPompaMideaDach]: "50% 36%",
  [ajmPompaStiebel]: "58% 40%",
  [ajmJednostkiDuo]: "36% 28%",
  [ajmKotlowniaPanasonic]: "48% 40%",
  [ajmKociolHlazar]: "64% 36%",
  [ajmKotlowniaPellet]: "52% 38%",
  [ajmGalmetInstalacja]: "42% 40%",
};

function withFocus(card: Omit<RealizationCard, "focus">): RealizationCard {
  return { ...card, focus: FOCUS[card.image] ?? "50% 42%" };
}

/**
 * Tylko realne zdjęcia klienta dopasowane do danej usługi.
 * Brak pozycji = sekcja realizacji na podstronie się nie pokazuje.
 */
const BY_SERVICE: Record<string, Omit<RealizationCard, "focus">[]> = {
  "pompy-ciepla": [
    {
      title: "Panasonic Aquarea",
      year: "2025",
      scope: "Jednostka zewnętrzna na stopach betonowych.",
      image: ajmPompaPanasonic,
      alt: "Jednostka zewnętrzna Panasonic Aquarea na stopach betonowych",
    },
    {
      title: "Kotłownia z hydroboxem",
      year: "2025",
      scope: "Hydrobox, zasobnik Galmet i naczynie wzbiorcze.",
      image: ajmKotlowniaPanasonic,
      alt: "Kotłownia z jednostką Panasonic i zasobnikiem Galmet",
    },
    {
      title: "Montaż dachowy Midea",
      year: "2025",
      scope: "Montaż jednostki zewnętrznej na dachu.",
      image: ajmPompaMideaDach,
      alt: "Jednostka zewnętrzna Midea zamontowana na dachu",
    },
    {
      title: "Stiebel Eltron",
      year: "2025",
      scope: "Jednostka zewnętrzna na budowie przy elewacji.",
      image: ajmPompaStiebel,
      alt: "Jednostka zewnętrzna Stiebel Eltron na cegłach",
    },
  ],
  "kotly-gazowe-olejowe": [
    {
      title: "Kotłownia gazowa",
      year: "2025",
      scope: "Kocioł, zasobnik CWU i orurowanie.",
      image: ajmKotlowniaPellet,
      alt: "Kotłownia z kotłem i zasobnikami",
    },
    {
      title: "Urządzenie w kotłowni",
      year: "2025",
      scope: "Montaż kotła w pomieszczeniu technicznym.",
      image: ajmKociolHlazar,
      alt: "Kocioł w kotłowni po montażu",
    },
  ],
  "kotly-biopaliwa": [
    {
      title: "Kocioł na biopaliwa",
      year: "2025",
      scope: "Montaż kotła w kotłowni.",
      image: ajmKociolHlazar,
      alt: "Kocioł na biopaliwa w kotłowni",
    },
    {
      title: "Kotłownia z zasobnikami",
      year: "2025",
      scope: "Kocioł, zasobnik CWU i bufor.",
      image: ajmKotlowniaPellet,
      alt: "Kotłownia z kotłem i zasobnikami",
    },
  ],
  "klimatyzacja-wentylacja": [
    {
      title: "Jednostki zewnętrzne",
      year: "2023",
      scope: "Dwie jednostki zewnętrzne na bloczkach betonowych.",
      image: ajmJednostkiDuo,
      alt: "Dwie jednostki zewnętrzne klimatyzacji przy elewacji",
    },
  ],
  "serwis-konserwacja": [
    {
      title: "Kotłownia po serwisie",
      year: "2025",
      scope: "Zasobnik i orurowanie w pomieszczeniu technicznym.",
      image: ajmGalmetInstalacja,
      alt: "Kotłownia z zasobnikiem po przeglądzie",
    },
  ],
  "badania-termowizyjne": [],
  solary: [],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  return (BY_SERVICE[slug] ?? []).slice(0, 4).map(withFocus);
}
