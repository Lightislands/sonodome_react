import { NavLink, Outlet } from "react-router-dom";
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/greenhouse"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Greenhouse
        </NavLink>
        <NavLink
          to="/winterDome"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          WinterDome
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default MainMenu;
