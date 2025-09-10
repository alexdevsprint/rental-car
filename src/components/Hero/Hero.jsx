import css from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.desc}>Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog" className={css.viewCatalogLink} >View Catalog</Link>
    </div>
  );
}
