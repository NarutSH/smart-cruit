import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const styles = {
    container: {
      backgroundImage: 'URL("/assets/images/bg.jpeg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      borderRadius: "25px",
    },
  };

  return (
    <Box sx={styles.container}>
      <Box textAlign="center">
        <Box>
          <img src="/assets/images/logo.png" width={300} alt="logo" />
        </Box>
        <Typography
          color="white"
          variant="h5"
          mb={3}
          className="presentation-text "
        >
          Resume Builder
        </Typography>
        <Button
          variant="contained"
          sx={styles.button}
          color="info"
          onClick={() => navigate("/resume-form")}
        >
          CREATE RESUME
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
