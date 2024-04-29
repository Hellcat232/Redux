import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";
import { getStatusFilter } from "../../redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.all);
        }}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.active);
        }}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => {
          handleFilterChange(statusFilters.completed);
        }}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
