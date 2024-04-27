import { useSelector } from "react-redux";
import { Layout } from "../Layout/Layout";
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";

export const App = () => {
  const value = useSelector((state) => state.some.value);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
