import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GitHubPage from './pages/GitHubPage';
import BlogPage from './pages/BlogPage';
import NewBlogPost from './pages/NewBlogPost';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/github" element={<GitHubPage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/blog/new" element={<NewBlogPost />} />
      </Routes>
    </div>
  );
}

export default App;