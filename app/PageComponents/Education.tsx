import Image from 'next/image';

import shape from '@/public/shape2.jpg';
import ucla from '@/public/ucla.jpg';
import usc from '@/public/usc.jpg';
import extension from '@/public/extension.jpg';
import AnimatedShape from './AnimatedShape';
import styles from './Education.module.scss';

const spline = 'https://prod.spline.design/BOSpP7BJHR44A0a2/scene.splinecode';

const degrees = [
  {
    title: 'MSc Computational Materials Science',
    description: 'UCLA 2018',
    image: ucla,
  },
  {
    title: 'BS Chemical Engineering - Nanotechnology',
    description: 'USC 2016',
    image: usc,
  },
  {
    title: 'Blockchain Management',
    description: 'UCLA Extension 2020',
    image: extension,
  },
];

const Education = () => {
  return (
    <section
      className={styles.educationSection}
      id="education">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <AnimatedShape
            splineUrl={spline}
            staticImg={shape}
          />
          <h2 className={styles.sectionTitle}>Education</h2>
        </div>
        <div className={styles.contentGrid}>
          {degrees.map((degree, i) => (
            <div
              key={i}
              className={styles.gridItem}>
              <Image
                src={degree.image}
                alt={degree.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.gridImage}
              />
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{degree.title}</h3>
                <p className={styles.description}>{degree.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
