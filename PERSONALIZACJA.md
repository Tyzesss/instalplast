# Instal-Plast — brief personalizacji

Status: **rebrand wdrożony** (dane, 6 usług, kolory `#ed5a24`, logo, mapa lubuska, poglądowe realizacje AI). TODO: opinie z Maps, NIP, zdjęcia klienta, GA4, formularz.

Źródła: stara strona [instal-plast.pl](https://instal-plast.pl/) / [.eu](https://instal-plast.eu/), [Google Maps](https://maps.app.goo.gl/WdbqeorkJrh6iCYh6), ustalenia z czatu.

---

## Decyzje zamknięte

| # | Temat | Decyzja |
| --- | --- | --- |
| 1 | Adres na stronie | **Zielona Góra** — Wrocławska 28, 65-427 Zielona Góra |
| 2 | Godziny | Z Maps: **Pn–Pt 7:00–16:00, Sb–Nd zamknięte** |
| 3 | Obszar | Zielona Góra + **województwo lubuskie** (lista miejscowości robocza) |
| 4 | Kolor brandu | Accent **`#ed5a24`** (pomarańcz Instal-Plast) |
| 5 | Opinie Google | **Bez wymyślonych cytatów** — CTA do wizytówki Maps |
| 6 | NIP / REGON | Z katalogów — **TODO: potwierdzić z klientem** |
| 7 | Logo | `src/assets/logo-instal-plast.png` |
| 8 | Usługi | **6 usług** (bez osobnej podstrony serwisu) — `/uslugi/{slug}` |

Dodatkowo:

- Bez bloga, bez panelu CMS.
- Realizacje i Kontakt na home.
- Nazwy plików `ajm-*.jpg` w assets zostają (tylko nazwy plików).

---

## Dane firmy (do `site.ts` / stopki / SEO)

| Pole | Wartość |
| --- | --- |
| Marka (UI) | **Instal-Plast** |
| Nazwa prawna | PUH „INSTAL-PLAST” – Serwis Maciej Głowacki |
| NIP | 9291670447 (**TODO: potwierdzić**) |
| REGON | 978013130 (**TODO: potwierdzić**) |
| Adres | Wrocławska 28, 65-427 Zielona Góra |
| Telefon (kom.) | 603 930 929 (`+48603930929`) |
| Telefon (stac.) | 68 453 32 82 (`+48684533282`) |
| E-mail | instalplast@vp.pl |
| Godziny | Pn–Pt 7:00–16:00, Sb–Nd zamknięte (Google Maps) |
| Maps / opinie | https://maps.app.goo.gl/WdbqeorkJrh6iCYh6 |
| Logo | `src/assets/logo-instal-plast.png` |
| Stara strona | https://instal-plast.pl/ · https://instal-plast.eu/ |
| Accent CSS | `#ed5a24` |

---

## Obszar działania — lista robocza

Fokus: **woj. lubuskie**, baza **Zielona Góra**.

1. Zielona Góra  
2. Nowa Sól  
3. Sulechów  
4. Świebodzin  
5. Krosno Odrzańskie  
6. Kożuchów  
7. Czerwieńsk  
8. Żagań  
9. Żary  
10. Lubsko  
11. Gubin  
12. Szprotawa  
13. Sława  
14. Wschowa  
15. Gorzów Wielkopolski  

**Powiaty (roboczo):** zielonogórski, nowosolski, świębodziński, krośnieński, żagański, żarski.

**Frazy lokalne (SEO):**  
„kotły gazowe Zielona Góra”, „pompy ciepła lubuskie”, „serwis kotłów 24/7 Zielona Góra”, „klimatyzacja Nowa Sól”, „termowizja Zielona Góra”.

**Mapa:** kontur + kropki lokalizacji wg projekcji geo województwa lubuskiego.

---

## Usługi (6)

| Usługa | Slug |
| --- | --- |
| Kotły gazowe i olejowe | `kotly-gazowe-olejowe` |
| Pompy ciepła | `pompy-ciepla` |
| Klimatyzacja i wentylacja | `klimatyzacja-wentylacja` |
| Badania termowizyjne | `badania-termowizyjne` |
| Kotły na biopaliwa | `kotly-biopaliwa` |
| Systemy solarne | `solary` |

Bez osobnej podstrony „Serwis” (serwis zostaje w procesie / USP).

*(Dokładna lista i treści — w `services.ts`; parent w trakcie aktualizacji.)*

### Schemat podstrony usługi

1. Nagłówek + krótki opis + CTA wycena / telefon  
2. Opisy: dlaczego warto, technologie/marki  
3. Zakres prac + teren działania  
4. Proces: oględziny → wycena → montaż → serwis  
5. Realizacje  
6. FAQ  
7. Kontakt + odnośniki do pozostałych usług  

---

## Strona główna — sekcje

1. Hero (20+ lat, SERVICE_AREA, serwis 24/7)  
2. O nas  
3. Usługi  
4. Marki  
5. Realizacje  
6. Opinie (CTA Google — bez cytatów)  
7. Dlaczego my  
8. FAQ  
9. Obszar działania  
10. Kontakt + wycena  

---

## Treści — drafty

### Hero

- Lead: jedna ekipa od doboru przez montaż po serwis.  
- Obszar: Zielona Góra i województwo lubuskie.  
- Statystyki: 20+ lat doświadczenia · serwis 24/7.

### O nas

Instal-Plast — lokalny partner z Zielonej Góry: kotły gazowe i olejowe, pompy ciepła, klimatyzacja, serwis 24/7, termowizja. Proces: oględziny → wycena → montaż → serwis. Teren: woj. lubuskie.

### Dlaczego my

1. Kompleksowa oferta (kotły, pompy, klima, serwis, termowizja).  
2. Bezpłatna konsultacja i wycena.  
3. Lokalny dojazd — Zielona Góra / lubuskie.

### FAQ (obszar + serwis)

- Teren: Zielona Góra + lubuskie.  
- Serwis istniejących instalacji: tak, **24/7**.

### Opinie

**Nie cytować wymyślonych opinii.** Sekcja = CTA do [Google Maps](https://maps.app.goo.gl/WdbqeorkJrh6iCYh6). Ocena zbiorcza — TODO odczytać z wizytówki.

### Marki (~6)

Viessmann · Buderus · Brötje · Airwell · Weishaupt · Flir  
(opcjonalnie też: Riello, Giersch)

---

## SEO / analityka (później)

- GA4 + Search Console  
- Tytuły / opisy z frazami lokalnymi (Zielona Góra, lubuskie)  
- sitemap.xml, alt, mobile, HTTPS  
- NAP spójne z Zieloną Górą  

---

## Checklist wdrożenia

- [x] `site.ts` — dane Instal-Plast + aliasy eksportów  
- [x] Logo `logo-instal-plast.png` + BrandMark  
- [x] Home copy: About, Hero, Faq, WhyUs, Footer, ServiceArea, Brands, Testimonials (CTA)  
- [x] SEO home (`index.tsx`)  
- [x] PERSONALIZACJA.md / AGENTS.md  
- [ ] `services.ts` — 7 usług + SEO lubuskie (parent)  
- [ ] `styles.css` — accent `#ed5a24` (parent)  
- [ ] Kontur mapy SVG → lubuskie  
- [ ] Potwierdzić NIP / REGON z klientem  
- [ ] Ocena Google z wizytówki  
- [ ] Zdjęcia klienta (zamiast placeholderów)  
- [ ] GA4, sitemap, realny formularz  

---

## Historia

- 2026-09-11 — rebrand AJM Technika → Instal-Plast (Zielona Góra / lubuskie); brief przepisany.
