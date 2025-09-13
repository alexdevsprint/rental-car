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

import { setCurrentPage, resetCatalog } from "../../redux/cars/slice";

import CarList from "../../components/CarList/CarList";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);

  

  useEffect(() => {
    dispatch(resetCatalog());    
    
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
  };

  return (
    <div className={`${css.wrapper} container`}>
      {cars.length > 0 && <CarList cars={cars} />}
      {isLoading && <Loader />}
      {!isLoading && hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
