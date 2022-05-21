import { createContext, useContext, useState } from "react";

const StateContext = createContext();

function StateContextProvider(props) {
  const [top, setTop] = useState("5");
  return <StateContext.Provider value={[top, setTop]} {...props} />;
}

const useStateContext = () => useContext(StateContext);

export { StateContextProvider, useStateContext };
