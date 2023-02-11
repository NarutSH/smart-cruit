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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFieldArray } from "react-hook-form";
import { defFormValue } from "../data/formValue";

const ExperienceEl = ({ hookForm }) => {
  const {
    register,
    control,
    formState: { errors },
  } = hookForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  console.log({ errors });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        ประสบการณ์
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
                <Typography variant="body">งานที่ {index + 1}</Typography>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="end">
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={
                    errors?.experiences?.length &&
                    !!errors?.experiences[index]?.position?.message
                  }
                  id="position"
                  label="ตำแหน่งงาน"
                  fullWidth
                  style={styles.input}
                  {...register(`experiences.${index}.position`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    errors?.experiences?.length &&
                    !!errors?.experiences[index]?.hirerName?.message
                  }
                  required
                  id="hirerName"
                  label="บริษัท / หน่วยงาน / ผู้จ้างงาน"
                  fullWidth
                  style={styles.input}
                  {...register(`experiences.${index}.hirerName`)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Controller
                  name={`experiences.${index}.startDate`}
                  control={control}
                  render={({ field: { value, onChange, ref } }) => {
                    return (
                      <DatePicker
                        ref={ref}
                        label="วันเริ่มงาน"
                        value={value}
                        onChange={(newValue) => {
                          onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={
                              errors?.experiences?.length &&
                              !!errors?.experiences[index]?.startDate?.message
                            }
                          />
                        )}
                      />
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Controller
                  name={`experiences.${index}.endDate`}
                  control={control}
                  render={({ field: { value, onChange, ref } }) => {
                    return (
                      <DatePicker
                        ref={ref}
                        label="วันสิ้นสุด"
                        value={value}
                        onChange={(newValue) => {
                          onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={
                              errors?.experiences?.length &&
                              !!errors?.experiences[index]?.endDate?.message
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
                  label="สถานที่ตั้ง"
                  fullWidth
                  style={styles.input}
                  {...register(`experiences.${index}.location`)}
                  error={
                    errors?.experiences?.length &&
                    !!errors?.experiences[index]?.location?.message
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="อธิบาย"
                  multiline
                  minRows={3}
                  fullWidth
                  style={styles.input}
                  {...register(`experiences.${index}.remark`)}
                  error={
                    errors?.experiences?.length &&
                    !!errors?.experiences[index]?.remark?.message
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}

      <Button
        variant="contained"
        fullWidth
        onClick={() => append(defFormValue.experiences)}
      >
        เพิ่มประสบการณ์
      </Button>
    </Box>
  );
};

export default ExperienceEl;
