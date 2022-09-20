import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Book Service"}</DialogTitle>
        <DialogContent>
          {props.error && (
            <DialogContentText id="alert-dialog-description">
              {props.error}
            </DialogContentText>
          )}
          {props.booked && (
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              background="transparent"
              speed="1"
              style={{ width: "400px", height: "400px" }}
              autoplay
            ></lottie-player>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
