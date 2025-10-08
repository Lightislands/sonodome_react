import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./Slideshow.module.scss";

const BannerSlideshow = ({ images, interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className={styles.slideshow}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Dome image ${i}`}
            className={`${styles.image} ${i === index ? styles.active : ""}`}
          />
        ))}
    </div>
  );
};

BannerSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default BannerSlideshow;
