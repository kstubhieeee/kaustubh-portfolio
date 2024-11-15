import { motion } from 'framer-motion';
import { Calendar, Briefcase, ArrowRight } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
  link?: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "June 2024 - July 2024",
    title: "Web Development Internship",
    company: "SLRTCE (In-house)",
    description: "Developed a Music platform 'Melodify' using PHP, MySQL, and modern web technologies",
    skills: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/kstubhieeee/Melodify"
  },
  {
    date: "Dec 2023 - Jan 2024",
    title: "CyberSecurity Internship",
    company: "SLRTCE (In-house)",
    description: "Gained hands-on experience in cybersecurity practices and threat detection",
    skills: ["Network Security", "Penetration Testing", "Security Protocols"]
  },
  {
    date: "Sept 2023 - Oct 2023",
    title: "Java Development Internship",
    company: "Engineering Minds",
    description: "Built a scaleable Library Management System using Java and MySQL",
    skills: ["Java", "MySQL", "JDBC", "Swing"],
    link: "https://github.com/kstubhieeee/Fee-Management-System"
  }
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#ff1cf7] via-[#b249f8] to-[#7928ca] animate-pulse" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff1cf7]"
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-[#ff1cf7] opacity-75" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-2 text-[#ff1cf7] mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#ff1cf7] transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-400 mt-1 mb-3">
                <Briefcase className="w-4 h-4" />
                <span>{item.company}</span>
              </div>

              <p className="text-gray-300 mb-4">
                {item.description}
              </p>

              {item.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-[#ff1cf7]/10 text-[#ff1cf7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff1cf7] hover:opacity-80 transition-opacity"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}