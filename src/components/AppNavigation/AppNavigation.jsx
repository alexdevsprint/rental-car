import css from "./AppNavigation.module.css";
import { NavLink } from "react-router-dom";

export default function AppNavigation() {
  return (
    <nav className={css.nav}>
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.active}` : css.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.active}` : css.navLink
          }
        >
          Catalog
        </NavLink>
    </nav>
  );
}
