import "./App.css";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";

function App() {
  return (
    <>
      {/* <NetflixCards /> */}
      {/* <Practices />
      <Profile /> */}
      <EventHandling />
      <EventProps />
      <EventPropagation />
    </>
  );
}

export default App;
