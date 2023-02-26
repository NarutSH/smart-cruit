import { Grid, Box, Toolbar } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import VerticalLinearStepper from "../components/VerticalLinearStepper";
import ResumePaper from "../components/ResumePaper";

const ResumeForm = () => {
  const hookForm = useForm();

  return (
    <Box>
      <Toolbar
        sx={{
          background: "URL(/assets/images/headerimg.png)",
          height: "100px",
        }}
      />
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <VerticalLinearStepper hookForm={hookForm} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ResumePaper hookForm={hookForm} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeForm;
