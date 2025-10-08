import styles from "./Banner.module.scss";

const Banner = ({ bannerUrl }) => (
  <div className={styles.grayBackground}>
    <div className={styles.banner}>
        <img
          src={bannerUrl}
          alt='dome green house'
          className={styles.image}
        />
    </div>
  </div>
);

export default Banner;
