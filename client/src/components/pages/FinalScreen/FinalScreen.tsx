import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAccount } from "@starknet-react/core";
import { useNavigate } from "react-router-dom";
import { CURRENT_EXERCISE } from "../../../constants/localStorage";
import { Logo } from "../../shared/Logo";
import { WalletConnector } from "../../starknet/WalletConnector";

export const FinalScreen = () => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();

  const handleClick = () => {
    localStorage.removeItem(CURRENT_EXERCISE);
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
          zIndex: 1000,
        }}
      >
        <Typography sx={{ textAlign: "center", lineHeight: 1.6, mt: 2 }}>
          You are a Cairo rockstar! <br />
          Thank you for completing starklings. <br />
          <br />
          We have a gift for you ;) <br />
          {!address &&
            "Connect your wallet to claim an NFT that proves you have completed starklings.app successfully"}
          <Box
            sx={{
              mt: 2,
              mb: 6,
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <WalletConnector />
            {address && (
              <Button sx={{ px: 5, zIndex: 999 }} variant="contained" color="success">
                Claim your starklings NFT
              </Button>
            )}
          </Box>
          Do you have any feedback for us?{" "}
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <IconButton
              href={"https://twitter.com/starklingsapp"}
              target="_blank"
              sx={{ ml: 1, p: 0.5, color: "#FFF" }}
              aria-label="start-over"
            >
              <XIcon />
            </IconButton>
            <IconButton
              href={"https://github.com/dpinones/starklings-app"}
              target="_blank"
              sx={{ ml: 1, p: 0.5, color: "#FFF" }}
              aria-label="start-over"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          This is the end of the way... <br /> but you can always go for a
          second round XD
        </Typography>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          opacity: 0.3,
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Logo text={"congratulations!"} fontSize="12.3vw" />
      </Box>
    </>
  );
};
