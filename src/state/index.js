import { createContext, useContext, useState } from "react";

const StateContext = createContext();

function StateContextProvider(props) {
  const [top, setTop] = useState("10");
  const [stickyHeader, setStickyHeader] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <StateContext.Provider
      value={{
        top,
        setTop,
        stickyHeader,
        setStickyHeader,
        refreshKey,
        setRefreshKey,
      }}
      {...props}
    />
  );
}

const useStateContext = () => useContext(StateContext);

export { StateContextProvider, useStateContext };
