import { useEffect, useRef, useState } from 'react';
import styles from './saleHomepage.module.scss';
import Button from '@components/Button/Button';

function SaleHomepage() {
  const [scrollDirection, setScrollDirection] = useState(null);

  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);

  const previousScrollPosition = useRef(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection('down');
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection('up');
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDirection === 'down' && scrollPosition >= 1500) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === 'up') {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);

    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return (
    <div className={styles.container}>
      <div
        className={styles.boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Sale of the year</div>
        <div className={styles.description}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>

        <Button content={'Read more'} isPrimary={false} />
      </div>
      <div
        className={styles.boxImg}
        style={{
          transform: `translateX(${-translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomepage;
