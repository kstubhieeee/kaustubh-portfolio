import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Back to Blog</span>
        </button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 shadow-lg"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {blog.readTime}
            </span>
            <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          <ReactMarkdown className="markdown-content">
            {blog.content}
          </ReactMarkdown>
        </motion.article>
      </div>
    </div>
  );
}
