import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
      </section>
    </>
  );
};
