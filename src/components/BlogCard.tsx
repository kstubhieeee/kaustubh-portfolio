import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from  'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
}

export default function BlogCard({ id, title, excerpt, date, readTime, category, index }: BlogCardProps) {
  return (
    <motion.article
      data-testid={`blog-card-${id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm">
            {category}
          </span>

          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            title={`Read more about ${title}`}
          >
            Read More
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}