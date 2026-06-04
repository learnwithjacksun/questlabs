import { useTheme } from "@/hooks";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
     className="center"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <HugeiconsIcon icon={Sun03Icon} size={18} />
      ) : (
        <HugeiconsIcon icon={Moon02Icon} size={18} />
      )}
    </button>
  );
}
