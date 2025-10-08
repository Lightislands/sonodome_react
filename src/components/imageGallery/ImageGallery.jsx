import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Gallery.module.scss";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.galleryContainer}>
      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={styles.thumbnail}
          />
        ))}
      </div>

      {/* Full-size image modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <span className={styles.close}>&times;</span>
          <img src={selectedImage} alt="Full size" className={styles.fullImage} />
        </div>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
