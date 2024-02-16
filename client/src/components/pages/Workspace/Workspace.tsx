import { Editor } from "@monaco-editor/react";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Alert,
  AlertTitle,
  Box,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useNavigate, useParams } from "react-router-dom";
import { CURRENT_EXERCISE } from "../../../constants/localStorage";
import { useBuildCairo, useTestCairo } from "../../../queries/useCompileCairo";
import { useGetExercise } from "../../../queries/useGetExercise";
import { useGetHint } from "../../../queries/useGetHint";
import { CircularProgressCenterLoader } from "../../shared/CircularProgressCenterLoader";
import { ActionBar } from "./ActionBar";
import { MobileWarningDialog } from "./MobileWarningDialog";

export const Workspace = () => {
  const { id } = useParams();

  const { mutateAsync: build, isPending: buildPending } = useBuildCairo("nicon44");
  const { mutateAsync: test, isPending: testPending } = useTestCairo("nicon44");

  const compilePending = buildPending || testPending

  const { data, isLoading } = useGetExercise(id);
  const [editorValue, setEditorValue] = useState("");
  const [compileError, setCompileError] = useState<string | undefined>(
    undefined
  );
  const [succeeded, setSucceeded] = useState(false);
  const nextId = data?.next_exercise;
  const prevId = data?.prev_exercise;
  const navigate = useNavigate();
  const [hint, setHint] = useState<string | undefined>(undefined);
  const isTest = data?.mode === "test";
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
    } else {
      setEditorValue("");
    }
  }, [data?.code]);

  const reset = () => {
    setSucceeded(false);
    setHint(undefined);
    setCompileError(undefined);
  };

  const handleCompileClick = async () => {
    setCompileError(undefined);
    setSucceeded(false);
    try {
      isTest ? await test(editorValue) : await build(editorValue);
      nextId && localStorage.setItem(CURRENT_EXERCISE, nextId);
      setSucceeded(true);
      setHint(undefined);
    } catch (e: any) {
      const error = e.response?.data?.message ?? "Something went wrong!";
      console.error(e);
      setCompileError(error);
    }
  };

  const handleHintClick = async () => {
    getHint();
  };

  const handleNextClick = () => {
    reset();
    nextId && localStorage.setItem(CURRENT_EXERCISE, nextId);
    navigate(nextId ? `/exercise/${nextId}` : "/end");
  };

  const handlePrevClick = () => {
    reset();
    if (prevId) {
      localStorage.setItem(CURRENT_EXERCISE, prevId);
      navigate(`/exercise/${prevId}`);
    }
  };

  const handleRestartClick = () => {
    localStorage.removeItem(CURRENT_EXERCISE);
    navigate(`/`);
  };

  const resetCode = () => {
    setEditorValue(data?.code ?? "");
  };

  return (
    <Box sx={{ height: "100%", overflowY: "hidden" }}>
      <PanelGroup direction={"horizontal"}>
        <Grid sx={{ mt: 0, height: "100%" }} container spacing={2}>
          <Panel minSizePercentage={25} defaultSizePercentage={50}>
            {/* description + alerts */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflowY: "auto",
                height: "calc(100vh - 86px)",
              }}
            >
              {/* description */}
              <Box sx={{ px: 8, py: 6 }}>
                <Typography sx={{ mb: 4 }} variant="h4">
                  {data?.name}
                </Typography>
                {isLoading && <CircularProgressCenterLoader />}
                {data && (
                  <Typography style={{ whiteSpace: "pre-line" }}>
                    {data.description?.trim() !== ""
                      ? data.description
                      : "Having trouble to solve this one? Click 'GET HINT' button for help!"}
                  </Typography>
                )}
              </Box>
              {/* alerts */}
              <Box>
                {hintLoading && <CircularProgressCenterLoader />}
                {hint && (
                  <Alert sx={{ m: 2, ml: 4 }} severity="info" variant="filled">
                    <AlertTitle>Hint</AlertTitle>
                    <div dangerouslySetInnerHTML={{ __html: hint }} />
                    <br />
                    Remember that you can always check the Cairo book at{" "}
                    <Link
                      target="_blank"
                      sx={{ color: "#000" }}
                      href={"https://book.cairo-lang.org/"}
                    >
                      https://book.cairo-lang.org/
                    </Link>{" "}
                    or the Cairo documentation at{" "}
                    <Link
                      target="_blank"
                      sx={{ color: "#000" }}
                      href={"https://docs.cairo-lang.org/"}
                    >
                      https://docs.cairo-lang.org/
                    </Link>
                    .
                  </Alert>
                )}
                {succeeded && (
                  <Alert
                    sx={{ m: 2, ml: 4 }}
                    variant="filled"
                    severity="success"
                  >
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
              </Box>
            </Box>
            <ActionBar
              onGetHintClick={handleHintClick}
              onCompileClick={handleCompileClick}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              onRestartClick={handleRestartClick}
              isTest={isTest}
              succeeded={succeeded}
              hintVisible={!!hint}
              first={!prevId}
              compilePending={compilePending}
            />
          </Panel>
          <PanelResizeHandle>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                backgroundColor: "#000",
                width: 5,
              }}
            />
          </PanelResizeHandle>
          <Panel minSizePercentage={25} defaultSizePercentage={50}>
            {isLoading ? (
              <CircularProgressCenterLoader />
            ) : (
              <>
                <Editor
                  onChange={(val) => val && setEditorValue(val)}
                  theme="vs-dark"
                  height="100%"
                  width="100%"
                  options={{
                    scrollBeyondLastLine: false,
                    fontSize: 16,
                  }}
                  defaultLanguage="rust"
                  value={editorValue}
                />
                <Box sx={{ position: "absolute", bottom: 35, right: 25 }}>
                  <Tooltip title="Reset code">
                    <IconButton
                      onClick={resetCode}
                      sx={{ p: 0.5, color: "#FFF" }}
                      aria-label="reset-code"
                    >
                      <RefreshIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </>
            )}
          </Panel>
        </Grid>
      </PanelGroup>
      {isMobileOnly && <MobileWarningDialog />}
    </Box>
  );
};
