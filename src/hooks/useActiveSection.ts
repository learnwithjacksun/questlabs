import { useCallback, useEffect, useState } from "react";

const HEADER_OFFSET = 72;

// const SECTION_IDS = ["readme", "products", "roadmap", "team"];

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return sectionIds.includes(hash) ? hash : sectionIds[0] ?? "";
  });

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || !sectionIds.includes(hash)) return;

    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
      setActiveSection(hash);
    });
  }, [sectionIds]);

  useEffect(() => {
    const updateActive = () => {
      const scrollPos = window.scrollY + HEADER_OFFSET;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", updateActive);
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [sectionIds]);

  return { activeSection, scrollToSection };
}
