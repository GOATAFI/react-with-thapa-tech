import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";
export const Todo = () => {
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  //todo date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //todo delete functionalities
  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  const handleClearAll = () => {
    setTask([]);
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <h2>{dateTime}</h2>
      <section>
        <TodoForm />
        <ul>
          {task.map((curTask, i) => {
            return (
              <li key={i}>
                <span>{curTask}</span>
                <button onClick={() => handleDeleteTodo(curTask)}>
                  <MdDeleteForever className="w-10 h-6" />
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={handleClearAll}>Clear All</button>
      </section>
    </>
  );
};
