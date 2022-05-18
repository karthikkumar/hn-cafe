// images
import mug from "../img/mug.png";

function RightSidebar() {
  return (
    <aside id="sidebar-right">
      <div id="bottom">
        <div id="logo">
          <img src={mug} alt="coffee mug icon" />
          <div className="dash"></div>
          <h1>
            KOFFEE <br />
            NEWS
          </h1>
        </div>
        <div id="brewer">
          <small>brewed by</small>
          <br />
          <strong>HACKER NEWS</strong>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
