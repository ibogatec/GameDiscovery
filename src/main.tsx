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
            gcTime: 120_000, // Query object in the cache will be garbage collected after 2 minutes of inactivity
            staleTime: 30_000, // Query object in the cache will be considered stale after 30 seconds of inactivity
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
