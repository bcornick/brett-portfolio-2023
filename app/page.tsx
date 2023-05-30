import Contact from './PageComponents/Contact';
import Education from './PageComponents/Education';
import Experience from './PageComponents/Experience';
import Hero from './PageComponents/Hero';
import Interests from './PageComponents/Interests';
import Projects from './PageComponents/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Interests />
      <Contact />
    </main>
  );
}
