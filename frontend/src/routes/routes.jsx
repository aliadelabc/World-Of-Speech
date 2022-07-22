import React from "react";
//components
import Questions from "../components/Questions/questions";
import Summery from "../components/Summery/summery";
import Home from "../components/Home/home";
import NotFound from "../components/NotFound/notFound";

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
          exact
        />

        <Route
          path="/result-screen"
          element={<Summery lightMode={lightMode} />}
          exact
        />

        <Route exact path="/" element={<Home lightMode={lightMode} />} />
        <Route exact path="*" element={<NotFound lightMode={lightMode} />} />
      </Routes>
    </Router>
  );
};
export default CustomRoutes;
