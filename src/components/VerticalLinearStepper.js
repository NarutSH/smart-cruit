import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ContactEl from "./form-element/ContactEl";
import EducationEl from "./form-element/EducationEl";
import ExperienceEl from "./form-element/ExperienceEl";
import Language from "./form-element/Language";
import AboutEl from "./form-element/AboutEl";
import CareerHighlight from "./form-element/CareerHighlight";
import Salary from "./form-element/Salary";

export default function VerticalLinearStepper({ hookForm }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "ข้อมูลส่วนตัว",
      dataTab: (
        <>
          <ContactEl hookForm={hookForm} />
          <Language hookForm={hookForm} />
        </>
      ),
    },
    {
      label: "Career Highlight",
      dataTab: <CareerHighlight hookForm={hookForm} />,
    },
    {
      label: "การศึกษา",
      dataTab: <EducationEl hookForm={hookForm} />,
    },
    {
      label: "ประสบการณ์",
      dataTab: <ExperienceEl hookForm={hookForm} />,
    },
    {
      label: "Salary",
      dataTab: <Salary hookForm={hookForm} />,
    },

    {
      label: "อื่น ๆ",
      dataTab: <AboutEl hookForm={hookForm} />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box>{step.dataTab}</Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
