import Image from 'next/image';

import shape from '@/public/shape1.jpg';
import linkedin from '@/public/linkedin.svg';
import twitter from '@/public/twitter.svg';
import github from '@/public/github.svg';
import medium from '@/public/medium.svg';
import resume from '@/public/resume.jpg';
import AnimatedShape from './AnimatedShape';
import styles from './Contact.module.scss';

const spline = 'https://prod.spline.design/j92KyEtX8SaQWzGg/scene.splinecode';

const contacts = [
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/brettcornick/',
    image: linkedin,
  },
  {
    title: 'twitter',
    link: 'https://twitter.com/brett_cornick',
    image: twitter,
  },
  { title: 'github', link: 'https://github.com/bcornick', image: github },
  { title: 'medium', link: 'https://medium.com/@brett.cornick', image: medium },
  {
    title: 'resume',
    link: '/Brett_Cornick_resume_2023.pdf',
    image: resume,
  },
];

const Contact = () => {
  return (
    <section
      className={styles.contactSection}
      id="contact">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <AnimatedShape
            splineUrl={spline}
            staticImg={shape}
          />
          <h2 className={styles.sectionTitle}>Contact</h2>
        </div>
        <div className={styles.contentGrid}>
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className={styles.gridItem}>
              <Image
                src={contact.image}
                alt={contact.link}
                fill
                sizes="20px"
                className={styles.gridImage}
              />
              <div className={styles.popBtn}>{'\u2197'}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
