import { Editor } from "@monaco-editor/react";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetExercise } from "../../../queries/useGetExercise";
import { useGetHint } from "../../../queries/useGetHint";
import { useGetNextExerciseId } from "../../../queries/useGetNextEcerciseName";
import { useCairo } from "../../hooks/useCairo";
import { CircularProgressCenterLoader } from "../../shared/CircularProgressCenterLoader";

export const Workspace = () => {
  const { id } = useParams();
  const { compile } = useCairo();
  const { data, isLoading } = useGetExercise(id);
  const [editorValue, setEditorValue] = useState("");
  const [compileError, setCompileError] = useState<string | undefined>(
    undefined
  );
  const [succeeded, setSucceeded] = useState(false);
  const nextId = useGetNextExerciseId(id);
  const navigate = useNavigate();
  const [hint, setHint] = useState<string | undefined>(undefined);
  const {
    mutate: getHint,
    data: hintResponse,
    isPending: hintLoading,
  } = useGetHint(id ?? "", (data) => {
    setHint(data.data.hints.replace("\n", "<br />"));
  });

  useEffect(() => {
    if (data?.code) {
      setEditorValue(data.code);
    }
  }, [data?.code]);

  const reset = () => {
    setSucceeded(false);
    setHint(undefined);
  };

  const handleCompileClick = () => {
    setCompileError(undefined);
    setSucceeded(false);
    const compileResult = compile(editorValue);
    if (compileResult.success) {
      setSucceeded(true);
      setHint(undefined)
    } else {
      console.error(compileResult.error);
      setCompileError(compileResult.error ?? "Something went wrong!");
    }
  };

  const handleHintClick = async () => {
    getHint();
  };

  const handleNextClick = () => {
    reset();
    navigate(`/exercise/${nextId}`);
  };

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
              overflowY: "auto",
            }}
          >
            <Box sx={{ px: 8, py: 6 }}>
              <Typography sx={{ mb: 4 }} variant="h4">
                {data?.name}
              </Typography>
              {isLoading && <CircularProgressCenterLoader />}
              {data && (
                <Typography style={{ whiteSpace: "pre-line" }}>
                  {data.description}
                </Typography>
              )}
            </Box>
            <Box>
              {hintLoading && <CircularProgressCenterLoader />}
              {hint && (
                <Alert sx={{ m: 2, ml: 4 }} severity="info" variant="filled">
                  <AlertTitle>Hint</AlertTitle>
                  <div dangerouslySetInnerHTML={{ __html: hint }} />
                </Alert>
              )}
              {succeeded && (
                <Alert sx={{ m: 2, ml: 4 }} variant="filled" severity="success">
                  <AlertTitle>Great!</AlertTitle>
                  The submitted code compiles perfectly. Click{" "}
                  <strong>NEXT</strong> whenever you are ready to proceed.
                </Alert>
              )}
              {compileError && (
                <Alert
                  sx={{ m: 2, ml: 4, wordBreak: "break-all" }}
                  variant="filled"
                  severity="error"
                >
                  <AlertTitle>
                    Ups! Something went wrong with your code
                  </AlertTitle>
                  <div dangerouslySetInnerHTML={{ __html: compileError }} />
                  Fix the code and click <strong>COMPILE</strong> again.
                </Alert>
              )}
              <Box
                sx={{
                  background: "#000",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleHintClick}
                  disabled={!!hint || succeeded}
                >
                  Get Hint
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCompileClick}
                >
                  Compile
                </Button>
                {succeeded && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNextClick}
                  >
                    Next
                  </Button>
                )}
              </Box>
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
