import LeftSidebar from "./components/LeftSidebar";
import NewsList from "./components/NewsList";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="container">
      <div id="layout">
        <LeftSidebar />
        <NewsList />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
