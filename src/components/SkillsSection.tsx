import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SkillIcons from "./SkillIcons";

interface SkillsSectionProps {
  skills: {
    languages: string[];
    tools: string[];
    technologies: string[];
    courses: string[];
  };
  certifications: string[];
}

export default function SkillsSection({
  skills,
  certifications,
}: SkillsSectionProps) {
  // Combine all skills into one array for the icons
  const allSkills = [
    ...skills.languages,
    ...skills.tools,
    ...skills.technologies,
  ];

  return (
    <div className="space-y-12">
      {/* Skill Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-white/10 rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Technologies & Tools
        </h3>
        <SkillIcons skills={allSkills} />
      </motion.div>

      {/* Course Skills & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/10 rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Course Skills
            </h3>
          </div>
          <ul className="space-y-2">
            {skills.courses.map((course) => (
              <li
                key={course}
                className="text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <Award className="w-4 h-4  dark:text-orange-400" />
                {course}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/10 rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100 dark:bg-pink-900 rounded-lg">
              <Award className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Certifications
            </h3>
          </div>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="text-gray-700 dark:text-gray-300 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-pink-500" />
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
