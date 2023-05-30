'use client';

import { useContext, useEffect } from 'react';

import { SectionContext } from '../context/section';
import styles from './ProceedBtn.module.scss';
import { usePathname } from 'next/navigation';

const sections = [
  { title: 'Latest Projects', id: 'projects' },
  { title: 'Work Experience', id: 'experience' },
  { title: 'Education', id: 'education' },
  { title: 'Interests', id: 'interests' },
  { title: 'Contact', id: 'contact' },
  { title: 'Back to Top', id: 'top' },
];

const ProceedBtn = () => {
  const { section, updateSection } = useContext(SectionContext);
  const pathname = usePathname();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // }, [pathname]);

  const setCurrentSection = () => {
    if (section >= sections.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      updateSection!(0);
    } else {
      const element = document.getElementById(sections[section].id);
      const yOffset = -50;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      updateSection!(section + 1);
    }
  };

  return (
    <div
      onClick={() => {
        setCurrentSection();
      }}
      className={
        section % 2 === 0
          ? `${styles.proceedContainer} ${styles.left}`
          : `${styles.proceedContainer} ${styles.right}`
      }>
      <h4
        className={styles.text}
        style={
          section === sections.length - 1
            ? { transform: 'translateY(3rem)' }
            : {}
        }>
        {sections[section].title}
      </h4>
      <p
        className={styles.arrow}
        style={section === sections.length - 1 ? { scale: '-1 1' } : {}}>
        ^
      </p>
    </div>
  );
};

export default ProceedBtn;
