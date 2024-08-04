export const ProfileCard = ({ name, age, greetings, children }) => {
  return (
    <>
      <h2>Name : {name}</h2>
      <p>Age :{age} </p>
      <p>{greetings}</p>
      <div>{children}</div>
    </>
  );
};
