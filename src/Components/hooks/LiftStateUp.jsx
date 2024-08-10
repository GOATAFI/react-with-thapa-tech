import { useState } from "react";
export const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  //   const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your name"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>Here is : {inputValue} </p>;
};
