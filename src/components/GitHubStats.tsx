import { motion } from 'framer-motion';
import { GitBranch, Star, GitFork, Users, Code, Activity, Calendar, Link as LinkIcon, MapPin, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

interface GitHubStats {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
}

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
  updated_at: string;
}

const featuredRepos = [
  "Data-Warehousing-and-Mining",
  "To-do-list-with-ContextAPI-and-LocalStorage",
  "Password-Generator",
  "Notes-Keeper",
  "mental-health-tracker",
  "Fee-Management-System",
  "Melodify",
  "roomzy",
  "talentlink",
  "R-CloudFlareBypasser"
];

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [statsRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/kstubhieeee'),
          fetch('https://api.github.com/users/kstubhieeee/repos?per_page=100')
        ]);
        const statsData = await statsRes.json();
        const reposData = await reposRes.json();
        setStats(statsData);
        const filteredRepos = reposData.filter((repo: Repository) => featuredRepos.includes(repo.name));
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Profile Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <img
          src={stats?.avatar_url}
          alt={stats?.name}
          className="w-32 h-32 rounded-full border-4 border-emerald-500"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{stats?.name}</h2>
          <p className="text-emerald-500 font-medium">@{stats?.login}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{stats?.bio}</p>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
            {stats?.location && (
              <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                {stats.location}
              </span>
            )}
            {stats?.company && (
              <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <Briefcase className="w-4 h-4" />
                {stats.company}
              </span>
            )}
            {stats?.blog && (
              <a
                href={stats.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-500 hover:underline"
              >
                <LinkIcon className="w-4 h-4" />
                Website
              </a>
            )}
            {stats?.twitter_username && (
              <a
                href={`https://twitter.com/${stats.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-500 hover:underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* GitHub Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Followers', value: stats?.followers },
          { icon: Users, label: 'Following', value: stats?.following },
          { icon: Code, label: 'Repositories', value: stats?.public_repos },
          { icon: Activity, label: 'Gists', value: stats?.public_gists }
        ].map(({ icon: Icon, label, value }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-lg"
          >
            <Icon className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
            <h3 className="text-sm text-gray-600 dark:text-gray-400">{label}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          </motion.div>
        ))}
      </div>

      {/* Language Stats and GitHub Streak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Most Used Languages
          </h3>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kstubhieeee&theme=gotham&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="Most Used Languages"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            GitHub Streak
          </h3>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=kstubhieeee&theme=gotham&hide_border=false"
            alt="GitHub Streak Stats"
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>

      {/* Featured Repositories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Featured Repositories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {repo.description}
                  </p>
                </div>
                <GitBranch className="w-5 h-5 text-emerald-500" />
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <Code className="w-4 h-4" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Star className="w-4 h-4" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <GitFork className="w-4 h-4" />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* GitHub Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Contribution Graph
        </h3>
        <img
          src={`https://ghchart.rshah.org/22c55e/kstubhieeee`}
          alt="GitHub Contribution Graph"
          className="w-full rounded-lg"
        />
      </motion.div>

      {/* GitHub Trophies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          GitHub Trophies
        </h3>
        <img
          src="https://github-profile-trophy.vercel.app/?username=kstubhieeee&theme=nord&no-frame=false&no-bg=true&margin-w=4"
          alt="GitHub Trophies"
          className="w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
}