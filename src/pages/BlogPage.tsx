import { motion } from "framer-motion";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogPost from "./BlogPost";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00000000_1px)] bg-[size:20px_20px] pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-16 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, #ffffff10 0%, transparent 70%)",
                  }}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-cabinet mb-6"
                >
                  <span className="text-white">Welcome to my </span>
                  <span className="bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
                    Blog
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 max-w-3xl mx-auto text-lg"
                >
                  Explore my thoughts on technology, development, and more
                </motion.p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-colors ${
                    !selectedCategory
                      ? "bg-gradient-to-r from-[#ff1cf7] to-[#7928ca] text-white"
                      : "bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#ff1cf7] to-[#7928ca] text-white"
                        : "bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} {...blog} index={index} />
                ))}
              </div>
            </div>
          </div>
        }
      />
      <Route path=":id" element={<BlogPost />} />
    </Routes>
  );
}