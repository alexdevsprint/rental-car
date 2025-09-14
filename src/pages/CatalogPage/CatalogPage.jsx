import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/cars/operations";

import {
  selectCars,
  selectCurrentPage,
  selectIsLoading,
  selectHasMore,
} from "../../redux/cars/selectors";

import {
  selectSelectedBrand,
  selectSelectedPrice,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors";

import { setCurrentPage, resetCatalog } from "../../redux/cars/slice";

import CarList from "../../components/CarList/CarList";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Filter from "../../components/Filter/Filter";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);

  const selectedBrand = useSelector(selectSelectedBrand);
  const selectedPrice = useSelector(selectSelectedPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  useEffect(() => {
    dispatch(resetCatalog());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));

    dispatch(
      fetchCars({
        page: nextPage,
        brand: selectedBrand?.value,
        price: selectedPrice?.value,
        minMileage: mileageFrom,
        maxMileage: mileageTo,
      })
    );
  };

  return (
    <div className={`${css.wrapper} container`}>
      <Filter />
      {cars.length > 0 && <CarList cars={cars} />}
      {isLoading && <Loader />}
      {!isLoading && hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
