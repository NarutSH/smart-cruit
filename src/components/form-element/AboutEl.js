import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

const AboutEl = ({ hookForm }) => {
  const { register } = hookForm;

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        เกี่ยวกับ
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            multiline
            minRows={10}
            required
            label="บอกอะไรเกี่ยวกับคุณ"
            fullWidth
            style={styles.input}
            {...register("about.about")}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AboutEl;
