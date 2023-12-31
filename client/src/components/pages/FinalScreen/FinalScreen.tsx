import { Box, Button, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CURRENT_EXERCISE } from "../../../constants/localStorage";
import { Logo } from "../../shared/Logo";

export const FinalScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem(CURRENT_EXERCISE);
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <Logo text={"congratulations!"} fontSize="12.3vw" />
      <Typography sx={{ textAlign: "center", lineHeight: 1.6, mt: 2 }}>
        You are a Cairo rockstar! <br />
        Thank you for completing starklings. <br />
        Do you have any feedback for us?{" "}
        <Link target="_blank" href="https://github.com/dpinones/starklings-app">
          GitHub
        </Link>{" "}
        <br /> <br />
        This is the end of the way... <br /> but you can always go for a second
        round XD
      </Typography>
      <Button
        onClick={handleClick}
        sx={{ mt: 8, px: 16, fontSize: 16 }}
        variant="contained"
      >
        Start over
      </Button>
    </Box>
  );
};
