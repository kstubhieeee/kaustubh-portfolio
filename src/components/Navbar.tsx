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
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  const handleNavigation = (href: string) => {
    if (isHomePage) {
      setIsOpen(false);
      if (href === "/#about") {
        scroll.scrollToTop({ smooth: true, duration: 500 });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        if (href === "/#about") {
          scroll.scrollToTop({ smooth: true, duration: 500 });
        } else {
          const element = document.getElementById(href.replace("/#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    }
  };

  const links = [
    { icon: User, label: "About", href: "/#about" },
    { icon: Briefcase, label: "Projects", href: "/#projects" },
    { icon: Github, label: "GitHub", href: "/github" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
    { icon: Mail, label: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xl"
            >
              <Code />
              <span>KB</span>
            </motion.div>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-emerald-600 dark:text-emerald-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ icon: Icon, label, href }) => {
              const isActive =
                location.pathname === href ||
                (href.startsWith("/#") && location.pathname === "/") ||
                (href === "/blog" && location.pathname.startsWith("/blog"));

              if (href.startsWith("/#") && isHomePage) {
                return (
                  <ScrollLink
                    key={label}
                    to={href === "/#about" ? "" : href.replace("/#", "")}
                    smooth={true}
                    duration={500}
                    className={`flex items-center gap-2 transition-colors cursor-pointer ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400 hover:text-gray-900 dark:hover:text-white"
                        : "text-emerald-600 dark:text-emerald-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                    onClick={() =>
                      href === "/#about" &&
                      scroll.scrollToTop({ smooth: true, duration: 500 })
                    }
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </ScrollLink>
                );
              }

              return (
                <Link
                  key={label}
                  to={href}
                  onClick={() =>
                    href.startsWith("/#") && handleNavigation(href)
                  }
                  className={`flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 hover:text-gray-900 dark:hover:text-white"
                      : "text-emerald-600 dark:text-emerald-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Dropdown Menu with Sliding Animation */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} // Start from the right
            animate={{ x: 0 }} // Slide in to the position 0
            exit={{ x: "100%" }} // Slide out to the right
            transition={{ duration: 0.3 }} // Smooth transition
            className="md:hidden mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 absolute right-0 top-16 w-48" // Adjust width as needed
          >
            <div className="flex flex-col gap-4">
              {links.map(({ icon: Icon, label, href }) => {
                if (href.startsWith("/#") && isHomePage) {
                  return (
                    <ScrollLink
                      key={label}
                      to={href === "/#about" ? "" : href.replace("/#", "")}
                      smooth={true}
                      duration={500}
                      className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        if (href === "/#about") {
                          scroll.scrollToTop({ smooth: true, duration: 500 });
                        }
                      }}
                    >
                      <Icon size={20} />
                      <span>{label}</span>
                    </ScrollLink>
                  );
                }

                return (
                  <Link
                    key={label}
                    to={href}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
                    onClick={() => {
                      setIsOpen(false);
                      href.startsWith("/#") && handleNavigation(href);
                    }}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </Link>
                );
              })}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
