export const AddTask = ({ taskList, setTaskList, task, setTask, inputRef }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();
    if (task.id) {
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: todo.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
    }
    task.name = "";
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          ref={inputRef}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
