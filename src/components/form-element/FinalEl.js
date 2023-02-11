import React from "react";
import { Typography } from "@mui/material";
import Budapest from "../resume-template/Budapest";
import { useWatch } from "react-hook-form";

const FinalEl = ({ hookForm }) => {
  const { control } = hookForm;

  const filledValue = useWatch({
    control,
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ส่วนสุดท้าย
      </Typography>
      <div className="page-container">
        <Budapest filledValue={filledValue} />
      </div>
    </React.Fragment>
  );
};

export default FinalEl;
