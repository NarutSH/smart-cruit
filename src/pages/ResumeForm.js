import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ResumeDoc from "../components/ResumeDoc";
import { useForm } from "react-hook-form";
import VerticalLinearStepper from "../components/VerticalLinearStepper";

const ResumeForm = () => {
  const hookForm = useForm();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <VerticalLinearStepper hookForm={hookForm} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResumeDoc hookForm={hookForm} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeForm;
