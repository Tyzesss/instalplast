import { ExternalLink, MapPinned, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { GOOGLE_REVIEWS_URL, MAPS_URL, SERVICE_AREA, SITE_NAME } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="opinie" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-3xl text-left md:mx-auto md:text-center">
          <span className="block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase md:mx-auto">
            Opinie klientów
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Opinie o <span className="text-gradient-cyan">{SITE_NAME}</span>
            <br className="hidden sm:block" /> na Google
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-auto">
            Nie publikujemy wymyślonych cytatów. Aktualne oceny i recenzje znajdziesz na wizytówce
            Google — {SERVICE_AREA}.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl lg:mt-12">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border/60 bg-card px-6 py-10 text-center shadow-card sm:px-10 sm:py-12">
            <div className="flex items-center gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-5 fill-accent/35 text-accent/35" />
              ))}
            </div>
            <p className="max-w-md text-base leading-relaxed text-foreground/80 sm:text-lg">
              Sprawdź, jak klienci oceniają montaż, serwis i kontakt z {SITE_NAME} — bezpośrednio w
              Google Maps.
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPinned className="size-4 shrink-0 text-accent" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-accent hover:underline"
              >
                Wrocławska 28, Zielona Góra
              </a>
            </p>
            <Button asChild variant="cyan" size="xl">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Zobacz opinie na Google <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
