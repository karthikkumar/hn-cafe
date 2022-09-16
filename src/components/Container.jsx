/** @jsxImportSource @emotion/react */
import NewsList from "./NewsList";
import { Color } from "../utils/css-vars";

function Container() {
  return (
    <div
      css={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: Color.darkBlue,
      }}
    >
      <NewsList />
    </div>
  );
}

export default Container;
