import { motion } from 'framer-motion';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import BlogPost from './BlogPost';
import { blogs } from '../data/blogs';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(blogs.map(blog => blog.category)));

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category === selectedCategory)
    : blogs;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold font-cabinet text-gray-900 dark:text-white mb-8"
              >
                Blog
              </motion.h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    !selectedCategory
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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