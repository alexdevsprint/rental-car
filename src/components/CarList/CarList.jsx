import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";

export default function CarList({ cars }) {
  if (!Array.isArray(cars)) {
    console.warn("CarList: 'cars' is not an array", cars);
    return null;
  }
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
