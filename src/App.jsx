import { lazy, Suspense } from "react";

import Brewing from "./components/Brewing";

const AppContainer = lazy(() => import("./components/AppContainer"));

function App() {
  return (
    <Suspense fallback={<Brewing />}>
      <AppContainer />
    </Suspense>
  );
}

export default App;
