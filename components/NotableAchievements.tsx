'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen } from 'lucide-react';
import { MagicCard } from './ui/magic-card';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'HackTheBox Achievement',
    description:
      'Ranked #1 in Nepal on HackTheBox, excelling in various Capture the Flag (CTF) challenges (2020).',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Live Bug Bounty Instructor',
    description:
      'Delivered live bug bounty lectures to over 1,000 students, covering key vulnerability detection and reporting techniques (2020).',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Bug Bounty Recognition',
    description:
      'Awarded a three-year VPC server subscription by Fastmooze for identifying and reporting critical parameter tampering in their payment gateway (2020).',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Udemy Course Launch',
    description:
      'Created and launched a cybersecurity course on Udemy, with over 3,000+ students enrolled (4.5/5 rating).',
  },
];

export default function NotableAchievements() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Notable Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <MagicCard key={index} className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-blue-500 dark:text-blue-400">{achievement.icon}</div>
                <h3 className="font-semibold text-lg">{achievement.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
