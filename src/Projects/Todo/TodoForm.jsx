import { useState } from "react";
export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div>
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
    </div>
  );
};
