import React from "react";

export const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("Heyyyyy");
    props.onClick();
  };
  return (
    <div>
      <button onClick={props.onClick}>Click</button> <br />
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button> <br />
      <button onClick={handleGreeting}>Greeting</button>
    </div>
  );
};
