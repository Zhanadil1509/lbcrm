import { ReactNode } from "react";
import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "shared/lib/react-query";
import { ToastContainer } from "react-toastify";

type QueryClientProviderProps = {
  children: ReactNode;
};

export function QueryClientProvider(props: QueryClientProviderProps) {
  const { children } = props;
  return (
    <TanStackQueryClientProvider client={queryClient}>
      <ToastContainer />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  );
}
