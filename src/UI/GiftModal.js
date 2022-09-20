import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function GiftModal(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/private_files/lf30_a4mKwA.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "white", fontFamily: "raleway", fontSize: "1.2rem" }}
          >
            You sure that you want to redeem this gift? {props.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="info" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => props.redeemGift(props.id)}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
