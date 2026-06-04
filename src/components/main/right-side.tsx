import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link, NavLink } from "react-router-dom"

const navLinks = [
  {
    label: "Readme",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Team",
    href: "/team",
  }
]

export default function RightSide() {
  return (
    <div>
      <header className="border-b border-line h-[50px] flex justify-between">
        <ul className="flex items-center gap-4 font-mono">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-main py-3 px-4 border-b-4 border-main uppercase text-sm"
                    : "text-muted py-3 px-4 uppercase hover:text-main text-sm"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <Link to="/" className="btn h-full px-4 btn-primary text-sm">
            <span className="text-nowrap">Contact Us</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </Link>
        </div>
      </header>
    </div>
  );
}
