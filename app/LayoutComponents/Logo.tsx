'use client';

import Image from 'next/image';

import bLogo from '@/public/b.svg';
import styles from './Logo.module.scss';
import { useContext } from 'react';
import { SectionContext } from '../context/section';

const Logo = () => {
  const { updateSection } = useContext(SectionContext);

  const scrollTop = () => {
    updateSection!(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={styles.logoBox}
      onClick={() => {
        scrollTop();
      }}>
      <Image
        src={bLogo}
        alt="B"
        fill
        sizes="50px"
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
