import { Box, Button, Typography } from "@mui/material";
import { useGetNextExerciseId } from "../../../queries/useGetNextEcerciseName";
import { CURRENT_EXERCISE } from "../../../constants/localStorage";

const DEFAULT_FIRST_EXERCISE_ID = "intro1";

export const Home = () => {
  const firstExerciseId = useGetNextExerciseId();
  const localStorageExerciseId = localStorage.getItem(CURRENT_EXERCISE)
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
        href={`/exercise/${localStorageExerciseId ?? firstExerciseId ?? DEFAULT_FIRST_EXERCISE_ID}`}
        sx={{ mt: 8, px: 16, fontSize: 16 }}
        variant="contained"
      >
        Start coding
      </Button>
    </Box>
  );
};

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{ zIndex: 3, ml: "-0.5%", fontSize: "14.2vw" }}
        variant="h1"
      >
        starklings.app
      </Typography>
      <Box sx={{ position: "absolute", overflow: "hidden", width: "100%" }}>
        <Typography
          sx={{
            zIndex: 2,
            transform: "translateY(4px) scale(1.01)",
            // color: "#f2951b",
            color: "#1976d2",
            ml: "-0.5%",
            fontSize: "14.2vw",
          }}
          variant="h1"
        >
          starklings.app
        </Typography>
      </Box>
    </Box>
  );
};
