import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "./styles/theme-transition.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            gcTime: 3_600_000, // Unused/inactive query entries will be garbage collected after 60 minutes
            staleTime: 90_000, // Fetched data remains fresh for 90 seconds before becoming stale
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider disableTransitionOnChange={false}>
                <App/>
                <ReactQueryDevtools initialIsOpen={false} />
            </Provider>
        </QueryClientProvider>
    </StrictMode>,
);
