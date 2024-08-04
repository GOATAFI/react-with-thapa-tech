import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="Bob"
        age={24}
        greetings={
          <div>
            <strong>Hello Bob, Keep up the great work</strong>
          </div>
        }
      >
        <p>Hobbies : Gaming,Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};
