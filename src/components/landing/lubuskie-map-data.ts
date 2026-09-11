/** Województwo lubuskie — uproszczony kontur + miejscowości (projekcja geo). */
export const LUBUSKIE_VIEWBOX = "0 0 400 460";
export const LUBUSKIE_PATH =
  "M27.3,57.2L81.8,14.9L145.5,7.5L209.1,32.3L263.6,82.1L300.0,119.4L318.2,181.5L336.4,243.7L354.5,305.8L372.7,355.6L336.4,405.3L281.8,442.6L209.1,447.6L136.4,437.6L63.6,405.3L27.3,355.6L9.1,293.4L18.2,231.2L9.1,169.1L18.2,106.9Z";

export const MAP_TOWNS = [
  { name: "Zielona Góra", x: 201.1, y: 309.6, hub: true, label: true },
  { name: "Gorzów Wlkp.", x: 150.7, y: 110.2, hub: false, label: true },
  { name: "Świebodzin", x: 206.0, y: 232.0, hub: false, label: false },
  { name: "Sulechów", x: 223.1, y: 272.3, hub: false, label: false },
  { name: "Nowa Sól", x: 239.5, y: 342.4, hub: false, label: false },
  { name: "Żagań", x: 166.4, y: 388.6, hub: false, label: false },
  { name: "Żary", x: 134.9, y: 382.4, hub: false, label: false },
  { name: "Krosno Odrz.", x: 127.1, y: 279.7, hub: false, label: false },
  { name: "Gubin", x: 59.6, y: 305.8, hub: false, label: false },
  { name: "Lubsko", x: 103.5, y: 347.1, hub: false, label: false },
  { name: "Kożuchów", x: 217.1, y: 356.8, hub: false, label: false },
  { name: "Czerwieńsk", x: 186.0, y: 290.2, hub: false, label: false },
  { name: "Szprotawa", x: 206.7, y: 401.3, hub: false, label: false },
  { name: "Sława", x: 304.0, y: 322.5, hub: false, label: false },
  { name: "Wschowa", x: 348.5, y: 341.4, hub: false, label: false },
] as const;
