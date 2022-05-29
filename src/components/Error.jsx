/** @jsxImportSource @emotion/react */

import { Color, Font } from "../utils/css-vars";

// images
import quakers from "../img/quakers@2x.png";

const Error = ({ style }) => {
  return (
    <div
      css={{
        position: "relative",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: Font.news,
        fontSize: "1rem",
        color: Color.yellow,
        margin: "0 2rem",
        height: "90vh",
        ...style,
      }}
    >
      <img src={quakers} alt="whoops, quakers!" width={48} />
      <p>Whoops, quakers!</p>
    </div>
  );
};

export default Error;
