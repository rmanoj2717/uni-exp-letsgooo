import { Container } from "@/components/ui/Container";
import {
  compass360Sessions,
  compass360Stages,
} from "@/lib/constants/compass360";

export function Compass360JourneySessions() {
  return (
    <section className="bg-navy py-12 text-white md:py-14">
      <Container>
        <header className="max-w-2xl">
          <p className="eyebrow mb-3 text-cyan-bright">How Compass360 works</p>
          <h2 className="font-display text-balance text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            From understanding yourself to planning what comes next
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Compass360 moves through five stages, supported by three live counselling sessions
            where students make sense of the findings and decide what to do next.
          </p>
          <p className="mt-3 leading-relaxed text-white/65">
            Compass360 is designed as a focused program completed over approximately two weeks.
          </p>
          <div className="mt-6 h-1 w-12 rounded-full bg-cyan-bright" aria-hidden />
        </header>

        <ol className="mt-10 grid md:grid-cols-5">
          {compass360Stages.map((stage, index) => {
            const isLast = index === compass360Stages.length - 1;

            return (
              <li key={stage.title} className="flex gap-4 md:block">
                <div className="flex flex-col items-center md:hidden" aria-hidden>
                  <StageNode index={index} />
                  {!isLast && <span className="mt-1.5 w-px flex-1 bg-white/20" />}
                </div>

                <div className="hidden items-center md:flex" aria-hidden>
                  <StageNode index={index} />
                  {!isLast && <span className="h-px flex-1 bg-white/20" />}
                </div>

                <div className={`md:pr-6 md:pt-4 ${isLast ? "" : "pb-7 md:pb-0"}`}>
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.08em] text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{stage.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-11 border-t border-white/10 pt-9">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-bold text-white md:text-2xl">
              Three live counselling sessions
            </h3>
            <p className="mt-2 leading-relaxed text-white/70">
              Each session is led by a UniEXP Global counsellor and gives the student time to
              discuss what the findings mean for their next decisions.
            </p>
          </div>

          <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {compass360Sessions.map((session) => (
              <li key={session.title}>
                <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-cyan-bright">
                  {session.stages.join(" · ")}
                </p>
                <h4 className="mt-3 font-display text-lg font-bold text-white">
                  {session.title} session
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{session.focus}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function StageNode({ index }: { index: number }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-navy font-display text-sm font-bold tabular-nums text-cyan-bright">
      {index + 1}
    </span>
  );
}
