import dynamic from 'next/dynamic';
import Intro from '@/components/Intro';
import { CustomDock } from '@/components/CustomDock';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import NotableAchievements from '@/components/NotableAchievements';
import Languages from '@/components/Languages';

const Meteors = dynamic(() => import('@/components/magicui/meteors'), {
  ssr: true,
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <header>
        <h1 className="sr-only">Himal - Full Stack Developer Portfolio</h1>
        <CustomDock />
      </header>

      <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
        <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />

        <section aria-labelledby="intro-heading">
          <Intro />
        </section>

        <section aria-labelledby="experience-heading">
          <WorkExperience />
        </section>

        <section aria-labelledby="education-heading">
          <Education />
        </section>

        <section aria-labelledby="skills-heading">
          <Skills />
        </section>

        <section aria-labelledby="projects-heading">
          <Projects />
        </section>

        <Meteors number={20} />

        <section aria-labelledby="achievements-heading">
          <NotableAchievements />
        </section>

        <section aria-labelledby="languages-heading">
          <Languages />
        </section>

        <section aria-labelledby="contact-heading">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
