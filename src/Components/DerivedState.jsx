import { useState } from "react";
// const users = [];

export const DerivedState = () => {
  //   const persons = users.map((user) => {
  //     return (
  //       <li>
  //         {user.name} - {user.age}
  //       </li>
  //     );
  //   });
  const [user, setUser] = useState([
    { name: "Alice", age: 28 },
    { name: "Bob", age: 34 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 30 },
    { name: "Eve", age: 25 },
  ]);
  const userCount = user.length;
  const averageAge = user.reduce((acc, curr) => acc + curr.age, 0) / userCount;
  return (
    <>
      <h1 className="text-4xl text-blue-800">Users List</h1>
      <ul>
        {user.map((curElem, i) => {
          return (
            <li key={i}>
              {curElem.name} - {curElem.age}
            </li>
          );
        })}
      </ul>
      <h2>Average Age : {averageAge} </h2>
    </>
  );
};
