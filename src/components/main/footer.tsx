import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];
const socialLinks = [
  {
    icon: NewTwitterIcon,
    href: "https://x.com/questlabs",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/questlabs",
  },
];
export default function Footer() {
  return (
    <footer className="w-full border-t border-line py-4 space-y-6">
      <div className="max-w-[90%] ml-auto mr-auto flex md:items-center justify-between">
        <ul className="flex md:items-center flex-col md:flex-row gap-4">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-muted text-xs hover:text-main"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-4 h-full">
          {socialLinks.map((x) => (
            <li key={x.href}>
              <a href={x.href} target="_blank" rel="noopener noreferrer">
                <HugeiconsIcon icon={x.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-muted text-xs">
        &copy; {new Date().getFullYear()} Quest Labs. All rights reserved.
      </p>
    </footer>
  );
}
