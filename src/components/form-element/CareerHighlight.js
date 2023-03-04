import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { optionAvailability } from "../../data/data";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const CareerHighlight = ({ hookForm }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const { register, control } = hookForm;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            {...register("career.location")}
            fullWidth
            label="Location"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            control={control}
            name="career.availability"
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="availability-select">Availability</InputLabel>
                  <Select
                    labelId="availability-select"
                    label="Availability"
                    {...field}
                  >
                    {optionAvailability?.map((el) => (
                      <MenuItem value={el.value}>{el.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            {...register("career.areaOfInterest")}
            fullWidth
            label="Area of interest"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerHighlight;
