import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { defFormValue } from "../data/formValue";
import { Controller, useFieldArray } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";

const EducationEl = ({ hookForm }) => {
  const {
    register,
    formState: { errors },
    control,
  } = hookForm;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        การศึกษา
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
                <Typography variant="body">การศึกษาที่ {index + 1}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end">
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="โรงเรียน"
                  fullWidth
                  style={styles.input}
                  error={
                    errors?.education?.length &&
                    !!errors?.education[index]?.schoolName?.message
                  }
                  {...register(`education.${index}.schoolName`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="ปริญญา"
                  fullWidth
                  style={styles.input}
                  error={
                    errors?.education?.length &&
                    !!errors?.education[index]?.degree?.message
                  }
                  {...register(`education.${index}.degree`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  required
                  label="วันจบการศึกษา"
                  fullWidth
                  style={styles.input}
                  error={
                    errors?.education?.length &&
                    !!errors?.education[index]?.graduatedDate?.message
                  }
                  {...register(`education.${index}.graduatedDate`)}
                /> */}

                <Controller
                  name={`education.${index}.graduatedDate`}
                  control={control}
                  render={({ field: { value, onChange, ref } }) => {
                    return (
                      <DatePicker
                        ref={ref}
                        label="วันจบการศึกษา"
                        value={value}
                        onChange={(newValue) => {
                          onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            error={
                              errors?.education?.length &&
                              !!errors?.education[index]?.graduatedDate?.message
                            }
                          />
                        )}
                      />
                    );
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="ตำแหน่ง"
                  fullWidth
                  style={styles.input}
                  error={
                    errors?.education?.length &&
                    !!errors?.education[index]?.location?.message
                  }
                  {...register(`education.${index}.location`)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="อธิบาย"
                  multiline
                  minRows={3}
                  fullWidth
                  style={styles.input}
                  error={
                    errors?.education?.length &&
                    !!errors?.education[index]?.remark?.message
                  }
                  {...register(`education.${index}.remark`)}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}

      <Button
        variant="contained"
        fullWidth
        onClick={() => append(defFormValue.education)}
      >
        เพิ่มการศึกษา
      </Button>
    </Box>
  );
};

export default EducationEl;
