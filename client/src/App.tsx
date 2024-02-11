import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { useNotification } from "./components/hooks/useNotification";
import { BasicLayout } from "./components/layout/BasicLayout";
import { FinalScreen } from "./components/pages/FinalScreen/FinalScreen";
import { Home } from "./components/pages/Home/Home";
import { Workspace } from "./components/pages/Workspace/Workspace";
import { PocApp } from "./components/poc/PocApp";

const NAV_HEIGHT = "50px";

function App() {
  const { showError } = useNotification();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        showError(error.message);
      },
    }),
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <BasicLayout>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/poc" element={<PocApp />} />
              <Route path="/exercise/:id" element={<Workspace />} />
              <Route path="/end" element={<FinalScreen />} />
            </Routes>
            <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
              <Typography sx={{ mb: 1, mr: 2, fontSize: 13, color: "#b0b0b0" }}>
                powered by Starknet Foundation
              </Typography>
            </Box>
          </>
        </BasicLayout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
