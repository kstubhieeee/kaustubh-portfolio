import { motion } from "framer-motion";
import {
  Code,
  User,
  Briefcase,
  Mail,
  Github,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const isHomePage = location.pathname === "/";

  const links = [
    { icon: User, label: "About", href: "about" },
    { icon: Briefcase, label: "Projects", href: "projects" },
    { icon: Github, label: "GitHub", href: "/github" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
    { icon: Mail, label: "Contact", href: "contact" },
  ];

  const handleSectionClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  const renderLink = (link: { icon: any; label: string; href: string }) => {
    const Icon = link.icon;
    const isExternalLink = link.href.startsWith("/");

    if (isExternalLink) {
      return (
        <Link
          key={link.label}
          to={link.href}
          className="flex items-center gap-2 text-gray-300 hover:text-accent-pink transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <Icon size={20} />
          <span>{link.label}</span>
        </Link>
      );
    }

    if (!isHomePage) {
      return (
        <button
          key={link.label}
          onClick={() => handleSectionClick(link.href)}
          className="flex items-center gap-2 text-gray-300 hover:text-accent-pink transition-colors"
        >
          <Icon size={20} />
          <span>{link.label}</span>
        </button>
      );
    }

    return (
      <ScrollLink
        key={link.label}
        to={link.href}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="flex items-center gap-2 text-gray-300 hover:text-accent-pink transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Icon size={20} />
        <span>{link.label}</span>
      </ScrollLink>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-md z-50 border-b border-dark-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-accent-pink font-bold text-xl"
            >
              <Code />
              <span>KB</span>
            </motion.div>
          </Link>

          <div className="flex md:hidden">
            <button onClick={toggleDropdown} className="text-accent-pink">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => renderLink(link))}
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-dark-200 shadow-lg rounded-lg p-4 absolute right-0 top-16 w-48"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => renderLink(link))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
