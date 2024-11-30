'use client';

import { motion } from 'framer-motion';
import { MagicCard } from './ui/magic-card';
import HyperText from './ui/hyper-text';

const languages = [
  {
    language: 'Tamil',
    proficiency: 'Native',
    flag: '🇮🇳',
  },
  {
    language: 'English',
    proficiency: 'Proficient',
    flag: '🇬🇧',
  },
  {
    language: 'Nepali',
    proficiency: 'Intermediate',
    flag: '🇳🇵',
  },
  {
    language: 'Hindi',
    proficiency: 'Intermediate',
    flag: '🇮🇳',
  },
];

export default function Languages() {
  return (
    <section className="py-10">
      <div className="flex items-center gap-2 mb-6">
        <HyperText className="text-2xl font-bold" text="Languages" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MagicCard className="hover:scale-105 transition-all">
              <div className="flex items-center gap-2">
                {/* <span className="text-2xl">{lang.flag}</span> */}
                <div>
                  <h3 className="font-medium">{lang.language}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{lang.proficiency}</p>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
