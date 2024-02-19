import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import XIcon from "@mui/icons-material/X";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

export const About = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <Tooltip title="About starklings.app">
        <IconButton
          onClick={() => setDialogOpen(true)}
          sx={{ p: 0.5, color: "#FFF" }}
          aria-label="about"
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">About starklings.app</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            starklings.app is a web interactive platform designed to help users
            kickstart their journey into learning Cairo. This platform is based
            on Starklings exercises, considered essential for those taking their
            first steps in understanding Cairo.
            <br />
            <br />
            Our goal is to simplify the Starklings experience by getting rid of
            complex configurations and installations.
            <br />
            <br />
            Do you have a killer idea that would take starklings.app to the next
            level? DM us on X:
            <IconButton
              href={"https://twitter.com/starklingsapp"}
              target="_blank"
              sx={{ ml: 1, p: 0.5, color: "#FFF" }}
              aria-label="start-over"
            >
              <XIcon />
            </IconButton>
            <br />
            <br />
            Did you find a bug? Do you want to contribute? Here it is our GitHub
            repo:
            <IconButton
              href={"https://github.com/dpinones/starklings-app"}
              target="_blank"
              sx={{ ml: 1, p: 0.5, color: "#FFF" }}
              aria-label="start-over"
            >
              <GitHubIcon />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={closeDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
