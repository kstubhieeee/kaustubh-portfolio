import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Terminal from "../components/Terminal";
import TypewriterHero from "../components/TypewriterHero";
import StarField from "../components/StarField";
import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";
import SkillsSection from "../components/SkillsSection";
import Comets from "../components/Comets";
import Timeline from "../components/Timeline";
import EducationCard from "../components/EducationCard";

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
    degree: "Bachelor of Engineering in Computer Engineering",
    duration: "2022 - 2026",
    location: "Mumbai, Maharashtra",
  },
  {
    institution: "Don Bosco Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2020 - 2022",
    location: "Mumbai, Maharashtra",
  },
  {
    institution: "St. Francis D'Assisi High School",
    degree: "Secondary School Certificate (SSC)",
    location: "Mumbai, Maharashtra",
    duration: "2010 - 2020",
  },
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Comets />
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff1cf7] via-[#b249f8] to-[#7928ca] z-50"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
        }}
      />

      <section
        id="about"
        className="min-h-screen relative section-transition bg-[#000000] pb-0" // Removed bottom padding completely
      >
        <StarField />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
          style={{ opacity: backgroundOpacity }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0">
          {" "}
          {/* Removed bottom padding */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-cabinet mb-6">
              <span className="bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
                Kaustubh Bane
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-gray-300 mb-4 font-inter">
              <span className="flex text-3xl md:text-3xl items-center gap-1">
                19
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-gray-300 mb-4 font-inter">
              <span className="flex text-lg md:text-xl items-center gap-1">
                <MapPin className="w-4 h-4" />
                Mumbai, Maharashtra
              </span>
            </div>
            <TypewriterHero />
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="https://github.com/kstubhieeee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#24292e] transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#0077b5] transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com/kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#E4405F] transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://twitter.com/kstubhiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-colors"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#FF0000] transition-colors"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:banekaustubh27@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-[#EA4335] transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-0 pb-10 relative section-transition bg-[#000000]">
        <StarField />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Terminal />
        </div>
      </section>

      <section
        id="education"
        className="py-20 relative section-transition bg-[#000000]"
      >
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Education" subtitle="My academic journey" />
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 relative section-transition bg-[#000000]"
      >
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Experience"
            subtitle="My professional journey and internships"
          />
          <Timeline />
        </div>
      </section>

      <section
        id="skills"
        className="py-20 relative section-transition bg-[#000000]"
      >
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Skills" />
          <SkillsSection />
        </div>
      </section>
      <section
        id="projects"
        className="py-20 relative section-transition bg-[#000000]"
      >
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 relative section-transition bg-[#000000]"
      >
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Let's Connect"
            subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
          />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
