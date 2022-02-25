import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
