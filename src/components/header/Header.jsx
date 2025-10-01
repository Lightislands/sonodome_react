import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import sonodomeLogo from '../../assets/sonodome.svg';
import facebook from '../../assets/facebook.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrap}>
        <nav>
          <Link to="/" className={styles.link}>
            <div className={styles.logo}>
              <img src={sonodomeLogo} alt="Logo" width={54} height={54} className={styles.logoImage} />
              <p className={styles.siteName}>Sonodome</p>
            </div>
          </Link>
        </nav>
        <p className={styles.logoTitle}>geodesic dome structures</p>
      </div>
      <a rel="nofollow" href="https://www.facebook.com/sonodome" target="_blank">
        <img src={facebook} alt="facebook" width={54} height={54} className={styles.facebookImage} />
      </a>
    </div>
  );
};

export default Header;
