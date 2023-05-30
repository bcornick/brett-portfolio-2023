'use client';

import Image from 'next/image';

import arcs from '@/public/arcs.svg';
import { useContext } from 'react';
import { SectionContext } from '../context/section';
import styles from './RotatingArcs.module.scss';

const numArcs = 3;

const RotatingArcs = () => {
  const { section } = useContext(SectionContext);

  return (
    <div
      className={
        section % 2 === 1
          ? `${styles.arcsContainer} ${styles.left}`
          : `${styles.arcsContainer} ${styles.right}`
      }>
      {Array.from(Array(numArcs).keys()).map(num => (
        <Image
          key={num}
          src={arcs}
          alt=""
          fill
          sizes="100vw"
          className={styles.arcs}
        />
      ))}
    </div>
  );
};

export default RotatingArcs;
