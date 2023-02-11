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
import { Controller } from "react-hook-form";
import { defFormValue } from "../../data/formValue";

const InternshipEl = ({ hookForm, arrayField }) => {
  const {
    register,
    control,
    formState: { errors },
  } = hookForm;
  const { fields, append, remove } = arrayField;

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        การฝึกงาน
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
                    errors?.internship?.length &&
                    !!errors?.internship[index]?.position?.message
                  }
                  label="ตำแหน่งงาน"
                  fullWidth
                  style={styles.input}
                  {...register(`internship.${index}.position`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    errors?.internship?.length &&
                    !!errors?.internship[index]?.hirerName?.message
                  }
                  required
                  id="hirerName"
                  label="บริษัท / หน่วยงาน / ผู้จ้างงาน"
                  fullWidth
                  style={styles.input}
                  {...register(`internship.${index}.hirerName`)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Controller
                  name={`internship.${index}.startDate`}
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
                              errors?.internship?.length &&
                              !!errors?.internship[index]?.startDate?.message
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
                  name={`internship.${index}.endDate`}
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
                              errors?.internship?.length &&
                              !!errors?.internship[index]?.endDate?.message
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
                  {...register(`internship.${index}.location`)}
                  error={
                    errors?.internship?.length &&
                    !!errors?.internship[index]?.location?.message
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
                  {...register(`internship.${index}.remark`)}
                  error={
                    errors?.internship?.length &&
                    !!errors?.internship[index]?.remark?.message
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
        onClick={() => append(defFormValue.internship)}
      >
        เพิ่มการฝึกงาน
      </Button>
    </Box>
  );
};

export default InternshipEl;
