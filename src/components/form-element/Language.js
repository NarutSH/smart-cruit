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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
      <Grid container>
        {fields.map((el, index) => {
          return (
            <Grid item xs={6}>
              <Grid container spacing={3} my={1} key={el.id}>
                <Grid item xs={10}>
                  <TextField
                    required
                    label={`ภาษาที่ ${index + 1}`}
                    fullWidth
                    style={styles.input}
                    {...register(`language.${index}.languageName`)}
                  />
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="end">
                  <IconButton onClick={() => remove(index)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Button
        sx={{ marginTop: "10px" }}
        variant="text"
        startIcon={<AddCircleOutlineIcon />}
        fullWidth
        onClick={() => append(defFormValue.language)}
      >
        เพิ่มภาษา
      </Button>
    </React.Fragment>
  );
};

export default LanguageEl;
