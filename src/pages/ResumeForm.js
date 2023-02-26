import { Grid, Box, Toolbar, Container } from "@mui/material";
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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
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
      </Container>
    </Box>
  );
};

export default ResumeForm;
