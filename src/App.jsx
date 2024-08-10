import "./App.css";
import { DerivedState } from "./Components/DerivedState";
import { EventHandling } from "./Components/EventHandling";
import { EventPropagation } from "./Components/EventPropagation";
import { EventProps } from "./Components/EventProps";
import { LiftStateUp } from "./Components/hooks/LiftStateUp";
import { State } from "./Components/hooks/State";
import { ToggleSwitch } from "./Components/ToggleSwitch";

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
      <LiftStateUp />
      <ToggleSwitch />
    </>
  );
}

export default App;
