import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import Terminal from "../components/Terminal";
import TypewriterHero from "../components/TypewriterHero";
import EducationCard from "../components/EducationCard";
import SkillsSection from "../components/SkillsSection";
import StarField from "../components/StarField";
import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";
import Timeline from "../components/Timeline";

// ... rest of your imports and data remain the same ...

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff1cf7] via-[#b249f8] to-[#7928ca] z-50"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top"
        }}
      />

      {/* About Section */}
      <section id="about" className="min-h-screen relative section-transition bg-[#000000]">
        <StarField />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
          style={{ opacity: backgroundOpacity }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div style={{ opacity: contentOpacity }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-cabinet mb-6">
              <span className="bg-gradient-to-r from-[#ff1cf7] via-[#b249f8] to-[#7928ca] text-transparent bg-clip-text">
                Kaustubh Bane
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-gray-300 mb-4 font-inter">
              <span className="flex text-3xl md:text-3xl items-center gap-1">19</span>
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
                style={{ color: '#24292e' }}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#0077b5] transition-colors"
                style={{ color: '#0077b5' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#E4405F] transition-colors"
                style={{ color: '#E4405F' }}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/kstubhiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-colors"
                style={{ color: '#1DA1F2' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@kstubhie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#FF0000] transition-colors"
                style={{ color: '#FF0000' }}
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="mailto:banekaustubh27@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-[#EA4335] transition-colors"
                style={{ color: '#EA4335' }}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 relative section-transition bg-[#000000]">
        <StarField />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Terminal />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative section-transition bg-[#000000]">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 relative section-transition bg-[#000000]">
        <StarField />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Let's Connect"
            subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}