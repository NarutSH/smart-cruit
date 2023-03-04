import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Font } from "@react-pdf/renderer";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

Font.register({
  family: "THSarabunNew",
  src: "/assets/fonts/THSarabunNew.ttf",
});

const myTheme = createTheme({
  // Set up your custom MUI theme here
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <Router>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <App />
          </LocalizationProvider>
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
