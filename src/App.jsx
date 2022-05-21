import { StateContextProvider } from "./state";
import LeftSidebar from "./components/LeftSidebar";
import NewsList from "./components/NewsList";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="container">
      <StateContextProvider>
        <div id="layout">
          <LeftSidebar />
          <NewsList />
          <RightSidebar />
        </div>
      </StateContextProvider>
    </div>
  );
}

export default App;
