import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrap}>
      <p>© {currentYear} All rights reserved.</p>
    </footer>
  )
};

export default Footer;