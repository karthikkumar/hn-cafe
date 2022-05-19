function LeftSidebar() {
  return (
    <aside id="sidebar-left">
      <div id="top">
        <div id="filter">
          <div className="value current">05</div>
          <div className="value">10</div>
          <div className="value">20</div>
          <div className="value">30</div>
        </div>
      </div>

      <div id="bottom">
        <div id="settings">
          <a href="#">Settings</a>
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
