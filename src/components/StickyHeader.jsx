/** @jsxImportSource @emotion/react */

import { Color, Font } from "../utils/css-vars";

const StickyHeader = ({ title }) => {
  return (
    <div
      css={{
        color: Color.yellow,
        fontFamily: Font.news,
        fontSize: "0.9rem",
        textAlign: "start",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-around",
        position: "sticky",
        top: "0px",
        zIndex: 1,
        backgroundColor: Color.darkBlue,
        height: "1.2rem",
      }}
    >
      <span
        css={{
          height: "1px",
          width: "100%",
          backgroundColor: Color.yellowLite,
          margin: "0.6rem",
        }}
      ></span>
      <p css={{ flexShrink: 0 }}>{title}</p>
    </div>
  );
};

export default StickyHeader;
