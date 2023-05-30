import Image from 'next/image';

import linkedin from '@/public/linkedin.svg';
import twitter from '@/public/twitter.svg';
import github from '@/public/github.svg';
import medium from '@/public/medium.svg';
import styles from './Navbar.module.scss';
import Logo from './Logo';

const socials = [
  {
    title: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/brettcornick/',
  },
  {
    title: 'twitter',
    icon: twitter,
    link: 'https://twitter.com/brett_cornick',
  },
  {
    title: 'github',
    icon: github,
    link: 'https://github.com/bcornick',
  },
  {
    title: 'medium',
    icon: medium,
    link: 'https://medium.com/@brett.cornick',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.innerNav}>
        <Logo />
        <div className={styles.socialsBox}>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className={styles.social}>
              <Image
                src={social.icon}
                alt={social.title}
                width={25}
                height={25}
                className={styles.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
