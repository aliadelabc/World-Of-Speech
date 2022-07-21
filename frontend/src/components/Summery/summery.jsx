import React, { useState, useEffect } from "react";
//css
import "./summery.css";
//location
import { useLocation } from "react-router-dom";
//axios
import axios from "axios";
//components
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@material-ui/core/Button";
//sweetalert
import Swal from "sweetalert2";
//navigate
import { useNavigate } from "react-router-dom";

const Summery = ({ lightMode }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { questions, answers, totalNumberOfQuestions } = location.state;
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    navigate("/activity-started");
  };
  useEffect(() => {
    const handleScore = () => {
      let i = 0;
      let score = 0;
      while (i !== totalNumberOfQuestions) {
        if (questions[i].pos === answers[i]) {
          score++;
        }
        i++;
      }
      let finalScore = (score / questions?.length) * 100;
      setScore(finalScore);
      fetchRank(finalScore);
    };
    const fetchRank = async (score) => {
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:4000/api/v1/fetch-rank",
          {
            score,
          }
        );
        setRank(res.data);
        setLoading(false);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: err,
        });
        setLoading(false);
      }
    };
    handleScore();
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={50} />
        </div>
      ) : (
        <div
          className="summery"
          style={{
            backgroundColor: lightMode ? "#282c34" : "#F7FBFA",
            color: lightMode ? "#F7FBFA" : "black",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Rank Summery</h2>
          <h1 style={{ color: "green" }}>{rank}%</h1>
          <Button onClick={handleClick} color="primary" variant="contained">
            Try Again
          </Button>
        </div>
      )}
    </>
  );
};

export default Summery;
