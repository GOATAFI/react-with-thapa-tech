import React from "react";

export const EventHandling = () => {
  const handleButtonClick = () => {
    alert("Hey I am on click event");
  };
  const handleWelcomeUser = (user) => {
    alert(`Welcome back , ${user}`);
  };
  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <button onClick={() => handleButtonClick()}>Click Me 2</button>
      <br />
      <button onClick={() => alert("This is button 3")}>Click Me 3</button>
      <br />
      <button onClick={() => handleWelcomeUser("Mafi")}>Click Me 4</button>
      <br />
    </>
  );
};
