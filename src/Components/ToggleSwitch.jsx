import { useState } from "react";

export const ToggleSwitch = () => {
  const [state, setState] = useState(false);
  console.log(state);

  return (
    <div
      className={`w-44 h-14 rounded-full flex items-center cursor-pointer ${
        state ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={() => setState(!state)}
    >
      <div
        className={`w-20 h-10 rounded-full text-white font-bold flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
          state ? "translate-x-full bg-green-900" : "translate-x-0 bg-red-900"
        }`}
      >
        {state ? "On" : "Off"}
      </div>
    </div>
  );
};
