/** @jsxImportSource @emotion/react */

import { Color, Font } from "../utils/css-vars";

const Error = () => {
  return (
    <div
      css={{
        position: "relative",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "top",
        fontFamily: Font.news,
        fontSize: "1rem",
        color: Color.yellow,
        margin: "0 2rem",
      }}
    >
      <p>WHOOPS, quakers!</p>
    </div>
  );
};

export default Error;
