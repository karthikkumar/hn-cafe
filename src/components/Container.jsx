/** @jsxImportSource @emotion/react */
import LeftSidebar from "./LeftSidebar";
import NewsList from "./NewsList";
import { Color } from "../utils/css-vars";
import { useStateContext } from "../state";

function Container() {
  const { refreshKey } = useStateContext();

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
          backgroundColor: Color.darkBlue,
          minHeight: "calc(100vh - 1rem)",
          margin: "0.5rem auto",
          display: "grid",
          gridTemplateColumns: "3fr 7fr",
        }}
      >
        <LeftSidebar />
        <NewsList key={refreshKey} />
      </div>
    </div>
  );
}

export default Container;
