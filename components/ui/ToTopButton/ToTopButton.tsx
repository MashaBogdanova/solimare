'use client';

import React, { useEffect, useState } from 'react';
import { UpOutlined } from '@ant-design/icons';
import styles from './to-top-button.module.scss';

function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={clickHandler}
      className={styles.toTopButton}
      type="button"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <UpOutlined className={styles.toTopButton__icon} />
    </button>
  );
}

export default ToTopButton;
