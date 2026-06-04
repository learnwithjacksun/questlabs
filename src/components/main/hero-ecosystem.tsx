const ecosystemNodes = [
  {
    id: "questpay",
    name: "QuestPay",
    tag: "Payments",
    logo: "https://questhq.vercel.app/logo.svg",
    x: 200,
    y: 52,
  },
  {
    id: "questboost",
    name: "QuestBoost",
    tag: "Growth",
    logo: "https://boost.questlabs.cc/logo.svg",
    x: 58,
    y: 318,
  },
  {
    id: "pingly",
    name: "Pingly",
    tag: "Comms",
    logo: "https://pingly.questlabs.cc/pingly-symbol.png",
    x: 342,
    y: 318,
  },
] as const;

const hub = { x: 200, y: 200 };

function connectionPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const cx = mx + (y2 - y1) * 0.08;
  const cy = my - (x2 - x1) * 0.08;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export default function HeroEcosystem() {
  return (
    <div
      className="relative isolate flex w-full max-w-[440px] flex-col items-center"
      aria-hidden
    >
      <p className="mb-6 text-xs font-mono uppercase tracking-[0.2em] text-muted">
        Ecosystem
      </p>

      <div className="relative aspect-square w-full max-w-[380px]">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in srgb, var(--line) 70%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in srgb, var(--line) 70%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(circle at 50% 50%, #000 35%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, #000 35%, transparent 78%)",
          }}
        />

        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient
              id="ecosystem-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="#9e639c" />
            </linearGradient>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9e639c" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#9e639c" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={hub.x} cy={hub.y} r="88" fill="url(#hub-glow)" />

          {ecosystemNodes.map((node) => (
            <g key={node.id}>
              <path
                d={connectionPath(hub.x, hub.y, node.x, node.y)}
                stroke="url(#ecosystem-gradient)"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                className="ecosystem-line"
              />
              <path
                d={connectionPath(hub.x, hub.y, node.x, node.y)}
                stroke="url(#ecosystem-gradient)"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                strokeOpacity="0.7"
                className="ecosystem-line-flow"
              />
            </g>
          ))}

          {ecosystemNodes.map((node) => (
            <circle
              key={`${node.id}-ring`}
              cx={node.x}
              cy={node.y}
              r="34"
              stroke="var(--line)"
              strokeWidth="1"
              fill="color-mix(in srgb, var(--secondary) 80%, transparent)"
            />
          ))}

          <circle
            cx={hub.x}
            cy={hub.y}
            r="46"
            stroke="url(#ecosystem-gradient)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            fill="color-mix(in srgb, var(--background) 90%, transparent)"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 border border-line bg-background px-4 py-3 shadow-sm">
          <img
            src="/logo.svg"
            alt=""
            className="hidden h-8 w-8 object-contain dark:block"
          />
          <img
            src="/dark-logo.svg"
            alt=""
            className="h-8 w-8 object-contain dark:hidden"
          />
          <span className="text-[11px] font-mono uppercase tracking-wider text-main">
            Quest Labs
          </span>
        </div>

        {ecosystemNodes.map((node) => (
          <div
            key={node.id}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{
              left: `${(node.x / 400) * 100}%`,
              top: `${(node.y / 400) * 100}%`,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center border border-line bg-background p-1.5">
              <img
                src={node.logo}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-[11px] font-semibold text-main">{node.name}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted">
              {node.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
