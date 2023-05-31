import Image from 'next/image';

import pin from '@/public/location.svg';
import brett from '@/public/brett.png';
import styles from './Hero.module.scss';

const skills = [
  { title: 'React/NextJS', class: styles.darkBlue },
  { title: 'Typescript', class: styles.lightBlue },
  { title: 'Python', class: styles.darkBlue },
  { title: 'SASS', class: styles.darkBlue },
  { title: 'Solidity', class: styles.lightBlue },
  { title: 'Spline', class: styles.darkBlue },
  { title: 'Figma', class: styles.lightBlue },
];

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <div className={styles.textBox}>
          <h1 className={styles.head}>Brett Cornick</h1>
          <h2 className={styles.subHead}>Designer, Developer, Scientist</h2>
          <p className={styles.description}>
            7 years of professional experience in engineering, product, and
            leadership roles at early-stage technology start-ups
          </p>
          <a
            className={styles.location}
            href="https://www.google.com/maps/@40.7626901,-111.8986054,12.4z/data=!5m1!1e4?entry=ttu"
            target="_blank"
            rel="noreferrer">
            <Image
              src={pin}
              alt="pin"
              width={30}
              height={30}
              className={styles.pin}
            />
            Salt Lake City, UT, USA
          </a>
        </div>
        <div className={styles.skills}>
          {skills.map((skill, i) => (
            <h3
              key={i}
              className={`${styles.skill} ${skill.class}`}>
              {skill.title}
            </h3>
          ))}
        </div>
      </div>
      <div className={styles.imageBox}>
        <Image
          src={brett}
          alt="Brett"
          fill
          sizes="70vw"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.badges}>
        <h3 className={styles.experience}>
          <span>7+</span>years experience
        </h3>
        <h3 className={styles.degree}>MSc Computational Materials Science</h3>
      </div>
    </section>
  );
};

export default Hero;
