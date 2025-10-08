import { Outlet } from "react-router-dom";
import styles from './App.module.scss'
import Header from "./components/header/Header";
import MainMenu from "./components/main-menu/MainMenu";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainWrap}>
        <Header />
      </div>
      <div className={styles.borders}>
        <div className={styles.mainWrap}>
          <MainMenu />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
