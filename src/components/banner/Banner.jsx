import { useState, useEffect } from "react";
import styles from "./Banner.module.scss";

const images = [
  "/slideshow/arbor.jpg",
  "/slideshow/geodesic.jpg",
  "/slideshow/gh_banner.jpg",
  "/slideshow/house.jpg",
  "/slideshow/summer-dome.jpg",
  "/slideshow/winter_dome.jpg",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.garyBackground}>
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

export default Banner;
