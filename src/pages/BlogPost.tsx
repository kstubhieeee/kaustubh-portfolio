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
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00000000_1px)] bg-[size:20px_20px] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff1cf7] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-sm sm:prose-lg prose-invert max-w-none bg-white/5 backdrop-blur-lg rounded-lg p-6 sm:p-8 border border-white/10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
            <span className="bg-[#ff1cf7]/10 text-[#ff1cf7] px-3 py-1 rounded-full">
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
