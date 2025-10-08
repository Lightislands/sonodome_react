import Banner from '../components/banner/Banner'
import Slideshow from '../components/slideshow/Slideshow'
import styles from './DomeKits.module.scss'

const images = [
  "/slideshow/steps/b1_geodome.jpg",
  "/slideshow/steps/b2_geodome.jpg",
  "/slideshow/steps/b3_geodome.jpg",
  "/slideshow/steps/b4_geodome.jpg",
  "/slideshow/steps/b5_geodome.jpg"
];

const DomeKits = () => {
  return (
    <>
      <Banner bannerUrl="/banner/framework.jpg" />
      <div
        className={styles.pageWrap}
        itemScope
        itemType="http://schema.org/Article"
      >
        <meta itemProp="inLanguage" content="en-GB" />

        <div className={styles.pageHeader}>
          <h1 itemProp="name">Dome kit</h1>
        </div>
        <div className={styles.container} itemProp="articleBody">
          <div>
            <h3>Geodesic dome kits from 5 to 16m diameters</h3>  
            <br />
          If you want to create a building that blends harmoniously with the environment, or you simply like the idea of living in a dome house you built yourself, our geodesic dome frameworks are a great choice to bring your vision to life.
            <br />
            <span className={styles.thesis}>Each kit comes with clear, step-by-step instructions for self-assembly, making it possible for anyone to build their own Dome Home.</span>
            <br /><br /><br />
          </div>

          <div className={styles.row}>
            <div className={styles.text}>
              <p>
                Our standard Dome Kit gives you everything you need for easy self-assembly, but we can also design and manufacture a customized kit based on your specific requirements. Whether you need a greenhouse, a glamping dome, a winter dome, or even a unique structure for events or exhibitions, we can adapt the framework, materials, and interior features to suit your project.
              </p>
              <p>
                With detailed instructions and support, assembling your dome becomes a straightforward process — and the result is a durable, eye-catching structure that reflects your needs and creativity.
              </p>
            </div>
            <img
              className={styles.winterDomeImg}
              onContextMenu={(e) => e.preventDefault()}
              alt="dome kit"
              src="/content/domekit.jpg"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.slideshow}>
              <Slideshow images={images} interval={3000}/>
            </div>
            <img
              className={styles.domeHome}
              onContextMenu={(e) => e.preventDefault()}
              alt="dome home"
              src="/content/ahome.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default DomeKits;
