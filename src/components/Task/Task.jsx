import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
