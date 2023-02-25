import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const Salary = ({ hookForm }) => {
  const { register } = hookForm;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            {...register("salary.current")}
            fullWidth
            label="Current Salary"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            {...register("salary.expect")}
            fullWidth
            label="Expected Salary"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Salary;
