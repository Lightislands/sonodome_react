import Banner from "../components/banner/Banner";
import styles from "./Contact.module.scss";
import Tabs from '../components/tabs/Tabs';
import gallery from './GalleryContent';

const Contact = () => {

  return (
    <div>
      <Banner bannerUrl="/slideshow/geodesic.jpg" />
      <div
        className={styles.pageWrap}
      >
        <div className={styles.pageHeader}>
          <h1 itemProp="name">Gallery</h1>
        </div>
        <div className={styles.container} itemProp="articleBody">
          <div className={styles.tabs}>
            <Tabs tabs={gallery} noBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
