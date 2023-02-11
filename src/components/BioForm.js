import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonal } from "../redux/slice/dataSlice";
import ContactEl from "./form-element/ContactEl";

const BioForm = ({ hookForm }) => {
  const dispatch = useDispatch();
  const bio = useSelector((state) => state.data);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactEl hookForm={hookForm} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BioForm;
