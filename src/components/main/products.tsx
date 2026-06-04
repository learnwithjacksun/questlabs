import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const products = [
  {
    id: "questpay",
    name: "QuestPay",
    subtitle: "Payments Infrastructure",
    description: "Modern payment infrastructure for businesses.",
    logo: "https://questhq.vercel.app/logo.svg",
    href: "https://questhq.vercel.app",
  },
  {
    id: "questboost",
    name: "QuestBoost",
    subtitle: "Growth Infrastructure",
    description: "Tools that help businesses grow and reach customers.",
    logo: "https://boost.questlabs.cc/logo.svg",
    href: "https://boost.questlabs.cc",
  },
  {
    id: "pingly",
    name: "Pingly",
    subtitle: "Communication Infrastructure",
    description: "Virtual numbers, cloud calling, and messaging services.",
    logo: "https://pingly.questlabs.cc/pingly-symbol.png",
    href: "https://pingly.questlabs.cc",
  },
];

const moreItem = {
  name: "More",
  subtitle: "Expanding soon",
  description:
    "Virtual cards, business banking, merchant APIs, and more on the roadmap.",
};

function ProductCard({
  name,
  subtitle,
  description,
  logo,
  href,
}: {
  name: string;
  subtitle: string;
  description: string;
    logo: string;
  href: string;
  }) {
  const handleClick = (href: string) => {
    window.open(href, "_blank");
  };
  return (
    <article onClick={() => handleClick(href)} className="group relative overflow-hidden bg-background p-6 md:p-8 transition-colors hover:bg-secondary/60">
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-primary to-[#9e639c] transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      <div className="mb-5 flex h-12 w-12 items-center justify-center border border-line bg-secondary p-2 transition-colors group-hover:border-primary/30">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-main">{name}</h3>
      <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted">
        {subtitle}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

function MoreCard() {
  return (
    <article className="group relative overflow-hidden bg-background p-6 md:p-8 transition-colors hover:bg-secondary/60">
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-primary to-[#9e639c] transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      <div className="mb-5 flex h-12 w-12 items-center justify-center border border-line bg-secondary transition-all duration-300 group-hover:border-transparent group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-[#9e639c] group-hover:text-white dark:group-hover:text-[#171717]">
        <HugeiconsIcon icon={Add01Icon} size={22} />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-main">
        {moreItem.name}
      </h3>
      <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted">
        {moreItem.subtitle}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {moreItem.description}
      </p>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="main py-16 md:py-24 border-b border-line scroll-mt-[72px]">
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="flex items-end gap-2">
            <h2 className="text-3xl md:text-4xl font-bold">Products</h2>
            <div className="max-w-[100px] w-[50px] h-[3px] bg-linear-to-r from-primary to-[#9e639c]" />
          </div>
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-muted">
            Interconnected infrastructure products designed to scale with modern
            businesses across Africa.
          </p>
        </header>

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          <MoreCard />
        </div>
      </div>
    </section>
  );
}
