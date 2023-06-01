import Image from 'next/image';

import shape from '@/public/shape3.jpg';
import lovebites from '@/public/lovebites.jpg';
import intheory from '@/public/intheory.jpg';
import counterparts from '@/public/counterparts.jpg';
import Overlay from './Overlay';
import AnimatedShape from './AnimatedShape';
import styles from './Projects.module.scss';

const spline = 'https://prod.spline.design/Jt2J4T6hNryFAHUp/scene.splinecode';

const projects = [
  {
    title: 'Counterparts',
    description: 'Impactful digital avatars',
    link: 'https://www.counterparts.io/',
    image: counterparts,
    achievements: [
      '3D Development',
      '- Created all brand, web, and avatar assets',
      '- Designed and built website with 3D animation',
      '- Developed partner API integrations',
    ],
  },
  {
    title: 'inTheory',
    description: 'Fund science through art',
    link: 'https://www.intheory.app/',
    image: intheory,
    achievements: [
      'Design \u2192 Build',
      '- Solo designed and built the entire application',
    ],
  },
  {
    title: 'Love Bites',
    description: 'A heartfelt food journal',
    link: 'https://www.emma-and-brett.us/',
    image: lovebites,
    achievements: ['Custom, Unique', '- She loves it!'],
  },
];

const Projects = () => {
  return (
    <section
      className={styles.projectsSection}
      id="projects">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <AnimatedShape
            splineUrl={spline}
            staticImg={shape}
          />
          <h2 className={styles.sectionTitle}>Latest Projects</h2>
        </div>
        <div className={styles.contentGrid}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={styles.gridItem}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.gridImage}
              />
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
              <a
                className={styles.popBtn}
                href={project.link}
                target="_blank"
                rel="noreferrer">
                &rarr;
              </a>
              <Overlay content={project.achievements} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
