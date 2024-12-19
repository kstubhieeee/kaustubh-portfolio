import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  category,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all group"
    >
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readTime}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-[#ff1cf7] transition-colors mb-2">
        {title}
      </h3>

      <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

      <div className="flex items-center justify-between">
        <span className="bg-[#ff1cf7]/10 text-[#ff1cf7] px-3 py-1 rounded-full text-sm">
          {category}
        </span>

        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-[#ff1cf7] hover:opacity-80 transition-opacity"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}
