import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <ArrowBackIcon fontSize="large" />
    </Link>
  );
}
