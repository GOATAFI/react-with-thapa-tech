import { useState } from "react";
export const ToggleSwitch = () => {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <>
      <div className="border-2 border-red-700 w-44 h-14 rounded-md flex">
        {state === true ? (
          <div onClick={() => setState(!state)} className="pr-16 pl-4">
            On
          </div>
        ) : (
          <div onClick={() => setState(!state)} className="pl-8">
            Off
          </div>
        )}
      </div>
    </>
  );
};
