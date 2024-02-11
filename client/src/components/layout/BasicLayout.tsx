import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";


const NAV_HEIGHT = "50px";

interface IBasicLayoutProps {
    children: JSX.Element
}
export const BasicLayout = ({children}: IBasicLayoutProps) => {
return (
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
        <Box
          sx={{ display: "flex", flexDirection: "row", gap: 2, ml: 2 }}
        >
          <img width="27px" src="/starknet.png" alt="starknet logo" />
          <Link sx={{ textDecoration: "none" }} href="/">
            <Typography variant="h3" sx={{ fontSize: 20, color: "#FFF" }}>
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
        {children}
      </Box>
    </Box>
  </Box>
)
}