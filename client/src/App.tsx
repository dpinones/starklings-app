import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { FinalScreen } from "./components/pages/FinalScreen/FinalScreen";
import { Home } from "./components/pages/Home/Home";
import { Workspace } from "./components/pages/Workspace/Workspace";
import { PocApp } from "./components/poc/PocApp";

const queryClient = new QueryClient();

const NAV_HEIGHT = "50px";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ height: "100%", backgroundColor: "#242424", color: "#FFF" }}>
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              height: NAV_HEIGHT,
              zIndex: 1000,
              width: "100%",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, ml: 2}}>
              <img width="27px" src="starknet.png" alt="starknet logo" />
              <Link sx={{ textDecoration: "none" }} href="/">
                <Typography
                  variant="h3"
                  sx={{ fontSize: 20, color: "#FFF" }}
                >
                  starklings.app
                </Typography>
              </Link>
            </Box>
            <IconButton
              href={"https://github.com/dpinones/starklings-app"}
              target="_blank"
              sx={{ p: 0.5, color: "#FFF", mr: 2 }}
              aria-label="start-over"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box sx={{ height: "calc(100% - 50px)" }}>
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
          </Box>
        </Box>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
