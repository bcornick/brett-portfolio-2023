import Image from 'next/image';

import shape from '@/public/shape6.jpg';
import gaming from '@/public/gaming.jpg';
import blockchain from '@/public/blockchain.jpg';
import sustainability from '@/public/sustainability.jpg';
import snowboarding from '@/public/snowboarding.jpg';
import space from '@/public/spacescience.jpg';
import design from '@/public/digital-design.jpg';
import AnimatedShape from './AnimatedShape';
import styles from './Interests.module.scss';

const spline = 'https://prod.spline.design/SJ18ozt-oay46tVJ/scene.splinecode';

const interests = [
  { title: 'Digital Design', image: design },
  { title: 'Sustainability', image: sustainability },
  { title: 'Blockchain', image: blockchain },
  { title: 'Gaming', image: gaming },
  { title: 'Space Science', image: space },
  { title: 'Snowboarding', image: snowboarding },
];

const Interests = () => {
  return (
    <section
      className={styles.interestsSection}
      id="interests">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <AnimatedShape
            splineUrl={spline}
            staticImg={shape}
          />
          <h2 className={styles.sectionTitle}>Interests</h2>
        </div>
        <div className={styles.contentGrid}>
          {interests.map((interest, i) => (
            <div
              key={i}
              className={styles.gridItem}>
              <Image
                src={interest.image}
                alt={interest.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.gridImage}
              />
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{interest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
