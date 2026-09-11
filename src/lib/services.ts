import { REALIZATIONS, SERVICE_AREA } from "./site";

export type Service = {
  slug: string;
  title: string;
  /** Dopełniacz: "Nasze realizacje {titleOf}" */
  titleOf: string;
  /** H1 na podstronie (z frazą lokalną). */
  headline: string;
  /** Title w <title> / OG. */
  seoTitle: string;
  /** Meta description. */
  seoDescription: string;
  short: string;
  intro: string;
  /** Krótki blok „teren działania”. */
  area: string;
  sections: { heading: string; body: string }[];
  bullets: string[];
  faq: { q: string; a: string }[];
  /** Frazy do dopasowania realizacji (title + scope). */
  match: string[];
};

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Oględziny i konsultacja",
    body: "Oglądamy budynek, ustalamy potrzeby i kierunek — bez zobowiązań.",
  },
  {
    step: "02",
    title: "Wycena",
    body: "Jasny kosztorys zakresu i urządzeń, bez niespodzianek.",
  },
  {
    step: "03",
    title: "Montaż i uruchomienie",
    body: "Montaż, uruchomienie na miejscu i instrukcja obsługi.",
  },
  {
    step: "04",
    title: "Serwis",
    body: "Przeglądy, regulacja i wsparcie po oddaniu instalacji — także dyżur 24/7.",
  },
] as const;

export type MountStep = { step: string; title: string; body: string };

/** Kroki montażu na podstronach bez galerii realizacji. */
export const SERVICE_MOUNT_STEPS: Record<string, MountStep[]> = {
  "badania-termowizyjne": [
    {
      step: "01",
      title: "Ustalenie zakresu",
      body: "Cel badania: budynek, instalacja czy lokalizacja strat ciepła.",
    },
    {
      step: "02",
      title: "Pomiar kamerą Flir",
      body: "Termogramy w warunkach umożliwiających wiarygodny odczyt.",
    },
    {
      step: "03",
      title: "Analiza",
      body: "Wskazanie mostków cieplnych, braków izolacji i anomalii.",
    },
    {
      step: "04",
      title: "Rekomendacje",
      body: "Konkretne wnioski i propozycja dalszych prac naprawczych.",
    },
  ],
  solary: [
    {
      step: "01",
      title: "Oględziny i dobór",
      body: "Nasłonecznienie, dach / grunt, zapotrzebowanie na CWU.",
    },
    {
      step: "02",
      title: "Projekt układu",
      body: "Kolektory, zasobnik, automatyka i integracja z istniejącym źródłem ciepła.",
    },
    {
      step: "03",
      title: "Montaż",
      body: "Mocowanie kolektorów, instalacja hydrauliczna i uruchomienie.",
    },
    {
      step: "04",
      title: "Instruktaż",
      body: "Obsługa, sezonowa konserwacja i zasady bezpiecznej eksploatacji.",
    },
  ],
};

const AREA_DEFAULT = `Działamy w ${SERVICE_AREA}. Dojazd poza listę miejscowości uzgadniamy indywidualnie.`;

export const SERVICES: Service[] = [
  {
    slug: "kotly-gazowe-olejowe",
    title: "Kotły gazowe i olejowe",
    titleOf: "kotłów gazowych i olejowych",
    headline: "Kotły gazowe i olejowe w Zielonej Górze",
    seoTitle: "Kotły gazowe i olejowe Zielona Góra | montaż | Instal-Plast",
    seoDescription:
      "Sprzedaż i montaż kotłów gazowych oraz olejowych (kondensacyjne, niskotemperaturowe) w Zielonej Górze i na Lubuskiem. Viessmann, Brötje, De Dietrich i inne.",
    short: "Kotły gazowe i olejowe: dobór mocy, montaż i uruchomienie kotłowni.",
    intro:
      "Sprzedaż i montaż kotłów gazowych oraz olejowych — kondensacyjnych i niskotemperaturowych. Dobór mocy, montaż i uruchomienie z instruktażem.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Sprawdzone kotły, jasny montaż",
        body: "Dobieramy kocioł do budynku i instalacji c.o. Pracujemy m.in. na urządzeniach Viessmann, Brötje i De Dietrich. Kompaktowe kotły kondensacyjne łączą wysoką sprawność z wygodą użytkowania.",
      },
      {
        heading: "Od wyceny do protokołu",
        body: "Po oględzinach przygotowujemy wycenę, montujemy urządzenie, uruchamiamy je i zostawiamy jasną instrukcję obsługi. Możliwy późniejszy serwis i przeglądy.",
      },
    ],
    bullets: [
      "Dobór mocy do strat ciepła budynku",
      "Kotły gazowe i olejowe (kondensacyjne / niskotemperaturowe)",
      "Integracja z c.o. i CWU",
      "Uruchomienie z pomiarami i instruktażem",
      "Dokumentacja i protokół",
      "Serwis gwarancyjny i pogwarancyjny",
    ],
    faq: [
      {
        q: "Gaz czy olej — co wybrać?",
        a: "Zależy od przyłącza gazu, kosztów paliwa i układu kotłowni. Porównujemy warianty na oględzinach.",
      },
      {
        q: "Czy montujecie kotły kondensacyjne?",
        a: "Tak — to standard w naszej ofercie gazowej, przy odpowiednim odprowadzeniu kondensatu i spalin.",
      },
    ],
    match: ["kotł", "gazow", "olejow", "kondensacyj"],
  },
  {
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    titleOf: "pomp ciepła",
    headline: "Pompy ciepła w Zielonej Górze i na Lubuskiem",
    seoTitle: "Pompy ciepła Zielona Góra | montaż | Instal-Plast",
    seoDescription:
      "Sprzedaż i montaż pomp ciepła w Zielonej Górze i województwie lubuskim. Dobór mocy, uruchomienie i serwis. Bezpłatna konsultacja.",
    short: "Dobór i montaż pomp ciepła: ogrzewanie, chłodzenie i ciepła woda.",
    intro:
      "Sprzedaż i montaż pomp ciepła dla domów i obiektów. Niższe koszty ogrzewania, komfort przez cały rok — z uruchomieniem i instruktażem.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Dlaczego pompa ciepła",
        body: "Jedna instalacja ogrzewa zimą i często chłodzi latem. Moc liczymy do konkretnego budynku, nie „na oko” z metrażu.",
      },
      {
        heading: "Montaż i uruchomienie",
        body: "Dobieramy jednostkę, prowadzimy instalację i automatykę, ustawiamy krzywe grzania. Po rozruchu zostajesz z jasną instrukcją i opieką serwisową.",
      },
    ],
    bullets: [
      "Obliczenie mocy do strat ciepła",
      "Jednostka zewnętrzna + hydrobox / bufor",
      "Podłączenie do c.o., podłogówki i CWU",
      "Krzywa grzania i automatyka",
      "Uruchomienie z protokołem",
      "Przeglądy i wsparcie serwisowe",
    ],
    faq: [
      {
        q: "Czy pompa ma sens w starszym domu?",
        a: "Często tak, po sprawdzeniu izolacji i instalacji. Decyzja po oględzinach, nie z katalogu.",
      },
      {
        q: "Czy pomagacie przy dofinansowaniu?",
        a: "Doradzamy przy wyborze rozwiązania pod kątem programów wsparcia. Szczegóły omawiamy indywidualnie.",
      },
    ],
    match: ["pomp", "hydrobox", "ciepła"],
  },
  {
    slug: "klimatyzacja-wentylacja",
    title: "Klimatyzacja i wentylacja",
    titleOf: "klimatyzacji i wentylacji",
    headline: "Klimatyzacja i wentylacja w Zielonej Górze",
    seoTitle: "Klimatyzacja Zielona Góra | wentylacja | Instal-Plast",
    seoDescription:
      "Sprzedaż i montaż klimatyzacji oraz wentylacji do biur i mieszkań w Zielonej Górze. Airwell, Acson, Dospel. Serwis gwarancyjny i pogwarancyjny.",
    short: "Klimatyzacja i wentylacja do biur i mieszkań — montaż i serwis.",
    intro:
      "Sprzedaż i montaż klimatyzatorów oraz systemów wentylacji do biur i mieszkań. Uruchomienie, przeglądy i serwis.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Komfort latem i poza sezonem",
        body: "Dobieramy moc do pomieszczeń i nasłonecznienia. W ofercie m.in. urządzenia Airwell, Acson i Dospel — z jonizacją i programami pracy dziennej / nocnej.",
      },
      {
        heading: "Montaż i serwis",
        body: "Prowadzimy freon i skropliny estetycznie, uruchamiamy instalację i pokazujemy obsługę. Oferujemy też serwis gwarancyjny i pogwarancyjny.",
      },
    ],
    bullets: [
      "Dobór mocy do metrażu i nasłonecznienia",
      "Klimatyzatory Airwell, Acson, Dospel",
      "Montaż jednostek wewnętrznych i zewnętrznych",
      "Wentylacja pomieszczeń",
      "Serwis gwarancyjny i pogwarancyjny",
      "Przeglądy i czyszczenie",
    ],
    faq: [
      {
        q: "Czy klimatyzacja też grzeje?",
        a: "Tak, większość nowoczesnych jednostek pracuje w trybie grzania — dobra opcja uzupełniająca poza sezonem.",
      },
      {
        q: "Czy serwisujecie urządzenia kupione indziej?",
        a: "Tak — przeglądy i naprawy uzgadniamy po oględzinach.",
      },
    ],
    match: ["klimatyz", "wentylac", "split", "airwell"],
  },
  {
    slug: "badania-termowizyjne",
    title: "Badania termowizyjne",
    titleOf: "badań termowizyjnych",
    headline: "Badania termowizyjne Flir — Zielona Góra",
    seoTitle: "Termowizja Zielona Góra | kamera Flir | Instal-Plast",
    seoDescription:
      "Pomiary termowizyjne kamerą Flir w Zielonej Górze. Wykrywanie mostków cieplnych i braków izolacji. Raport z rekomendacjami.",
    short: "Kamera Flir: mostki cieplne, braki izolacji, diagnoza budynku.",
    intro:
      "Pomiary termowizyjne nowoczesną kamerą Flir — analiza wycieków ciepła i braków izolacji w budynku.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Po co termowizja",
        body: "To szybki sposób, by zobaczyć, gdzie budynek traci ciepło: mostki, nieszczelności, problemy z izolacją. Pomaga zaplanować sensowny remont, nie domysły.",
      },
      {
        heading: "Jak wygląda badanie",
        body: "Ustalamy zakres, wykonujemy pomiary w odpowiednich warunkach i omawiamy wyniki z konkretnymi rekomendacjami.",
      },
    ],
    bullets: [
      "Kamera Flir (podczerwień)",
      "Lokalizacja mostków cieplnych",
      "Ocena izolacji i nieszczelności",
      "Wsparcie przy termomodernizacji",
      "Jasne wnioski po pomiarze",
      "Możliwość dalszych prac naprawczych",
    ],
    faq: [
      {
        q: "Kiedy najlepiej robić badanie?",
        a: "Gdy jest wyraźna różnica temperatur wewnątrz i na zewnątrz — wtedy termogramy są najbardziej czytelne.",
      },
      {
        q: "Czy dostaję raport?",
        a: "Omawiamy wyniki na miejscu i wskazujemy, co warto poprawić. Formę dokumentacji ustalamy przy zleceniu.",
      },
    ],
    match: ["termowiz", "flir", "mostk"],
  },
  {
    slug: "kotly-biopaliwa",
    title: "Kotły na biopaliwa",
    titleOf: "kotłów na biopaliwa",
    headline: "Kotły na biopaliwa — Zielona Góra i Lubuskie",
    seoTitle: "Kotły na biopaliwa Zielona Góra | biomasa | Instal-Plast",
    seoDescription:
      "Kotły na biopaliwa (biomasa, holzgas) — sprzedaż i montaż w Zielonej Górze. Dobór mocy, kotłownia, uruchomienie.",
    short: "Kotły na biomasę i holzgas — ekologiczne źródło ciepła.",
    intro:
      "Kotły z dziedziny biopaliw (biomasa, holzgas): dobór mocy, montaż i uruchomienie jako ekologiczne źródło ciepła.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Odnawialne paliwo, wygodna eksploatacja",
        body: "Nowoczesne kotły na biomasę łączą niższy ślad węglowy z automatycznym podawaniem paliwa. Dobieramy moc i układ kotłowni pod budynek.",
      },
      {
        heading: "Montaż i instruktaż",
        body: "Planujemy miejsce na kocioł i magazyn paliwa, podłączamy instalację i uruchamiamy urządzenie z ustawieniami na miejscu.",
      },
    ],
    bullets: [
      "Dobór mocy do strat ciepła",
      "Biomasa / holzgas",
      "Układ kotłowni i magazynu paliwa",
      "Podłączenie do c.o. i CWU",
      "Uruchomienie i instruktaż",
      "Przeglądy i serwis",
    ],
    faq: [
      {
        q: "Biomasa czy pompa ciepła?",
        a: "Zależy od budynku, budżetu i dostępności paliwa. Porównujemy warianty na oględzinach.",
      },
      {
        q: "Ile miejsca potrzeba na paliwo?",
        a: "Zależy od mocy i sposobu zasilania. Na wizycie mierzymy i proponujemy układ.",
      },
    ],
    match: ["biopal", "biomas", "holzgas", "pellet"],
  },
  {
    slug: "solary",
    title: "Systemy solarne",
    titleOf: "systemów solarnych",
    headline: "Systemy solarne w Zielonej Górze",
    seoTitle: "Kolektory słoneczne Zielona Góra | solary | Instal-Plast",
    seoDescription:
      "Montaż systemów solarnych (kolektory) w Zielonej Górze i na Lubuskiem. CWU z energią słoneczną, integracja z kotłem lub pompą.",
    short: "Kolektory słoneczne do CWU — montaż i integracja z kotłownią.",
    intro:
      "Systemy solarne do podgrzewu wody użytkowej: dobór kolektorów, montaż i integracja z istniejącym źródłem ciepła.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Ciepła woda z słońca",
        body: "Dobrze dobrany układ solarny obniża koszty CWU w sezonie. Dobieramy powierzchnię kolektorów i zasobnik do zużycia w domu.",
      },
      {
        heading: "Integracja z kotłownią",
        body: "Łączymy solary z kotłem gazowym, olejowym lub pompą ciepła tak, by układ działał stabilnie przez cały rok.",
      },
    ],
    bullets: [
      "Dobór kolektorów i zasobnika",
      "Montaż na dachu lub konstrukcji",
      "Integracja z kotłem / pompą ciepła",
      "Automatyka i zabezpieczenia",
      "Uruchomienie i instruktaż",
      "Przeglądy sezonowe",
    ],
    faq: [
      {
        q: "Czy solary wystarczą zimą?",
        a: "Zimą wspomagają CWU, ale zwykle nie zastępują głównego źródła ciepła. Dobieramy układ realistycznie.",
      },
      {
        q: "Czy da się dołożyć solary do istniejącej kotłowni?",
        a: "Często tak — po ocenie zasobnika, miejsca na kolektory i automatyki.",
      },
    ],
    match: ["solar", "kolektor", "słońc"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedRealizations(slug: string, limit = 4) {
  const service = getService(slug);
  if (!service?.match.length) return [];
  const keys = service.match.map((k) => k.toLowerCase());
  return REALIZATIONS.filter((r) => {
    const hay = `${r.title} ${r.scope}`.toLowerCase();
    return keys.some((k) => hay.includes(k));
  }).slice(0, limit);
}
