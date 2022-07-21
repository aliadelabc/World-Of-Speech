import React from "react";
//components
import Questions from "../components/Questions/questions";
import Summery from "../components/Summery/summery";
import Home from "../components/Home/Home";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const CustomRoutes = ({ lightMode }) => {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route
          path="/activity-started"
          element={<Questions lightMode={lightMode} />}
        />

        <Route
          path="/result-screen"
          element={<Summery lightMode={lightMode} />}
        />

        <Route path="/" element={<Home lightMode={lightMode} />} />
      </Routes>
    </Router>
  );
};
export default CustomRoutes;
