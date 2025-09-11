import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const cars = useSelector(selectCars);

  return (
    <div className={`container`}>
      <h1>Catalog</h1>
      <Loader />
    </div>
  );
}
