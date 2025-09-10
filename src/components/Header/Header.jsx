import css from "./Header.module.css";
import AppNavigation from "../AppNavigation/AppNavigation";
export default function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <AppNavigation />
      </div>
    </header>
  );
}
