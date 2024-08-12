import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const handleInputChange = (value) => {
    setInputValue(value);
  };
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
  return (
    <>
      <h1>TODO LIST</h1>
      <section>
        <form className="flex" onSubmit={handleFormSubmit}>
          <div>
            <input
              className="border-2 border-black "
              type="text"
              name=""
              id=""
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
        <ul>
          {task.map((curTask, i) => {
            return (
              <li key={i}>
                <span>{curTask}</span>
                <button>
                  <MdDeleteForever className="w-10 h-6" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
