import { createContext, useContext, useState } from "react";

const StateContext = createContext();

function StateContextProvider(props) {
  const [top, setTop] = useState("5");
  const [showedLastVisitedOnce, setShowedLastVisitedOnce] = useState(false);
  return (
    <StateContext.Provider
      value={{ top, setTop, showedLastVisitedOnce, setShowedLastVisitedOnce }}
      {...props}
    />
  );
}

const useStateContext = () => useContext(StateContext);

export { StateContextProvider, useStateContext };
