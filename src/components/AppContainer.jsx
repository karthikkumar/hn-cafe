/** @jsxImportSource @emotion/react */
import Providers from "../Providers";
import NewsList from "./NewsList";
import { Color } from "../utils/css-vars";

function AppContainer() {
  return (
    <div
      css={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: Color.darkBlue,
      }}
    >
      <Providers>
        <NewsList />
      </Providers>
    </div>
  );
}

export default AppContainer;
