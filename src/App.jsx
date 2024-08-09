import "./App.css";
import { DerivedState } from "./Components/DerivedState";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";
import { State } from "./Components/hooks/State";

function App() {
  return (
    <>
      {/* <NetflixCards /> */}
      {/* <Practices />
      <Profile /> */}
      <EventHandling />
      <EventProps />
      <EventPropagation />
      <State />
      <DerivedState />
    </>
  );
}

export default App;
