import { QueryClientProvider } from "./QueryClientProvider";
import { BrowserRouter } from "./RouterProvider";

export const Providers = () => {
  return (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  );
};
