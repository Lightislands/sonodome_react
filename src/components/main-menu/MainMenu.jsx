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
          Winter Dome
        </NavLink>
        <NavLink
          to="/domekits"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Dome Kit
        </NavLink>
        <NavLink
          to="/eventdome"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Event Dome
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Gallery
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
