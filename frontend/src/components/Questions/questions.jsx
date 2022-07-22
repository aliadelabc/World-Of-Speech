import React, { useState, useEffect } from "react";

//css
import "./questions.css";

//components
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import LinearWithValueLabel from "../Type/linearProgress";

//axios
import axios from "axios";
import Check from "../Type/checkBox";

//navigation
import { useNavigate } from "react-router-dom";

//sweetalert
import Swal from "sweetalert2";

const Questions = ({ lightMode }) => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  });

  const [isCorrect, setIsCorrect] = useState("not empty");

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleChange1 = (value, check) => {
    !check ? setCorrectAnswer(value) : setCorrectAnswer("");
    setChecked({
      checked1: !checked.checked1,
      checked2: false,
      checked3: false,
      checked4: false,
    });
  };
  const handleChange2 = (value, check) => {
    !check ? setCorrectAnswer(value) : setCorrectAnswer("");
    setChecked({
      checked1: false,
      checked2: !checked.checked2,
      checked3: false,
      checked4: false,
    });
  };
  const handleChange3 = (value, check) => {
    !check ? setCorrectAnswer(value) : setCorrectAnswer("");
    setChecked({
      checked1: false,
      checked2: false,
      checked3: !checked.checked3,
      checked4: false,
    });
  };
  const handleChange4 = (value, check) => {
    !check ? setCorrectAnswer(value) : setCorrectAnswer("");
    setChecked({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: !checked.checked4,
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    if (questions[step - 1].pos === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setAnswers(answers.concat([correctAnswer]));

    setTimeout(() => {
      handleNextStep();
      setLoading(false);
    }, 1000);
  };
  const handleSubmitScore = () => {
    setLoading(true);

    if (questions[step - 1].pos === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setAnswers(answers.concat([correctAnswer]));

    setTimeout(() => {
      setLoading(false);
      navigate("/result-screen", {
        state: {
          answers,
          questions,
          totalNumberOfQuestions: questions?.length,
        },
      });
    }, 1000);
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:4000/api/v1/word-list");
        setQuestions(res.data);
        setLoading(false);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: err,
        });
        setLoading(false);
      }
    };
    setCorrectAnswer("");
    setIsCorrect("not empty");
    setChecked({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
    });
    if (step === 1) {
      fetchQuestions();
    }
  }, [step]);
  return (
    <div className="questions">
      {questions?.length > 0 ? (
        <div
          key={questions[step - 1].id}
          className="question"
          style={{
            backgroundColor: lightMode ? "#282c34" : "#F7FBFA",
            color: lightMode ? "#F7FBFA" : "black",
          }}
        >
          <div>
            <h2 style={{ textAlign: "center", marginTop: 50 }}>
              Word {step} : {questions[step - 1]?.word?.toUpperCase()}
            </h2>
          </div>
          <div>
            <FormGroup>
              <Check
                value={"adjective"}
                label={"adjective"}
                handleChange={handleChange1}
                checked={checked.checked1}
                isCorrect={isCorrect}
              />
              <Check
                value={"noun"}
                label={"noun"}
                handleChange={handleChange2}
                checked={checked.checked2}
                isCorrect={isCorrect}
              />
              <Check
                value={"verb"}
                label={"verb"}
                handleChange={handleChange3}
                checked={checked.checked3}
                isCorrect={isCorrect}
              />
              <Check
                value={"adverb"}
                label={"adverb"}
                handleChange={handleChange4}
                checked={checked.checked4}
                isCorrect={isCorrect}
              />
            </FormGroup>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            {step === questions?.length ? (
              <Button
                style={{ marginRight: 20 }}
                variant="contained"
                color={"success"}
                onClick={handleSubmitScore}
                disabled={loading || !correctAnswer}
              >
                {loading ? "Loading..." : "Submit Activity"}
              </Button>
            ) : (
              <Button
                style={{ marginRight: 20 }}
                variant="contained"
                color={"primary"}
                onClick={handleSubmit}
                disabled={loading || !correctAnswer}
              >
                {loading ? "Loading..." : "Submit / Next"}
              </Button>
            )}
          </div>
          <div style={{ marginTop: 20 }}>
            <LinearWithValueLabel value={(step / questions?.length) * 100} />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={50} />
        </div>
      )}
    </div>
  );
};

export default Questions;
