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

const root = ReactDOM.createRoot(document.getElementById("root"));

Font.register({
  family: "THSarabunNew",
  src: "/assets/fonts/THSarabunNew.ttf",
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <App />
        </LocalizationProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
