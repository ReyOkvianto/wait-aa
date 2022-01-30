import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Post,
} from "./components";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Post" element={<Post />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
