import { WelcomeUser } from "./WelcomeUser";

export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey thanks for visiting ${user}`);
  };
  const handleHover = () => {
    alert("Hovering hoccheee");
  };
  return (
    <div>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Mafi")}
        onMouseEnter={handleHover}
      />
    </div>
  );
};
