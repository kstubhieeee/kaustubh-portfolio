import { motion } from 'framer-motion';

interface SkillIconsProps {
  perRow?: number;
}

export default function SkillIcons({ perRow = 8 }: SkillIconsProps) {
  const skills = [
    'bash', 'blender', 'bootstrap', 'c', 'cpp', 'css', 'dart', 'express',
    'figma', 'firebase', 'flutter', 'git', 'github', 'html', 'java', 'js',
    'jquery', 'linux', 'mongodb', 'mysql', 'npm', 'nextjs', 'nodejs', 'ps',
    'php', 'postman', 'py', 'react', 'redux', 'replit', 'tailwind', 'ubuntu',
    'vite', 'vscode'
  ];

  // Split skills into rows
  const rows = [];
  for (let i = 0; i < skills.length; i += perRow) {
    rows.push(skills.slice(i, i + perRow));
  }

  return (
    <div className="space-y-4">
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rowIndex * 0.1 }}
          className="flex justify-center gap-2"
        >
          <img
            src={`https://skillicons.dev/icons?i=${row.join(',')}`}
            alt="Skill Icons"
            className="h-10 md:h-12"
          />
        </motion.div>
      ))}
    </div>
  );
}