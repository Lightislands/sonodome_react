import Banner from "../components/banner/Banner";
import ImageGallery from "../components/imageGallery/ImageGallery";
import styles from "./WinterDome.module.scss";

const images = [
  "/gallery/winterdome/glamping-dome-1.jpg",
  "/gallery/winterdome/glamping-dome-2.jpg",
  "/gallery/winterdome/glamping-dome-3.jpg",
  "/gallery/winterdome/glamping-dome-4.jpg",
  "/gallery/winterdome/winter-dome-1.jpg",
  "/gallery/winterdome/winter-dome-2.jpg",
  "/gallery/winterdome/winter-dome-3.jpg",
  "/gallery/winterdome/winter-dome-4.jpg"
];

const WinterDome = () => {
  return (
    <>
      <Banner bannerUrl="/slideshow/winter_dome.jpg" />
      <div
        className={styles.pageWrap}
        itemScope
        itemType="http://schema.org/Article"
      >
        <meta itemProp="inLanguage" content="en-GB" />

        <div className={styles.pageHeader}>
          <h1 itemProp="name">Winter Dome</h1>
        </div>

        <div itemProp="articleBody">
          <div className={styles.container}>
            <p>
Dome cottage is a truly cosy, comfortable and spacious place for a relaxing holiday at any time of the year. Panoramic views at surrounding nature, skylights for star gazing create an atmosphere of being close to nature in a comfortable environment, daydreaming and relaxation mood.
            </p>
            <div className={styles.row}>
              <div>
                <p>
We offer building of such dome cabins for a private use,<br /> as well as a large glamping complexes with all the necessary<br /> infrastructure, including administrative and residential buildings,<br /> restaurants and cafe, saunas, swimming pools <br />and other buildings.
                <br /><br /><br />
                </p>

                <h3>Applicable for:</h3>
                <ul className={styles.listGr}>
                  <li><span>Skiing lodge;</span></li>
                  <li><span>Glamping;</span>
                  </li>
                  <li><span>Winter cottage;</span>
                  </li>
                  <li><span>Children's summer camp;</span></li>
                  <li><span>SPA resort in natural surroundings;</span>
                  </li>
                  <li><span>Guest house...</span></li>
                </ul>
              </div>

              <div>
                <img
                  className={styles.winterDomeImg}
                  onContextMenu={(e) => e.preventDefault()}
                  alt="Winter dome cottage"
                  src="/content/winter-dome.jpg"
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.description}`}>
              <video
                className={styles.glampDomesVideo}
                src="/content/gdome.mp4"
                type="video/mp4"
                // autoPlay
                muted
                // loop
                playsInline
                controls
                controlsList="nodownload"
                // poster="/content/type.jpg"
              >
                Your browser does not support the video tag.
              </video>
              <div className={styles.text}>
                <div>
                  <h3>Features of the dome structures:</h3>
                  <ul className={styles.listGr}>
                    <li><span>Land does not require building permission. Considered as a non permanent building;</span></li>
                    <li><span>Short installation time;</span>
                    </li>
                    <li><span>Huge bay window;</span>
                    </li>
                    <li><span>Small amount of excavation works does not change the natural landscape;</span></li>
                    <li><span>Neat appearance;</span>
                    </li>
                    <li><span>Frame can be made of wood or metal;</span></li>
                    <li><span>Can be equipped with all necessary utilities: water, electricity, heating, fireplace, air conditioning.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.glampDomesOffer}>
            <div>
              <img oncontextmenu="return false" className={styles.glampDomesOfferLeft} alt="metal framed dome" src="/content/metal-frame.jpg" />
              <div className={styles.price}>
                <p className={styles.cost}>€ 4,500</p>
                <p>Metal framed</p>
              </div>
            </div>
            <div>
              <img oncontextmenu="return false" className={styles.glampDomesOfferRight} alt="wooden framed dome" src="/content/wooden-frame.jpg" />
              <div className={`${styles.price} ${styles.priceRight}`}>
                <p className={styles.cost}>€ 10,800</p>
                <p>Wooden framed</p>
              </div>
            </div>
          </div>

          <div className={styles.glampDomesOfferFeatures}>
            <div className={styles.glampDomesOfferFeaturesItem}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/content/bathroom.png"
                alt="Glamping bathroom module"
              />
              <span>
                <h6>Bathroom (€3,500)</h6>
                <p>
          Ready-to-use module with toilet, wash basin, shower set, and a 50L
          electric boiler. Provides full comfort in a compact unit.
                </p>
              </span>
            </div>

            <div className={styles.glampDomesOfferFeaturesItem}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/content/floor.png"
                alt="Glamping floor module"
              />
              <span>
                <h6>Floor (€2,800)</h6>
                <p>
          Set of drawings and instructions. Optionally, our specialist can carry
          out all related work at your location.
                </p>
              </span>
            </div>

            <div className={styles.glampDomesOfferFeaturesItem}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/content/insulation.png"
                alt="Insulation set"
              />
              <span>
                <h6>Insulation (€1,800)</h6>
                <p>
          High-quality insulation set with reflective foil layer. Keeps warmth in
          winter and coolness in summer.
                </p>
              </span>
            </div>

            <div className={styles.glampDomesOfferFeaturesItem}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/content/door.png"
                alt="PVC door"
              />
              <span>
                <h6>Door (€1,200)</h6>
                <p>
          Standard PVC door with secure lock. Ensures comfort, safety, and proper
          insulation for the dome.
                </p>
              </span>
            </div>

            <div className={styles.glampDomesOfferFeaturesItem}>
              <img
                onContextMenu={(e) => e.preventDefault()}
                src="/content/curtains.png"
                alt="Curtains"
              />
              <span>
                <h6>Curtains (incl.)</h6>
                <p>
          Fire-retardant curtains included. They add coziness and improve thermal
          insulation for the bay window.
                </p>
              </span>
            </div>
          </div>

          <span className={styles.dots}></span>

          <ImageGallery images={images} />

          <div className={styles.investment}>
            <video
              className={styles.glampDomesVideo}
              src="/content/winter-domes.mp4"
              type="video/mp4"
              muted
              playsInline
              controls
              controlsList="nodownload"
            >
              Your browser does not support the video tag.
            </video>

            <div className={styles.investDescription}>
              <h2>For Investors:</h2>
              <p>
We can take care of the all aspects of you glamping business - from the concept design to cottages finishing and visibility in the internet.
Only three months for the glamping place establishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinterDome;
