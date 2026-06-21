import type { Metric } from "@/types/metric";

export default function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="flex w-64 shrink-0 snap-center flex-col items-start gap-3 rounded-md border border-stone bg-stone-light p-6 sm:w-72 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {metric.value.toLocaleString()}
        {metric.suffix}
      </p>
      <p className="text-sm text-ink-soft">{metric.label}</p>
    </div>
  );
}
