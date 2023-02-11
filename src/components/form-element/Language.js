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

import { defFormValue } from "../data/formValue";
import { Controller, useFieldArray } from "react-hook-form";

const LanguageEl = ({ hookForm }) => {
  const { register, control } = hookForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "language",
  });

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ภาษา
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
                <Typography variant="body">ภาษาที่ {index + 1}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end">
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="ภาษา"
                  fullWidth
                  style={styles.input}
                  {...register(`language.${index}.languageName`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name={`language.${index}.languageLevel`}
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
        onClick={() => append(defFormValue.language)}
      >
        เพิ่มภาษา
      </Button>
    </React.Fragment>
  );
};

export default LanguageEl;
