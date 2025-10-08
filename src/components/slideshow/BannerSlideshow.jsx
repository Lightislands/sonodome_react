import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./BannerSlideshow.module.scss";

const BannerSlideshow = ({ images, interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.grayBackground}>
      <div className={styles.banner}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Banner ${i}`}
            className={`${styles.image} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

BannerSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default BannerSlideshow;
