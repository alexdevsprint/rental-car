import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../../redux/filters/operations";
import {
  selectBrands,
  selectBrandsLoading,
  selectSelectedBrand,
  selectSelectedPrice,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors";
import {
  setSelectedBrand,
  setSelectedPrice,
  setMileageFrom,
  setMileageTo,
} from "../../redux/filters/slice";

import { resetCatalog } from "../../redux/cars/slice";
import { fetchCars } from "../../redux/cars/operations";

import css from "./Filter.module.css";
import Select from "react-select";

export default function Filter() {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const isLoadingBrands = useSelector(selectBrandsLoading);

  const selectedBrand = useSelector(selectSelectedBrand);
  const selectedPrice = useSelector(selectSelectedPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = [30, 40, 50, 60, 70, 80].map((price) => ({
    value: price,
    label: price.toString(),
  }));

  const selectStyles = {
    control: (base) => ({
      ...base,
      border: "none",
      borderRadius: "12px",
      width: "204px",
      height: "44px",
      backgroundColor: "#f7f7f7",
      boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      paddingLeft: "16px",
      paddingRight: "5px",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#fff",
      zIndex: 10, // чтобы меню не пряталось за другими элементами
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#eee" : "#fff",
      color: "#000",
      cursor: "pointer",
    }),
  };

  const handleSearch = () => {
    dispatch(resetCatalog());
    dispatch(
      fetchCars({
        page: 1,
        brand: selectedBrand?.value,
        price: selectedPrice?.value,
        minMileage: mileageFrom,
        maxMileage: mileageTo,
      })
    );
  };

  return (
    <div className={css.container}>
      <div className={css.fiterWrapper}>
        <label htmlFor="brand-select">Car brand</label>
        <Select
          className={css.brand}
          placeholder="Choose a brand"
          styles={selectStyles}
          options={brandOptions}
          isLoading={isLoadingBrands}
          isDisabled={isLoadingBrands}
          onChange={(option) => dispatch(setSelectedBrand(option))}
          value={selectedBrand}
        />
      </div>

      <div className={css.fiterWrapper}>
        <label htmlFor="price-select">Price/ 1 hour</label>
        <Select
          className={css.price}
          placeholder="Choose a price"
          styles={selectStyles}
          options={priceOptions}
          onChange={(option) => dispatch(setSelectedPrice(option))}
          value={selectedPrice}
        />
      </div>
      <div className={css.fiterWrapper}>
        <label htmlFor="from-input">Сar mileage / km</label>
        <div className={css.inputContainer}>
          <input
            className={css.from}
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => dispatch(setMileageFrom(e.target.value))}
          />
          <input
            className={css.to}
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => dispatch(setMileageTo(e.target.value))}
          />
        </div>
      </div>

      <button className={css.btn} type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
