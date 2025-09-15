import css from "./CarCard.module.css";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const addressParts = address.split(",").map((part) => part.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  return (
    <div className={css.card}>
      <img className={css.img} src={img} alt={`${brand} ${model}`} />
      <h3 className={css.title}>
        <span>
          {brand} <span className={css.titleModel}>{model}</span>, {year}
        </span>
        <span>{rentalPrice}$</span>
      </h3>
      <ul className={css.listCity}>
        <li>{city} </li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
      </ul>
      <ul className={css.listType}>
        <li>{type}</li>
        <li>
          {`${mileage}`.slice(0, 1) + " " + `${mileage}`.slice(1)} km
        </li>
      </ul>

      <Link to={`/catalog/${id}`} className={css.btn}>Read more</Link>
    </div>
  );
}
