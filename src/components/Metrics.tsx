import Container from "@/components/ui/Container";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <section className="border-t border-stone py-16 sm:py-20">
      <Container>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-moss">
          Reach
        </p>
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          Over the years
        </h2>
      </Container>

      <div className="mt-8 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scroll-smooth sm:px-8 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}

        <div className="w-2 shrink-0 sm:w-4" aria-hidden="true" />
      </div>
    </section>
  );
}
