import { motion } from "framer-motion";
import GitHubStats from "../components/GitHubStats";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GitHubPage() {
  return (
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00000000_1px)] bg-[size:20px_20px] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, #ffffff10 0%, transparent 70%)",
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-cabinet mb-6"
          >
            <span className="bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
              GitHub Stats
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          ></motion.p>
        </div>

        <GitHubStats />
      </div>
    </div>
  );
}
