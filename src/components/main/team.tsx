import {
  ArrowRight02Icon,
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type SocialLink = {
  icon: typeof GithubIcon;
  href: string;
  label: string;
};

type TeamMember = {
  name: string;
  title: string;
  role: string;
  avatarSeed: string;
  social: SocialLink[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Gift Jacksun",
    title: "Founder & CEO, Quest Labs",
    role: "Fullstack Developer",
    avatarSeed: "GiftJacksun",
    social: [
      {
        icon: GithubIcon,
        href: "https://github.com/learnwithjacksun",
        label: "GitHub",
      },
      {
        icon: Mail01Icon,
        href: "mailto:gift@questlabs.cc",
        label: "Email",
      },
      {
        icon: WhatsappIcon,
        href: "https://wa.me/2348137411338",
        label: "WhatsApp",
      },
      {
        icon: NewTwitterIcon,
        href: "https://x.com/codewithjacksun",
        label: "X",
      },
    ],
  },
  {
    name: "Alex Paul",
    title: "CEO, Afriverse DAO",
    role: "Fullstack Developer",
    avatarSeed: "AlexPaul",
    social: [
      {
        icon: GithubIcon,
        href: "https://github.com/learnwithalex",
        label: "GitHub",
      },
      {
        icon: Mail01Icon,
        href: "mailto:hi@heisalex.xyz",
        label: "Email",
      },
      {
        icon: WhatsappIcon,
        href: "https://wa.me/2348102581339",
        label: "WhatsApp",
      },
      {
        icon: NewTwitterIcon,
        href: "https://x.com/heisalexie",
        label: "X",
      },
    ],
  },
];

function avatarUrl(seed: string) {
  return `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
}

function ProfileCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative overflow-hidden bg-background p-6 md:p-8 transition-colors hover:bg-secondary/60">
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-primary to-[#9e639c] transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />

      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
        <div className="mb-5 shrink-0 overflow-hidden border border-line bg-secondary p-1 transition-colors group-hover:border-primary/30 sm:mb-0">
          <img
            src={avatarUrl(member.avatarSeed)}
            alt={`${member.name} avatar`}
            width={96}
            height={96}
            className="h-24 w-24 object-cover"
          />
        </div>

        <div className="min-w-0 flex-1 space-y-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-main">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-main/80">
              {member.title}
            </p>
            <p className="mt-1 text-xs font-mono uppercase tracking-wider text-muted">
              {member.role}
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {member.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${link.label}`}
                  className="flex h-9 w-9 items-center justify-center border border-line bg-secondary text-muted transition-colors hover:border-primary/30 hover:text-main"
                >
                  <HugeiconsIcon icon={link.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="main py-16 md:py-24 border-b border-line scroll-mt-[72px]">
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="flex items-end gap-2">
            <h2 className="text-3xl md:text-4xl font-bold">Team</h2>
            <div className="max-w-[100px] w-[50px] h-[3px] bg-linear-to-r from-primary to-[#9e639c]" />
          </div>
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-muted">
            The builders behind Quest Labs — available to work on your project or
            onboard your product into the Quest Labs ecosystem.
          </p>
        </header>

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {teamMembers.map((member) => (
            <ProfileCard key={member.name} member={member} />
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 border border-line bg-secondary/40 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-main">
            Need a product built, integrated, or launched on our infrastructure?
            Reach out — we&apos;re open to collaborations and ecosystem partnerships.
          </p>
          <a
            href="mailto:gift@questlabs.cc"
            className="btn btn-primary shrink-0 px-4 py-2.5 text-sm"
          >
            <span className="text-nowrap">Get in touch</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
