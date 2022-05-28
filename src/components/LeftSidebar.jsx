/** @jsxImportSource @emotion/react */
import Filter from "./Filter";
import { Color } from "../utils/css-vars";

// images
import mug from "../img/mug@2x.png";

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
            width: "44px",
            alignItems: "flex-end",
            backgroundColor: Color.transparent,
            border: 0,
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          <img src={mug} alt="coffee mug icon" width={28} />
        </button>
      </div>
    </aside>
  );
}

export default LeftSidebar;
