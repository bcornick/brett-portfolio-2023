'use client';

import { StaticImageData } from 'next/image';
import React, { Suspense, useState } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

import styles from './AnimatedShape.module.scss';

interface AnimatedShapeProps {
  splineUrl: string;
}

const AnimatedShape = ({ splineUrl }: AnimatedShapeProps) => {
  //   const [dims, setDims] = useState({ width: '0px', height: '0px' });

  //   let large = true; // can add other sizing if needed

  //   const displaySizes = {
  //     large: { width: '100%', height: '30rem' },
  //     medium: { width: '', height: '' },
  //     small: { width: '', height: '' },
  //   };

  return (
    <div
      className={styles.splineContainer}
      //   style={{ width: dims.width, height: dims.height }}
    >
      <Suspense fallback={<div>loading...</div>}>
        <Spline
          scene={splineUrl}
          //   onLoad={() => {
          //     large &&
          //       setDims({
          //         width: displaySizes.large.width,
          //         height: displaySizes.large.height,
          //       });
          //   }}
          className={styles.splineObj}
          //   style={{ width: dims.width, height: dims.height }}
        />
      </Suspense>
    </div>
  );
};

export default AnimatedShape;
