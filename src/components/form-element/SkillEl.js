import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Rating,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { defFormValue } from "../../data/formValue";
import { Controller } from "react-hook-form";

const SkillEl = ({ hookForm, arrayField }) => {
  const { register, control } = hookForm;
  const { fields, append, remove } = arrayField;

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ทักษะ
      </Typography>
      {fields.map((el, index) => {
        return (
          <Paper
            key={el.id}
            variant="outlined"
            sx={{ boxShadow: 1, p: 4, my: 2 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body">ทักษะที่ {index + 1}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end">
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="ทักษะ"
                  fullWidth
                  style={styles.input}
                  {...register(`skill.${index}.skillName`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name={`skill.${index}.skillLevel`}
                  control={control}
                  render={({ field: { value, onChange, ref } }) => {
                    return (
                      <Rating
                        ref={ref}
                        name="simple-controlled"
                        value={value}
                        onChange={(_, newValue) => {
                          onChange(newValue);
                        }}
                        size="large"
                      />
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}

      <Button
        variant="contained"
        fullWidth
        onClick={() => append(defFormValue.skill)}
      >
        เพิ่มทักษะ
      </Button>
    </React.Fragment>
  );
};

export default SkillEl;
