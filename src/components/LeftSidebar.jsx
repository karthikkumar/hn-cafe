/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Filter from "./Filter";
import { Color } from "../utils/css-vars";
import Settings from "./Settings";

// images
import mug from "../img/mug.png";

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
          position: "sticky",
          top: 0,
          left: 0,
          width: "calc(100vw/4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: `2px solid ${Color.blueLite}`,

          "@media (max-width: 1200px)": {
            width: "calc(100vw/8)",
          },

          "@media (max-width: 900px)": {
            flexDirection: "row",
            position: "fixed",
            width: "100vw",
            top: "unset",
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: "60px",
            backgroundColor: Color.darkBlue,
            borderTop: `2px solid ${Color.blueLite}`,
            borderRight: 0,
          },

          "@media (max-width: 500px)": {
            height: "50px",
          },
        }}
      >
        <Filter />
        <div
          css={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "0 2rem",

            "@media (max-width: 900px)": {
              padding: "0 1rem",
            },

            "@media (max-width: 500px)": {
              padding: "0 0.5rem",
            },
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

              "@media (max-width: 900px)": {
                padding: "0.6rem",
              },

              "@media (max-width: 500px)": {
                padding: "0.4rem",
              },
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

                "@media (max-width: 900px)": {
                  width: "24px",
                },

                "@media (max-width: 500px)": {
                  width: "22px",
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
