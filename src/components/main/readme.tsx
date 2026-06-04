import {
  CustomerServiceIcon,
  UserAccountIcon,
  Wallet02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const globalFeatures = [
  {
    icon: UserAccountIcon,
    title: "Single Account",
    description:
      "One login unlocks every Quest Labs product — payments, growth, and communications — without juggling separate credentials.",
  },
  {
    icon: Wallet02Icon,
    title: "Unified Wallet",
    description:
      "A single wallet balance flows across all services, so collections, transfers, and payouts stay in one place.",
  },
  {
    icon: CustomerServiceIcon,
    title: "24/7 Customer Service",
    description:
      "Real humans, around the clock. Get help whenever you need it — day, night, or weekend.",
  },
];

export default function Readme() {
  return (
    <section id="readme" className="main py-16 md:py-24 border-b border-line scroll-mt-[72px]">
      <div className="space-y-12 md:space-y-16">
        <header className="space-y-8">
          <div className="flex items-end gap-2">
            <h2 className="text-3xl md:text-4xl font-bold">Readme</h2>
            <div className="max-w-[100px] w-[50px] h-[3px] bg-linear-to-r from-primary to-[#9e639c]" />
          </div>

          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
              About the platform
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-main">
              Quest Labs is the infrastructure layer for Africa&apos;s digital
              economy — a unified platform where businesses run payments,
              communications, and growth from one ecosystem.
            </p>
            {/* <p className="text-sm md:text-base leading-relaxed text-muted">
              From QuestPay&apos;s payment rails to QuestBoost&apos;s growth
              tools and Ringly&apos;s cloud communications, every product is
              built to work together. Less fragmentation, more momentum.
            </p> */}
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            Global features
          </p>

          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {globalFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden bg-background p-6 md:p-8 transition-colors hover:bg-secondary/60"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-primary to-[#9e639c] transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-line bg-secondary transition-all duration-300 group-hover:border-transparent group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-[#9e639c] group-hover:text-white dark:group-hover:text-[#171717]">
                  <HugeiconsIcon icon={feature.icon} size={22} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-main">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
