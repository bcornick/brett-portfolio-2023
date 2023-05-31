import Image from 'next/image';

import shape from '@/public/shape4.jpg';
import ifLogo from '@/public/if.jpg';
import epic from '@/public/epic.jpg';
import accenture from '@/public/accenture.jpg';
import llnl from '@/public/llnl.jpg';
import Overlay from './Overlay';
import AnimatedShape from './AnimatedShape';
import styles from './Experience.module.scss';

const spline = 'https://prod.spline.design/diJXqe6MFf5d3TZU/scene.splinecode';

const experiences = [
  {
    title: 'Impact Finance',
    description: '',
    link: 'https://www.impact-finance.io/',
    image: ifLogo,
    achievements: ['Founder', '2022 - Present'],
  },
  {
    title: 'Epic',
    description: '',
    link: 'https://www.epicbnnt.com/',
    image: epic,
    achievements: ['Head of Product', '2020 - 2022', '2016 - 2019'],
  },
  {
    title: 'Accenture',
    description: '',
    link: 'https://www.accenture.com/us-en',
    image: accenture,
    achievements: ['Technology Consultant', '2019 - 2020'],
  },
  {
    title: 'LLNL',
    description: '',
    link: 'https://www.llnl.gov/',
    image: llnl,
    achievements: ['Graduate Researcher', '2017 - 2018'],
  },
];

const Experience = () => {
  return (
    <section
      className={styles.experienceSection}
      id="experience">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <AnimatedShape
            splineUrl={spline}
            staticImg={shape}
          />
          <h2 className={styles.sectionTitle}>Work Experience</h2>
        </div>
        <div className={styles.contentGrid}>
          {experiences.map((experience, i) => (
            <div
              key={i}
              className={styles.gridItem}>
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.gridImage}
              />
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{experience.title}</h3>
              </div>
              <a
                className={styles.popBtn}
                href={experience.link}
                target="_blank"
                rel="noreferrer">
                {'\u2197'}
              </a>
              <Overlay content={experience.achievements} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
