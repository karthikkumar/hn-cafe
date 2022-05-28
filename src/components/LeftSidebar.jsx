/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Filter from "./Filter";
import { Color } from "../utils/css-vars";
import Settings from "./Settings";

// images
import mug from "../img/mug@2x.png";

function LeftSidebar() {
  const [isSettingsOpen, setIsSettingsopen] = useState(false);

  return (
    <>
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsopen(false)}
      />
      <aside
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: `2px solid ${Color.blueLite}`,
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
            onClick={() => setIsSettingsopen(true)}
          >
            <img
              src={mug}
              alt="coffee mug icon"
              css={{
                width: "28px",
                paddingBottom: "3px",
                borderBottom: `3px solid ${Color.transparent}`,
                ":hover": {
                  borderBottom: `3px solid ${Color.orange}`,
                },
              }}
            />
          </button>
        </div>
      </aside>
    </>
  );
}

export default LeftSidebar;
