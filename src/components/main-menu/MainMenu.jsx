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
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          About
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
