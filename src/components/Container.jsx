import LeftSidebar from "./LeftSidebar";
import NewsList from "./NewsList";
import RightSidebar from "./RightSidebar";

function Container() {
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

export default Container;
