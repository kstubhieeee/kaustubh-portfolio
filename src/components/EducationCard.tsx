import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
}

export default function EducationCard({ institution, degree, duration, location, grade }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent-pink/10 dark:bg-accent-purple/10 rounded-lg">
          <GraduationCap className="w-6 h-6 text-accent-pink dark:text-accent-purple" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{institution}</h3>
          <p className="text-accent-pink dark:text-accent-purple font-medium">{degree}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
            <span>{duration}</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            {grade && <span className="font-medium">{grade}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}