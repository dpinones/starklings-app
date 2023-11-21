import Box from "@mui/material/Box";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PocApp } from "./components/poc/PocApp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ backgroundColor: "#242424", color: "#FFF" }}>
        <Box sx={{ p: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poc" element={<PocApp />} />
          </Routes>
        </Box>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
