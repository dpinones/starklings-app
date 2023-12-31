import { Box, Button, Typography } from "@mui/material";
import { CURRENT_EXERCISE } from "../../../constants/localStorage";
import { Logo } from "../../shared/Logo";
const DEFAULT_FIRST_EXERCISE_ID = "intro1";

export const Home = () => {
  const localStorageExerciseId = localStorage.getItem(CURRENT_EXERCISE);
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
      <Logo />
      <Typography sx={{ mt: 3 }}>
        A web interactive tutorial to learn Cairo and Starknet.
      </Typography>
      <Button
        href={`/exercise/${
          localStorageExerciseId ?? DEFAULT_FIRST_EXERCISE_ID
        }`}
        sx={{ mt: 6, px: 16, fontSize: 16 }}
        variant="contained"
      >
        Start coding
      </Button>
    </Box>
  );
};
