import Banner from "../components/banner/Banner";
import styles from "./Greenhouse.module.scss";

const Greenhouse = () => {
  return (
    <div>
      <Banner bannerUrl="/slideshow/gh_banner.jpg" />

      <div
        className={styles.pageWrap}
        itemScope
        itemType="http://schema.org/Article"
      >
        <meta itemProp="inLanguage" content="en-GB" />

        <div className={styles.pageHeader}>
          <h1 itemProp="name">EcoDome Greenhouse</h1>
        </div>

        <div itemProp="articleBody">
          <p className={styles.thesisXs}>
            <i>
              “The food you eat can be either the safest and most powerful form
              of medicine or the slowest form of poison.”
            </i>
            <br />– Ann Wigmore
          </p>

          <div className={styles.container}>
            <div className={styles.row}>
              <div>
                <h3>Features of EcoDome Greenhouse:</h3>
                <ul className={styles.listGr}>
                  <li><span>Robust and durable structure, even in harsh climates</span></li>
                  <li><span>
                    Energy efficiency — minimal heat loss thanks to the
                    spherical shape</span>
                  </li>
                  <li><span>
                    Perfect aerodynamics — air moves freely and evenly inside
                    the dome</span>
                  </li>
                  <li><span>Easy to assemble and operate</span></li>
                  <li><span>
                    Surprisingly spacious growing area despite compact exterior</span>
                  </li>
                  <li><span>Modern and attractive appearance</span></li>
                </ul>
              </div>

              <div>
                <img
                  onContextMenu={(e) => e.preventDefault()}
                  alt="EcoDome greenhouse"
                  src="/content/greenhouse-d6_f.jpg"
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.description}`}>
              <div className={styles.text}>
                <p>
                  Why choose a geodesic dome greenhouse instead of a regular
                  rectangular one?  
                  First of all, it has a clean, modern look that enhances any
                  backyard landscape.  
                  More importantly, the unique geodesic shape provides multiple
                  functional advantages over traditional designs.  
                  With modern automation, our domes handle most routine
                  greenhouse tasks, making gardening enjoyable and effortless.
                </p>
                <p>
                  The EcoDome Kit is specially designed for easy DIY assembly.
                  It comes with detailed step-by-step instructions — like
                  building a giant Lego set!
                </p>
                <p>
                  EcoDome Greenhouse is not just a place to grow healthy
                  vegetables — it’s also an eye-catching structure that enhances
                  your garden and provides a peaceful space for relaxation.
                </p>

                <img
                  onContextMenu={(e) => e.preventDefault()}
                  alt="geodesic dome greenhouse kit"
                  src="/content/greenhouse_d6.jpg"
                />
              </div>

              <div>
                <h3>Kit includes:</h3>
                <ul>
                  <li>Framework made of solid, bio-protected wood</li>
                  <li>
                    High-quality polycarbonate panels or
                    polypropylene-coated fabric
                  </li>
                  <li>Durable greenhouse film</li>
                  <li>Hubs and connectors</li>
                  <li>Entrance door</li>
                  <li>Two automatic opening window vents</li>
                  <li>Bolts and nuts</li>
                  <li>Four additional opening windows</li>
                  <li>Step-by-step assembly instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greenhouse;
