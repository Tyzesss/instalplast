import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Images, MapPin, X, ZoomIn } from "lucide-react";
import { DarkEyebrow } from "./DarkEyebrow";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { MobileCarousel } from "./MobileCarousel";
import imgPompa from "@/assets/ip-realizacja-pompa.jpg";
import imgKociol from "@/assets/ip-realizacja-kociol.jpg";
import imgKlima from "@/assets/ip-realizacja-klima.jpg";
import imgTermo from "@/assets/ip-realizacja-termowizja.jpg";
import imgSolary from "@/assets/ip-realizacja-solary.jpg";

type Category =
  | "Pompy ciepła"
  | "Klimatyzacja"
  | "Kotły gazowe"
  | "Termowizja"
  | "Solary";

/** Poglądowe zdjęcia AI (do podmiany na realizacje klienta). */
const PROJECTS: {
  image: string;
  imageMobile: string;
  category: Category;
  title: string;
  place: string;
  alt: string;
  focus: string;
  focusMobile?: string;
  zoom?: number;
  zoomMobile?: number;
  span?: "lg" | "tall" | "wide" | "sm";
}[] = [
  {
    image: imgPompa,
    imageMobile: imgPompa,
    category: "Pompy ciepła",
    title: "Pompa ciepła powietrze-woda",
    place: "Dom jednorodzinny, Zielona Góra",
    alt: "Jednostka zewnętrzna pompy ciepła przy domu",
    focus: "50% 45%",
    span: "lg",
  },
  {
    image: imgKlima,
    imageMobile: imgKlima,
    category: "Klimatyzacja",
    title: "Klimatyzacja multi-split",
    place: "Budynek mieszkalny, woj. lubuskie",
    alt: "Jednostki zewnętrzne klimatyzacji na elewacji",
    focus: "50% 40%",
    span: "wide",
  },
  {
    image: imgKociol,
    imageMobile: imgKociol,
    category: "Kotły gazowe",
    title: "Kotłownia gazowa kondensacyjna",
    place: "Dom, okolice Zielonej Góry",
    alt: "Nowoczesny kocioł gazowy w kotłowni",
    focus: "50% 42%",
    span: "sm",
  },
  {
    image: imgSolary,
    imageMobile: imgSolary,
    category: "Solary",
    title: "Kolektory słoneczne",
    place: "Dach domu, woj. lubuskie",
    alt: "Kolektory solarne na dachu budynku",
    focus: "50% 40%",
    span: "sm",
  },
  {
    image: imgTermo,
    imageMobile: imgTermo,
    category: "Termowizja",
    title: "Badanie termowizyjne",
    place: "Inspekcja budynku, lubuskie",
    alt: "Pomiar termowizyjny elewacji budynku",
    focus: "45% 40%",
    span: "wide",
  },
];

const SPAN_CLASS = {
  lg: "md:col-span-2 md:row-span-2",
  tall: "md:col-span-1 md:row-span-2",
  wide: "md:col-span-2 md:row-span-1",
  sm: "md:col-span-1 md:row-span-1",
} as const;

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof PROJECTS)[number];
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex h-full min-h-[14rem] w-full overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <img
        src={project.image}
        alt={project.alt}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{
          objectPosition: project.focus,
          transform: project.zoom ? `scale(${project.zoom})` : undefined,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent"
        aria-hidden
      />
      <div className="relative mt-auto flex w-full flex-col gap-1 p-4 sm:p-5">
        <span className="text-[11px] font-semibold tracking-wide text-accent uppercase">
          {project.category}
        </span>
        <span className="font-display text-lg font-bold text-navy-foreground sm:text-xl">
          {project.title}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-navy-foreground/70">
          <MapPin className="size-3.5 shrink-0" />
          {project.place}
        </span>
      </div>
      <span className="absolute top-3 right-3 rounded-full bg-navy/50 p-2 text-navy-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <ZoomIn className="size-4" />
      </span>
    </button>
  );
}

export function Realizations() {
  const [active, setActive] = useState<number | null>(null);
  const openAt = (i: number) => setActive(i);
  const showPrev = useCallback(() => {
    setActive((i) => (i == null ? 0 : (i - 1 + PROJECTS.length) % PROJECTS.length));
  }, []);
  const showNext = useCallback(() => {
    setActive((i) => (i == null ? 0 : (i + 1) % PROJECTS.length));
  }, []);

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, showPrev, showNext]);

  const current = active != null ? PROJECTS[active] : null;

  return (
    <section id="realizacje" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-3xl text-left text-navy-foreground">
          <DarkEyebrow icon={Images}>Realizacje</DarkEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            Instalacje, które <br className="md:hidden" />
            <span className="text-gradient-cyan">już działają</span>
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70">
            Kotły, pompy ciepła, klimatyzacja i solary — przykładowe realizacje w stylu prac
            Instal-Plast na terenie Zielonej Góry i Lubuskiego.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <MobileCarousel
            items={PROJECTS}
            dotsOnDark
            className="animate-in fade-in duration-500 ease-out"
            renderItem={(project, i) => (
              <ProjectCard project={project} onOpen={() => openAt(i)} />
            )}
          />
          <div className="hidden gap-4 md:grid md:grid-cols-4 md:grid-flow-dense md:auto-rows-[minmax(13.5rem,auto)]">
            {PROJECTS.map((project, i) => {
              const span = project.span ?? "sm";
              return (
                <Reveal
                  key={project.title}
                  delay={Math.min(i, 5) * 0.05}
                  scale
                  className={cn("h-full min-h-0", SPAN_CLASS[span])}
                >
                  <ProjectCard project={project} onOpen={() => openAt(i)} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog.Root
        open={active != null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-2xl bg-navy outline-none sm:inset-8">
            <div className="flex items-center justify-between gap-3 border-b border-navy-foreground/10 px-4 py-3 sm:px-5">
              <Dialog.Title className="min-w-0 truncate font-display text-base font-semibold text-navy-foreground sm:text-lg">
                {current?.title}
              </Dialog.Title>
              <Dialog.Close className="rounded-full p-2 text-navy-foreground/80 hover:bg-navy-foreground/10 hover:text-navy-foreground">
                <X className="size-5" />
              </Dialog.Close>
            </div>
            {current ? (
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/40 p-2 sm:p-4">
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-2 z-10 rounded-full bg-navy/60 p-2 text-navy-foreground backdrop-blur-sm sm:left-4"
                  aria-label="Poprzednie"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <img
                  src={current.image}
                  alt={current.alt}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 z-10 rounded-full bg-navy/60 p-2 text-navy-foreground backdrop-blur-sm sm:right-4"
                  aria-label="Następne"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            ) : null}
            {current ? (
              <p className="border-t border-navy-foreground/10 px-4 py-3 text-sm text-navy-foreground/70 sm:px-5">
                {current.place} · {current.category}
              </p>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
