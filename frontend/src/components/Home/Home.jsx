import React from "react";

//components
import Button from "@material-ui/core/Button";

//navigation
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/activity-started");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={handleClick} color="primary" variant="contained">
        Start Activity
      </Button>
    </div>
  );
};
export default Home;
