export const ShowTask = ({ taskList, setTaskList, setTask, inputRef }) => {
  function handleEdit(id) {
    inputRef.current.focus();
    const selectedTask = taskList.find((curr) => curr.id === id);
    setTask(selectedTask);
  }

  function handleDelete(id) {
    const updatedTaskList = taskList.filter((curr) => curr.id !== id);
    setTaskList(updatedTaskList);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          onClick={() => setTaskList([])}
          className="clearAll"
          type="button"
        >
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((task) => {
          const { id, name, time } = task;
          return (
            <li key={id}>
              <p>
                <span className="name">{name}</span>
                <span className="time">{time}</span>
              </p>
              <i
                onClick={() => handleEdit(id)}
                className="bi bi-pencil-square"
              ></i>
              <i onClick={() => handleDelete(id)} className="bi bi-trash"></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
