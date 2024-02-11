import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const ErrorFallback = () => {
  return (
    <Box>
      <Typography variant="h2">Something went horribly wrong!</Typography>
      <Button href="/">Go back to home</Button>
    </Box>
  );
};
