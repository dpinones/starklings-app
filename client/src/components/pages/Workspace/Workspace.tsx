import { Editor } from "@monaco-editor/react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetExercise } from "../../../queries/useGetExercise";
import { CircularProgressCenterLoader } from "../../shared/CircularProgressCenterLoader";

export const Workspace = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetExercise(id);
  const [editorValue, setEditorValue] = useState("");

  return (
    <Box sx={{ height: "100%", overflowY: "hidden" }}>
      <Grid sx={{ mt: 0, height: "100%" }} container spacing={2}>
        <Grid sx={{ height: "100%", maxHeight: "100%" }} xs={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ px: 8, py: 6, height: "100%" }}>
              <Typography sx={{ mb: 4 }} variant="h4">
                Exercise {id}
              </Typography>
              {isLoading && <CircularProgressCenterLoader />}
              {data && (
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {data.description}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                background: "#000",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained">Compile</Button>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6}>
          {data && (
            <Editor
              onChange={(val) => val && setEditorValue(val)}
              theme="vs-dark"
              height="100%"
              width="100%"
              defaultLanguage="rust"
              defaultValue={data.code}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
