import { QueryClient, QueryClientProvider } from "react-query";
import { StateContextProvider } from "./state";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <StateContextProvider>{children}</StateContextProvider>
    </QueryClientProvider>
  );
}

export default Providers;
