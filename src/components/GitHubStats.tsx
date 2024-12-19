import { motion } from "framer-motion";
import {
  GitBranch,
  Star,
  GitFork,
  Users,
  Code,
  Activity,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  "Password-Generator",
  "Notes-Keeper",
  "mental-health-tracker",
  "Fee-Management-System",
  "Melodify",
  "roomzy",
  "talentlink",
  "R-CloudFlareBypasser",
];

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [statsRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/kstubhieeee"),
          fetch("https://api.github.com/users/kstubhieeee/repos?per_page=100"),
        ]);
        const statsData = await statsRes.json();
        const reposData = await reposRes.json();
        setStats(statsData);
        const filteredRepos = reposData.filter((repo: Repository) =>
          featuredRepos.includes(repo.name)
        );
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff1cf7]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Profile Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={stats?.avatar_url}
            alt={stats?.name}
            className="w-32 h-32 rounded-full border-4 border-[#ff1cf7]"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mt-4 md:mt-0">
              {stats?.name}
            </h2>
            <p className="text-[#ff1cf7] font-medium">@{stats?.login}</p>
            <p className="mt-2 text-gray-300">{stats?.bio}</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              {stats?.location && (
                <span className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {stats.location}
                </span>
              )}
              {stats?.company && (
                <span className="flex items-center gap-1 text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  {stats.company}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* GitHub Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: "Followers", value: stats?.followers },
          { icon: Users, label: "Following", value: stats?.following },
          { icon: Code, label: "Repositories", value: stats?.public_repos },
          { icon: Activity, label: "Gists", value: stats?.public_gists },
        ].map(({ icon: Icon, label, value }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-4 text-center border border-white/10"
          >
            <Icon className="w-6 h-6 mx-auto mb-2 text-[#ff1cf7]" />
            <h3 className="text-sm text-gray-400">{label}</h3>
            <p className="text-2xl font-bold text-white">{value}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Repositories */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">
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
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ff1cf7] transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {repo.description}
                  </p>
                </div>
                <GitBranch className="w-5 h-5 text-[#ff1cf7]" />
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1 text-gray-400">
                    <Code className="w-4 h-4" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1 text-gray-400">
                  <Star className="w-4 h-4" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <GitFork className="w-4 h-4" />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
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
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">
          Contribution Graph
        </h3>
        <img
          src={`https://ghchart.rshah.org/ff1cf7/kstubhieeee`}
          alt="GitHub Contribution Graph"
          className="w-full rounded-lg"
        />
      </motion.div>

      {/* GitHub Trophies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold text-white mb-6">GitHub Trophies</h3>
        <img
          src="https://github-profile-trophy.vercel.app/?username=kstubhieeee&theme=nord&no-frame=true&no-bg=true&margin-w=4"
          alt="GitHub Trophies"
          className="w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
}
