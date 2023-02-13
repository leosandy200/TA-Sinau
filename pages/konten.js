import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Lanjutan from "./komponen/lanjutan";
import AnswerMethod from "./komponen/AnswerMethod";
import Periksa from "./komponen/periksa";
import CorrectAnswer from "./komponen/CorrectAnswer";
import WrongAnswer from "./komponen/WrongAnswer";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#60CF0F" : "#308fe8",
  },
}));

export const questionAndAnswer = [
  {
    type: 1,
    question: "Bagaimana cara mengatakan “dan” ?",
    answers: ["I", "You", "And"],
    correctAnswer: "And",
    isHard: true,
  },
  {
    type: 2,
    question: "Pilih Pasangan Yang Cocok",
    answers: ["I", "You", "And"],
    correctAnswer: "And",
    isHard: false,
  },
  {
    type: 3,
    question: "Pilih yang kamu dengar",
    answers: ["Kenapa", "Apa", "Pernah", "Kamu", "Suka", "Juga", "Lagi"],
    correctAnswer: "Kamu Lagi Apa",
    isHard: false,
  },
  {
    type: 4,
    question: "Mana yang merupakan “wanita - wanita” ?",
    answers: ["1", "2", "3"],
    correctAnswer: "2",
    isHard: false,
  },
  {
    type: 5,
    question: "TULISKAN DALAM BAHASA INDONESIA",
    answers: ["Aku", "Tidak", "Pernah", "Mau", "Suka", "Juga", "Sepakbola"],
    correctAnswer: "Aku Suka Sepakbola",
    isHard: true,
  },
  {
    type: 1,
    question: "Bagaimana cara mengatakan “dan” ?",
    answers: ["I", "You", "And"],
    correctAnswer: "And",
    isHard: true,
  },
  {
    type: 2,
    question: "Pilih Pasangan Yang Cocok",
    answers: ["I", "You", "And"],
    correctAnswer: "And",
    isHard: false,
  },
  {
    type: 3,
    question: "Pilih yang kamu dengar",
    answers: ["Kenapa", "Apa", "Pernah", "Kamu", "Suka", "Juga", "Lagi"],
    correctAnswer: "Kamu Lagi Apa",
    isHard: false,
  },
  {
    type: 4,
    question: "Mana yang merupakan “wanita - wanita” ?",
    answers: ["1", "2", "3"],
    correctAnswer: "2",
    isHard: false,
  },
  {
    type: 5,
    question: "TULISKAN DALAM BAHASA INDONESIA",
    answers: ["Aku", "Tidak", "Pernah", "Mau", "Suka", "Juga", "Sepakbola"],
    correctAnswer: "Aku Suka Sepakbola",
    isHard: true,
  },
];

function Konten() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const content = questionAndAnswer[step];
  const [isCheckAnswer, setIsCheckAnswer] = useState(false);

  const handleAnswer = (answer) => {
    if (isCheckAnswer) {
      return;
    }
    if (content.type === 1 || content.type === 4 || content.type === 2) {
      const newAnswers = [...selectedAnswers];
      newAnswers[step] = answer;
      setSelectedAnswers(newAnswers);
    }
    if (content.type === 3 || content.type === 5) {
      const newAnswers = [...selectedAnswers];
      const selected = newAnswers[step]?.findIndex((item) => item === answer);
      if (selected === -1 || selected === undefined) {
        newAnswers[step] = [...(newAnswers[step] || []), answer];
        setSelectedAnswers(newAnswers);
        return;
      }
      newAnswers[step] = [...(newAnswers[step] || [])].filter(
        (item) => item !== answer
      );
      setSelectedAnswers(newAnswers);
    }
  };

  const checkAnswer = () => {
    if (content.type === 1 || content.type === 4 || content.type === 2) {
      if (selectedAnswers[step] === content.correctAnswer) {
        return true;
      }
    }
    if (content.type === 3 || content.type === 5) {
      if (
        Array.isArray(selectedAnswers?.[step]) &&
        selectedAnswers?.[step].join(" ") === content.correctAnswer
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const emptyAnswer = questionAndAnswer.map(() => undefined);
    setSelectedAnswers(emptyAnswer);
  }, []);

  useEffect(() => {
    setIsCheckAnswer(false);
  }, [step]);

  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon
          className={styles.CloseIcon}
          onClick={() => router.push("/belajar")}
        />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={step * 10}
        />
      </div>
      {content?.isHard && (
        <div className={styles.div39}>
          <img
            alt="hard-task"
            src="/img/latihansulit.png"
            width="30px"
            height="30px"
            className={styles.latihansulit}
          />
          <p className={styles.platihansulit}>Latihan Sulit</p>
        </div>
      )}

      <div className={styles.div40}>
        <h1>{content?.question}</h1>
        <AnswerMethod
          type={content.type}
          answers={content.answers}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswers[step]}
        />
      </div>
      <hr className={styles.hrperiksa} />
      {isCheckAnswer ? (
        <Fragment>
          {checkAnswer() ? (
            <CorrectAnswer
              handleNext={() => {
                if (step === 9) {
                  localStorage.setItem(
                    "result",
                    JSON.stringify(selectedAnswers)
                  );
                  router.push("/cekkartu");
                  return;
                }
                setStep(step + 1);
              }}
            />
          ) : (
            <WrongAnswer
              handleNext={() => {
                if (step === 9) {
                  localStorage.setItem(
                    "result",
                    JSON.stringify(selectedAnswers)
                  );
                  router.push("/cekkartu");
                  return;
                }
                setStep(step + 1);
              }}
            />
          )}
        </Fragment>
      ) : (
        <div className={styles.divperiksa}>
          <button
            onClick={() => setStep(step + 1)}
            className={styles.buttonlompati}
          >
            LOMPATI
          </button>
          <button
            onClick={() => {
              if (content.type === 2) {
                setStep(step + 1);
                return;
              }
              setIsCheckAnswer(true);
            }}
            className={styles.buttonperiksa}
          >
            PERIKSA
          </button>
        </div>
      )}
    </div>
  );
}
export default Konten;
