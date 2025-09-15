import css from "./DetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarById } from "../../redux/cars/operations";
import { selectSelectedCar, selectIsLoading } from "../../redux/cars/selectors";
import { clearSelectedCar } from "../../redux/cars/slice";

import Loader from "../../components/Loader/Loader";

import BookForm from "../../components/BookForm/BookForm";

export default function DetailsPage() {
  const { id } = useParams(); // отримуєм :id з URL
  const dispatch = useDispatch();

  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));

    return () => {
      dispatch(clearSelectedCar());
    };
  }, [dispatch, id]);

  if (isLoading || !car) {
    return <Loader />;
  }

  const {
    brand,
    model,
    year,
    img,
    description,
    rentalPrice,
    address,
    type,
    rentalCompany,
    rentalConditions,
    mileage,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
  } = car;

  const addressParts = address.split(",").map((part) => part.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  return (
    <div className={`${css.wrapper} container`}>
      <div>
        <img className={css.img} src={img} alt={`${brand} ${model}`} />
        <BookForm />
      </div>
      <div className={css.allDescWrapper}>
        <h1 className={css.title}>
          {brand} {model}, {year}
        </h1>
        <p className={css.adress}>
          <svg className={css.icon} width="16" height="16">
            <use href="/images/sprite.svg#icon-location"></use>
          </svg>
          <span>
          {city}, {country} Mileage:{" "}
          {`${mileage}`.slice(0, 1) + " " + `${mileage}`.slice(1)} km
          </span>
        </p>
        <p className={css.price}>${rentalPrice} </p>
        <p className={css.desc}>{description}</p>

        <div className={css.descWrapper}>
          <div>
            <h3 className={css.titleList}>Rental Conditions:</h3>
            <ul className={css.list}>
              {rentalConditions?.map((item, index) => (
                <li key={index}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/images/sprite.svg#icon-check-circle"></use>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={css.titleList}>Car Specifications:</h3>
            <ul className={css.list}>
              <li>
                <svg className={css.icon} width="16" height="16">
                  <use href="/images/sprite.svg#icon-calendar"></use>
                </svg>
                <span>Year: {year}</span>
              </li>
              <li>
                <svg className={css.icon} width="16" height="16">
                  <use href="/images/sprite.svg#icon-car"></use>
                </svg>
                <span>Type: {type}</span>
              </li>
              <li>
                <svg className={css.icon} width="16" height="16">
                  <use href="/images/sprite.svg#icon-fuel-pump"></use>
                </svg>
                <span>Fuel Consumption: {fuelConsumption}</span>
              </li>
              <li>
                <svg className={css.icon} width="16" height="16">
                  <use href="/images/sprite.svg#icon-gear"></use>
                </svg>
                <span>Engine Size: {engineSize}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={css.titleList}>Accessories and functionalities:</h3>
            <ul className={css.list}>
              {accessories?.map((item, index) => (
                <li key={index}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/images/sprite.svg#icon-check-circle"></use>
                  </svg>
                  <span> {item}</span>
                </li>
              ))}
              {functionalities?.map((item, index) => (
                <li key={index}>
                  <svg className={css.icon} width="16" height="16">
                    <use href="/images/sprite.svg#icon-check-circle"></use>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
