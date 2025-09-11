import css from "./LoadMoreBtn.module.css"
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "../../redux/cars/slice"
import { selectCurrentPage } from "../../redux/cars/selectors";


export default function LoadMoreBtn() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const handleLoadMoreClick = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <button className={css.loadMoreBtn} type="button" onClick={handleLoadMoreClick} >
        Load more
    </button>
  );
}
