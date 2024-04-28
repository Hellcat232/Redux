import { Button } from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { useSelector } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
