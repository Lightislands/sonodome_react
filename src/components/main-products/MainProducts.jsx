import { useNavigate } from "react-router-dom";
import styles from "./MainProducts.module.scss";

const MainProducts = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainProductsWrap}>
      <div onClick={() => navigate("/greenhouse")} className={styles.productIcons}>
        <span className={styles.dots}></span>
        <div className={styles.effectHoney}>
          <img
            onContextMenu={(e) => e.preventDefault()}
            src="/content/greenhouse_ico.jpg"
            alt="Dome Greenhouse"
          />
          <div className={styles.figcaption}>
            <h2>
              Dome <span>Greenhouse</span> <i>| Read more<span className={styles.arrows}>&gt;&gt;</span></i>
            </h2>
          </div>
          <div className={styles.underline}></div>
        </div>
      </div>
      <div onClick={() => navigate("/winterdome")} className={styles.productIcons}>
        <span className={styles.dots}></span>
        <div className={styles.effectHoney}>
          <img
            onContextMenu={(e) => e.preventDefault()}
            src="/content/winterdome_ico.jpg"
            alt="Winter Dome"
          />
          <div className={styles.figcaption}>
            <h2>
              Winter <span>Dome</span> <i>| Read more<span className={styles.arrows}>&gt;&gt;</span></i>
            </h2>
          </div>
          <div className={styles.underline}></div>
        </div>
      </div>
    </div>
  );
};


export default MainProducts;
