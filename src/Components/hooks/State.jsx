import { useState } from "react";
export const State = () => {
  //   let value = 0;
  //   const handleButtonClick = () => {
  //     value++;
  //     console.log(value);
  //   };
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  console.log("Parent Compo");
  return (
    <>
      <div>
        <h1 className="text-5xl">{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent />
    </>
  );
};

export function ChildComponent() {
  console.log("Child Compo");
  return (
    <>
      <h1>Child Compo</h1>
    </>
  );
}
