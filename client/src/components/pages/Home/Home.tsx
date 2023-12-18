import { Box, Button } from "@mui/material";
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
      <Button
        href={`/exercise/${
          localStorageExerciseId ?? DEFAULT_FIRST_EXERCISE_ID
        }`}
        sx={{ mt: 8, px: 16, fontSize: 16 }}
        variant="contained"
      >
        Start coding
      </Button>
    </Box>
  );
};
