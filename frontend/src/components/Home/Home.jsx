import React from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/activity-started");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "#98D7E6" }}
        variant="contained"
      >
        Start Activity
      </Button>
    </div>
  );
};
export default Home;
