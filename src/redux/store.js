import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
