import React from "react";
import {
  Grid,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { defFormValue } from "../data/formValue";
import { Controller, useFieldArray } from "react-hook-form";
import { optionLanguages } from "../../data/data";

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
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <Controller
            name="main_language"
            control={control}
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="main-language">ภาษา</InputLabel>
                  <Select
                    labelId="main-language"
                    id="main-language-select"
                    label="ภาษา"
                    {...field}
                  >
                    {optionLanguages.map((el) => {
                      return <MenuItem value={el.value}>{el.label}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              );
            }}
          />
        </Grid>
        {fields.map((el, index) => {
          return (
            <Grid item xs={6}>
              <Grid container spacing={3} key={el.id}>
                <Grid item xs={10}>
                  <TextField
                    required
                    label={`ภาษาอื่น ${index + 1}`}
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
