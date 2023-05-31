'use client';

import React, { Suspense } from 'react';
import Image, { StaticImageData } from 'next/image';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import useWindowSize from '@/helpers/useWindowSize';
import styles from './AnimatedShape.module.scss';

interface AnimatedShapeProps {
  splineUrl: string;
  staticImg: StaticImageData;
}

const AnimatedShape = ({ splineUrl, staticImg }: AnimatedShapeProps) => {
  const size = useWindowSize();

  return (
    <>
      {size.width && size.width > 768 && (
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
      )}
      {size.width && size.width <= 768 && (
        <div className={styles.staticImg}>
          <Image
            src={staticImg}
            alt=""
            sizes="70vw"
            fill
            className={styles.shape}
          />
        </div>
      )}
    </>
  );
};

export default AnimatedShape;
