import React from "react";

export const EventPropagation = () => {
  const handleGrandpa = () => {
    console.log("Grandpa clicked");
  };
  const handleParent = () => {
    console.log("Parent Clicked");
  };
  const handleChild = (event) => {
    event.stopPropagation();
    console.log("Child Clicked");
  };
  return (
    <div>
      <div className="grandpa border-red-100" onClickCapture={handleGrandpa}>
        <div className="parent border-blue-100" onClickCapture={handleParent}>
          <div className="child border-black" onClickCapture={handleChild}>
            Child Div
          </div>
        </div>
      </div>
    </div>
  );
};
