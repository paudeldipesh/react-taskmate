import { useEffect, useRef, useState } from "react";
import { Header, AddTask, ShowTask } from "./components";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        inputRef={inputRef}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        setTask={setTask}
        inputRef={inputRef}
      />
    </div>
  );
};

export default App;
