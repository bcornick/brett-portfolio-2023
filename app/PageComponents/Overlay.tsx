'use client';

import { useState } from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  content: string[];
}

const Overlay = ({ content }: OverlayProps) => {
  const [show, setShow] = useState(false);

  return (
    <ul
      className={!show ? styles.overlay : `${styles.overlay} ${styles.show}`}
      onClick={() => {
        setShow(!show);
      }}>
      {content.map((item, i) => (
        <li
          key={i}
          className={
            content[0].length === 9
              ? `${styles.item} ${styles.emojis}`
              : styles.item
          }>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Overlay;
