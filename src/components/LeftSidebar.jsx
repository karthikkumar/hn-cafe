import Filter from "./Filter";

function LeftSidebar() {
  return (
    <aside id="sidebar-left">
      <Filter />
      <div id="bottom">
        <div id="settings">
          <a href="#">Settings</a>
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
