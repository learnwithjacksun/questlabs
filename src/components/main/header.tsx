import { Link } from "react-router-dom";
import ModeToggle from "../ui/mode-toggle";
import MobileMenu from "./mobile-menu";
import { Menu } from "lucide-react";
import { useActiveSection, useTheme } from "@/hooks";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCallback, useState } from "react";

const SECTION_IDS = ["readme", "products", "roadmap", "team"] as const;

const navLinks = [
  { label: "Readme", id: "readme" },
  { label: "Products", id: "products" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Team", id: "team" },
] as const;

const navLinkClass = (active: boolean) =>
  active
    ? "text-main p-4 border-b-4 border-main uppercase text-sm"
    : "text-muted p-4 uppercase hover:text-main text-sm";

export default function Header() {
  const { theme } = useTheme();
  const { activeSection, scrollToSection } = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-line">
        <nav className="h-auto flex items-center justify-between md:grid md:grid-cols-2 relative w-[90%] mx-auto md:w-auto">
          <Link to="/" className="flex items-center gap-2 md:ml-[10%]">
            <img
              src={theme === "dark" ? "/logo.svg" : "/dark-logo.svg"}
              alt="logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold">Quest Labs</span>
          </Link>

          <div className="flex md:hidden items-center gap-4">
            <button className="h-10 w-10 center border-r border-line pr-4">
              <ModeToggle />
            </button>
            <button
              type="button"
              className="py-4"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-between gap-4">
            <ul className="flex items-center gap-4 font-mono">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={navLinkClass(activeSection === link.id)}
                    aria-current={activeSection === link.id ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <button className="h-10 w-10 center">
                <ModeToggle />
              </button>
              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection("team")}
                  className="btn h-full px-4 py-4 btn-primary text-sm"
                >
                  <span className="text-nowrap">Contact Us</span>
                  <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </>
  );
}
