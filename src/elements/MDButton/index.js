import { Button } from "@mui/material";
import React from "react";

const MDButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "120px",
        fontFamily: "DM Serif Display",
        textTransform: "unset",
        fontStyle: "normal",
        fontWeight: "400",
        // fontSize: "18px",
        // lineHeight: "25px",
        padding: "13px 40px",
      }}
    >
      Early access
    </Button>
  );
};

export default MDButton;
