/** @jsxImportSource @emotion/react */
import LeftSidebar from "./LeftSidebar";
import NewsList from "./NewsList";
import { Color } from "./css-vars";

function Container() {
  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        backgroundColor: Color.darkBlue,
        overflowY: "auto",
      }}
    >
      <div
        css={{
          minHeight: "96vh",
          margin: "0.5rem auto",
          display: "grid",
          gridTemplateColumns: "3fr 7fr",
        }}
      >
        <LeftSidebar />
        <NewsList />
      </div>
    </div>
  );
}

export default Container;
