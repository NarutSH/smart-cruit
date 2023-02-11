import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    personal: {
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: "",
      maritalStatus: "",
      carLicense: "",
      language: "",
    },
  },
  reducers: {
    updatePersonal: (state, action) => {
      state.personal = action.payload;
    },
  },
});

export const { updatePersonal } = dataSlice.actions;

export default dataSlice.reducer;
