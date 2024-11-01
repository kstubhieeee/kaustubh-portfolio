import { motion } from 'framer-motion';
import GitHubStats from '../components/GitHubStats';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GitHubPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
            GitHub Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my open source contributions, projects, and coding activity on GitHub
          </p>
        </motion.div>

        <GitHubStats />
      </div>
    </div>
  );
}