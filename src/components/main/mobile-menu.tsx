import { ArrowRight02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect } from "react";

type NavLink = {
  label: string;
  id: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navLinks: readonly NavLink[];
  activeSection: string;
  onNavigate: (id: string) => void;
};

export default function MobileMenu({
  open,
  onClose,
  navLinks,
  activeSection,
  onNavigate,
}: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[320px] flex-col border-l border-line bg-background transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-main"
            aria-label="Close menu"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1 font-mono">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(link.id);
                    }}
                    className={`relative block overflow-hidden px-4 py-4 text-sm uppercase transition-colors ${
                      active
                        ? "bg-secondary text-main"
                        : "text-muted hover:bg-secondary/60 hover:text-main"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <span
                        className="absolute inset-y-0 left-0 w-[3px] bg-linear-to-b from-primary to-[#9e639c]"
                        aria-hidden
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-line p-4">
          <button
            type="button"
            onClick={() => handleNavigate("team")}
            className="btn btn-primary w-full px-4 py-3 text-sm"
          >
            <span>Contact Us</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
