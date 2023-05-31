'use client';

import { StaticImageData } from 'next/image';
import React, { Suspense, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import styles from './AnimatedShape.module.scss';

interface AnimatedShapeProps {
  splineUrl: string;
}

const AnimatedShape = ({ splineUrl }: AnimatedShapeProps) => {
  return (
    <div className={styles.splineContainer}>
      <div className={styles.scrollOverlay}></div>
      <Suspense fallback={<div>loading...</div>}>
        <Spline
          scene={splineUrl}
          className={styles.splineObj}
          style={{ height: '99%', width: '100%' }}
        />
      </Suspense>
    </div>
  );
};

export default AnimatedShape;
