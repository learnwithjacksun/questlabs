import {
  CheckmarkCircle01Icon,
  CircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type RoadmapStatus = "completed" | "upcoming";

type RoadmapItem = {
  label: string;
  status: RoadmapStatus;
};

const roadmapItems: RoadmapItem[] = [
  { label: "QuestPay", status: "completed" },
  { label: "QuestBoost", status: "completed" },
  { label: "Pingly", status: "completed" },
  { label: "Virtual Cards", status: "upcoming" },
  { label: "Business Banking", status: "upcoming" },
  { label: "Merchant APIs", status: "upcoming" },
  { label: "AI Tools", status: "upcoming" },
  { label: "Commerce Infrastructure", status: "upcoming" },
];

const MARKER = "h-5 w-5";

function RoadmapColumn({
  title,
  items,
  variant,
}: {
  title: string;
  items: RoadmapItem[];
  variant: RoadmapStatus;
}) {
  const isUpcoming = variant === "upcoming";

  return (
    <section className="bg-background p-6 md:p-8">
      <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      <ul className="relative">
        {items.length > 1 && (
          <div
            className={`absolute left-[10px] top-[10px] bottom-[10px] w-px ${
              isUpcoming ? "bg-amber-500/35" : "bg-emerald-500/35"
            }`}
            aria-hidden
          />
        )}
        {items.map((item) => (
          <li
            key={item.label}
            className="group relative flex items-center gap-4 pb-6 last:pb-0"
          >
            <span
              className={`relative z-10 flex ${MARKER} rounded-full shrink-0 items-center justify-center border transition-colors ${
                isUpcoming
                  ? "border-amber-500/50 bg-amber-500 text-white group-hover:border-amber-500 group-hover:bg-amber-500/20"
                  : "border-emerald-500/50 bg-emerald-500 text-white group-hover:border-emerald-500 group-hover:bg-emerald-500/20"
              }`}
            >
              <HugeiconsIcon
                icon={isUpcoming ? CircleIcon : CheckmarkCircle01Icon}
                size={isUpcoming ? 16 : 16}
              />
            </span>
            <span
              className={`text-base font-medium transition-colors ${
                isUpcoming
                  ? "text-muted group-hover:text-main"
                  : "text-main group-hover:text-emerald-500"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Roadmap() {
  const completed = roadmapItems.filter((item) => item.status === "completed");
  const upcoming = roadmapItems.filter((item) => item.status === "upcoming");

  return (
    <section id="roadmap" className="main py-16 md:py-24 border-b border-line scroll-mt-[72px]">
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="flex items-end gap-2">
            <h2 className="text-3xl md:text-4xl font-bold">Roadmap</h2>
            <div className="max-w-[100px] w-[50px] h-[3px] bg-linear-to-r from-primary to-[#9e639c]" />
          </div>
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-muted">
            A living product strategy — shipping infrastructure today while
            expanding capabilities for tomorrow.
          </p>
        </header>

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          <RoadmapColumn title="Completed" items={completed} variant="completed" />
          <RoadmapColumn title="Upcoming" items={upcoming} variant="upcoming" />
        </div>
      </div>
    </section>
  );
}
