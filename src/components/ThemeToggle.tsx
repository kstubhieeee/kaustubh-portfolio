import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <div className="p-2 rounded-lg bg-gray-800" aria-label="Dark theme">
      <Moon className="w-5 h-5 text-gray-400" />
    </div>
  );
}
