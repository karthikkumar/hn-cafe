import { StateContextProvider } from "./state";
import Container from "./components/Container";

function App() {
  return (
    <StateContextProvider>
      <Container />
    </StateContextProvider>
  );
}

export default App;
