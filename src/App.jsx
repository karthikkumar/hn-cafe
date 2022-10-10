import { lazy, Suspense } from "react";

import AppLoading from "./components/AppLoading";

const AppContainer = lazy(() => import("./components/AppContainer"));

function App() {
  return (
    <Suspense fallback={<AppLoading />}>
      <AppContainer />
    </Suspense>
  );
}

export default App;
