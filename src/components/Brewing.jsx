import { Color } from "../utils/css-vars";

function Brewing() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: Color.yellow,
        backgroundColor: Color.darkBlue,
        fontSize: "2rem",
      }}
    >
      Brewing...
    </div>
  );
}

export default Brewing;
