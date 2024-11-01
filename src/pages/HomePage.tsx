import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Terminal from "../components/Terminal";
import TypewriterHero from "../components/TypewriterHero";
import EducationCard from "../components/EducationCard";
import SkillsSection from "../components/SkillsSection";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const projects = [
    {
      title: "Notes Keeper",
      description:
        "A simple notes app to add and delete notes with dynamic frontend, built with React and styled with CSS.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/kstubhieeee/Notes-Keeper",

      date: "August 2023",
    },
    {
      title: "Mental Health Tracker",
      description:
        "A comprehensive mental health tracking application helping users monitor their emotional well-being.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/kstubhieeee/mental-health-tracker",

      date: "October 2023",
    },
    {
      title: "Fee Management System",
      description:
        "A robust system for managing student fees, payments, and financial records in educational institutions.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/kstubhieeee/Fee-Management-System",
      date: "December 2023",
    },
    {
      title: "Melodify",
      description:
        "A music streaming platform with features for playlist creation and music discovery.",
      image:
        "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/kstubhieeee/Melodify",
      date: "July 2024",
    },
    {
      title: "Roomzy",
      description:
        "A room renting and management system for student accommodations.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/kstubhieeee/roomzy",
      date: "September 2023",
    },
    {
      title: "TalentLink",
      description:
        "A platform connecting influencers with brand managers, streamlining the recruitment process.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com/hemant-i7/talentlink",
      date: "November 2023",
    },
  ];

  const education = [
    {
      institution: "Shree L.R. Tiwari College of Engineering",
      degree: "Bachelors in Computer Engineering",
      duration: "2022 - 2026",
      location: "Mumbai, Maharashtra",
      grade: "CGPA: 8.5",
    },
    {
      institution: "Don Bosco Junior College",
      degree: "Higher Secondary Education in Sciences",
      duration: "2020 - 2022",
      location: "Mumbai, Maharashtra",
    },
  ];

  const skills = {
    languages: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    tools: [
      "VS Code",
      "FlutterFlow",
      "Netbeans",
      "Replit",
      "CodeSandbox",
      "Figma",
      "Postman API",
    ],
    technologies: [
      "Linux",
      "GitHub",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Git",
      "MongoDB",
      "JQuery",
      "Bootstrap",
    ],
    courses: [
      "Database Management System",
      "Data Structures and Algorithms",
      "Operating System",
      "Computer Networks",
    ],
  };

  const certifications = [
    "The Full Stack Web Developer Course by Angela Yu",
    "Java",
    "Learn Python Programming by Codechef",
    "Learn SQL by CodeChef",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative section-transition">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"
          style={{ opacity: backgroundOpacity }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: contentOpacity }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
              Kaustubh Bane
            </h1>
            <span className="text-3xl mb-5 items-center ">19</span>
            <div className="flex flex-wrap justify-center gap-4 mt-3 text-gray-600 dark:text-gray-300 mb-4 font-inter">
              <span className="flex text-xl items-center gap-1">
                <MapPin className="w-4 h-4" />
                Mumbai, Maharashtra
              </span>
            </div>
            <TypewriterHero />
            <div className="flex justify-center gap-6 mt-8">
              <motion.a
                href="https://github.com/kstubhieeee"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Github className="w-6 h-6 text-gray-900 dark:text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kstubhie"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Linkedin className="w-6 h-6 text-[#0A66C2]" />
              </motion.a>
              <motion.a
                href="mailto:banekaustubh27@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-6 h-6 text-[#EA4335]" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 relative section-transition bg-white dark:bg-gray-900"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 relative section-transition bg-gray-50 dark:bg-gray-800"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
          </motion.div>

          <SkillsSection skills={skills} certifications={certifications} />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 relative section-transition bg-white dark:bg-gray-900"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 relative section-transition bg-gray-50 dark:bg-gray-800"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 font-inter">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:banekaustubh27@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all font-medium"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </motion.a>
              <motion.a
                href="tel:+919321572497"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
