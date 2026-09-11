/** Dane firmy Instal-Plast (Zielona Góra). Źródła: instal-plast.pl/.eu + Google Maps. */

export const SITE_NAME = "Instal-Plast";
export const SITE_TITLE =
  "Instal-Plast — kotły, pompy ciepła, klimatyzacja i serwis | Zielona Góra";
export const COMPANY_LEGAL_NAME = 'PUH „INSTAL-PLAST” – Serwis Maciej Głowacki';

export const EMAIL = "instalplast@vp.pl";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_DISPLAY = "603 930 929";
export const PHONE_E164 = "+48603930929";
export const PHONE_HREF = `tel:${PHONE_E164}`;

export const PHONE_LANDLINE_DISPLAY = "68 453 32 82";
export const PHONE_LANDLINE_E164 = "+48684533282";
export const PHONE_LANDLINE_HREF = `tel:${PHONE_LANDLINE_E164}`;

const WHATSAPP_TEXT = encodeURIComponent(
  "Dzień dobry, chciałbym zgłosić zapytanie o instalację / serwis.",
);
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${WHATSAPP_TEXT}`;

export const ADDRESS = "Wrocławska 28, 65-427 Zielona Góra";
export const SERVICE_AREA = "Zielona Góra i województwo lubuskie";

export const MAPS_URL = "https://maps.app.goo.gl/WdbqeorkJrh6iCYh6";
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Instal-plast+Serwis+Maciej+G%C5%82owacki,+Wroc%C5%82awska+28,+65-427+Zielona+G%C3%B3ra&hl=pl&z=17&output=embed";

/** Aliasy pod starsze / alternatywne nazwy importów. */
export const PHONE = PHONE_DISPLAY;
export const PHONE_TEL = PHONE_HREF;
export const MAP_EMBED_URL = MAPS_EMBED_URL;
export const GOOGLE_MAPS_URL = MAPS_URL;
export const AREA = SERVICE_AREA;
export const BRAND_NAME = SITE_NAME;

export const SERVICE_TOWNS = [
  "Zielona Góra",
  "Nowa Sól",
  "Sulechów",
  "Świebodzin",
  "Krosno Odrzańskie",
  "Kożuchów",
  "Czerwieńsk",
  "Żagań",
  "Żary",
  "Lubsko",
  "Gubin",
  "Szprotawa",
  "Sława",
  "Wschowa",
  "Gorzów Wielkopolski",
] as const;

export const SERVICE_COUNTIES = [
  "zielonogórski",
  "nowosolski",
  "świębodziński",
  "krośnieński",
  "żagański",
  "żarski",
] as const;

/** Z katalogów — nie ma na starej stronie; TODO: potwierdzić z klientem. */
export const NIP = "9291670447";
export const REGON = "978013130";

/** Serwis 24/7 wg starej strony; godziny biura z Maps — TODO. */
export const HOURS = "Serwis 24/7 (dyżur)";

export const GOOGLE_REVIEWS_URL = MAPS_URL;
/** TODO: odczytać aktualną ocenę z wizytówki Maps. */
export const GOOGLE_RATING = "";
export const GOOGLE_REVIEW_COUNT = 0;

/** Realizacje do podstron usług (match w services.ts). Placeholdery do czasu zdjęć klienta. */
export const REALIZATIONS = [
  {
    title: "Kotłownia gazowa kondensacyjna",
    year: "2024",
    scope: "Montaż kotła gazowego i uruchomienie kotłowni w domu jednorodzinnym.",
  },
  {
    title: "Pompa ciepła powietrze-woda",
    year: "2025",
    scope: "Jednostka zewnętrzna i hydrobox w domu jednorodzinnym.",
  },
  {
    title: "Klimatyzacja split",
    year: "2024",
    scope: "Jednostka ścienna, freon i odprowadzenie skroplin.",
  },
  {
    title: "Serwis kotła gazowego",
    year: "2025",
    scope: "Przegląd, analiza spalin i protokół serwisowy.",
  },
  {
    title: "Badanie termowizyjne budynku",
    year: "2024",
    scope: "Kamera Flir — lokalizacja mostków cieplnych i braków izolacji.",
  },
  {
    title: "Kotłownia olejowa",
    year: "2023",
    scope: "Montaż kotła olejowego i integracja z instalacją c.o.",
  },
] as const;
