import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
      <Code className="w-6 h-6 text-[#7928ca]" />
      <span className="text-2xl font-bold font-['Pacifico'] bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
        Kaustubh
      </span>
    </motion.div>
  );
}
