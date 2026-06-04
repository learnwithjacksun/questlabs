import { HugeiconsIcon } from "@hugeicons/react";
import { AddCircleHalfDotIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import HeroEcosystem from "./hero-ecosystem";

export default function Hero() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[500px] main md:divide-x divide-line border-b border-line">
      <div
        className="pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full bg-[#ebe4fb]/40 blur-3xl dark:bg-[#9e639c]/40 z-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-30 h-64 w-64 rounded-full bg-[#dbeafe]/60 blur-3xl dark:bg-[#9e639c]/30 z-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-30 left-1/4 h-48 w-48 rounded-full bg-[#fef3c7]/55 blur-3xl z-0"
        aria-hidden
      />

      <div className="flex items-center h-full relative z-10 min-h-[400px]">
        <main className="space-y-6">
          <div className="w-fit bg-secondary flex items-center gap-2 p-1 rounded-full pr-3 pl-2 text-xs sm:text-sm">
            <HugeiconsIcon icon={AddCircleHalfDotIcon} size={16} />
            <p className="dark:text-main/70 text-main font-mono">
              Introducing | Digital Ecosystem
            </p>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </div>
          <div>
            <p className="text-3xl sm:text-3xl md:text-5xl font-bold">
              Building the infrastructure layer for Africa's digital economy.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="btn btn-primary px-4 py-2.5 border border-none text-sm">
                Explore Products
            </Link>
            <a href="#roadmap" className="btn btn-secondary px-4 py-2.5 text-sm backdrop-blur-sm bg-background/20">
                View Roadmap
            </a>
          </div>
        </main>
      </div>

      <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[400px] px-6 py-10 md:p-10">
        <HeroEcosystem />
      </div>
    </div>
  );
}
