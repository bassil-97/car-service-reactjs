import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function LetterAvatars({ name }) {
  return <Avatar sx={{ bgcolor: "var(--theme-primary)" }}>{name[0]}</Avatar>;
}
