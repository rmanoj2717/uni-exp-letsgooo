import { brand } from "@/lib/constants/contact";
import { Container } from "@/components/ui/Container";

export function EthicsBanner() {
  return (
    <section className="border-y border-cyan/15 bg-cyan-soft/80 py-7 md:py-8">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-sm font-medium leading-relaxed text-navy md:text-base">
          <span className="mr-2 inline-block text-cyan" aria-hidden>
            ✦
          </span>
          {brand.ethicalNote}
        </p>
      </Container>
    </section>
  );
}
