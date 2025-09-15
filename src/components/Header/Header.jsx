import css from "./Header.module.css";
import AppNavigation from "../AppNavigation/AppNavigation";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={css.header}>
      <div className={`${css.wrapper} container`}>
        <Link to="/">
          <img className={css.logo} src="/images/logo.svg" alt="logo" />
        </Link>
        <AppNavigation />
      </div>
    </header>
  );
}
