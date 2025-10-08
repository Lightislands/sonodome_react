import Banner from "../components/banner/Banner";
import styles from "./Contact.module.scss";

const Contact = () => {

  return (
    <div>
      <Banner bannerUrl="/slideshow/geodesic.jpg" />
      <div
        className={styles.pageWrap}
        itemScope
        itemType="http://schema.org/Article"
      >
        <meta itemProp="inLanguage" content="en-GB" />

        <div className={styles.pageHeader}>
          <h1 itemProp="name">Contact Us</h1>
        </div>
        <div className={styles.container} itemProp="articleBody"></div>

        <div className={styles.row}>
          <div>
            <p>
            SONODOME - Poland<br />
            MOBILE: +48 729 692 556<br />
            E-MAIL: <b>mail@sonodome.com</b><br />
            NIP: 8522584607, REGON: 368806040
            <br /><br />
            If you <b>haven't got a reply</b> in 48 hours, please check your spam folder.
            </p>
          </div>
          <div>
            <p>
              <b>We are looking for a partner in US and Canada</b>
              <br /><br />
              If you haven't got a reply on your inquiry during 24 hours, please check your spam folder or contact us by WhatsApp or Viber.
            </p>
          </div>
        </div>
        <span className={styles.dots}></span>
        <div className={styles.row}>
          <div>
            <p>
              <h3>About us</h3><br /><br />
              Many years of experience in design and construction geodesic domes allowed us to optimize and bring to perfection all the stages of production. 
              <br /><br />
              As the sphere is an ideal natural form, it inspires us do not stop searching for new ideas and methods of realization, as well as newest innovation technologies.
              <br /><br />
              Our company deals in two directions - event or temporary domes and permanent constructions. All temporary constructions are available both, for rental and sale. 
            </p>
          </div>
          <div>
            <p>
              <h3>Why to choose SonoDome?</h3><br /><br />
              We love what we do. We work on each project with great commitment and enthusiasm. We want to create EXACTLY what our client requires.
              <br /><br />
              We are fully responsible on all stages of our cooperation with the customer. Become our client and you can be confident in product quality, time frames, materials and technology used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
