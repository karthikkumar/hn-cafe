/** @jsxImportSource @emotion/react */
import Filter from "./Filter";
import { Color } from "./css-vars";

// images
import mug from "../img/mug.png";

function LeftSidebar() {
  return (
    <aside
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: `1px solid ${Color.blueLite}`,
      }}
    >
      <Filter />
      <div
        css={{
          display: "flex",
          flexDirection: "row-reverse",
          padding: "0 2rem",
        }}
      >
        <button
          css={{
            width: "40px",
            alignItems: "flex-end",
            backgroundColor: Color.transparent,
            border: 0,
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          <img src={mug} alt="coffee mug icon" width={24} />
        </button>
      </div>
    </aside>
  );
}

export default LeftSidebar;
