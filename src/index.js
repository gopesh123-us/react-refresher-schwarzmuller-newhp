import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewMeetupPage from "./pages/NewMeetup";
import FavouriteMeetsPage from "./pages/FavouriteMeets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all" element={<App />} />
      <Route path="/new" element={<NewMeetupPage />} />
      <Route path="/fav" element={<FavouriteMeetsPage />} />
    </Routes>
  </BrowserRouter>
);
