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

import { formValue } from "../../data/formValue";
import { useForm, useFieldArray } from "react-hook-form";
import { referenceSchema } from "../../data/schema";
import { yupResolver } from "@hookform/resolvers/yup";

const ReferenceEl = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { reference: formValue.reference },
    resolver: yupResolver(referenceSchema),
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "reference",
  });

  const styles = {
    input: {
      backgroundColor: "white",
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        ข้อมูลอ้างอิง
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
                    errors?.reference?.length &&
                    !!errors?.reference[index]?.fullname?.message
                  }
                  label="ชื่อเต็มของผู้อ้างอิง"
                  fullWidth
                  style={styles.input}
                  {...register(`reference.${index}.fullname`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    errors?.reference?.length &&
                    !!errors?.reference[index]?.company?.message
                  }
                  required
                  id="company"
                  label="บริษัท"
                  fullWidth
                  style={styles.input}
                  {...register(`reference.${index}.company`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    errors?.reference?.length &&
                    !!errors?.reference[index]?.tel?.message
                  }
                  required
                  label="โทรศัพท์"
                  fullWidth
                  style={styles.input}
                  {...register(`reference.${index}.tel`)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={
                    errors?.reference?.length &&
                    !!errors?.reference[index]?.email?.message
                  }
                  required
                  label="อีเมล"
                  fullWidth
                  style={styles.input}
                  {...register(`reference.${index}.email`)}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}

      <Button
        variant="contained"
        fullWidth
        onClick={() => append(formValue.reference)}
      >
        เพิ่มข้อมูลอ้างอิง
      </Button>
    </Box>
  );
};

export default ReferenceEl;
