import { Fragment } from "react";
import styles from "../../styles/style.module.css";

function AnswerMethod({ answers, type, handleAnswer, selectedAnswer }) {
  /*  if (type === 2) {
    return (
      <Fragment>
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
        <br />
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
        <br />
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
      </Fragment>
    );
  } */
  if (type === 3) {
    console.log(selectedAnswer);
    return (
      <Fragment>
        <div className={styles.div43}>
          <img
            src="/img/gapaham.png"
            width="120px"
            height="100px"
            className={styles.imgkonten3}
          />
          <img
            src="/img/gapaham2.png"
            width="80px"
            height="50px"
            className={styles.imgknten3}
          />
        </div>

        <div className={styles.div42}>
          {selectedAnswer?.map((answer) => (
            <button key={answer} className={styles.buttonkonten3}>
              {answer}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: 20 }}>
          <hr width="30%" />
        </div>

        <div className={styles.div42}>
          {answers.map((answer) => {
            const selected = selectedAnswer?.findIndex(
              (item) => item === answer
            );

            return (
              <button
                onClick={() => {
                  handleAnswer(answer);
                }}
                key={answer}
                style={{
                  background:
                    selected !== -1 && selected != undefined
                      ? "#d7ffb8"
                      : "white",
                }}
                className={styles.buttonkonten3}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </Fragment>
    );
  }
  if (type === 4) {
    return (
      <div className={styles.div40}>
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswer(answer)}
            style={{
              marginLeft: 5,
              marginRight: 5,
              background: selectedAnswer === answer ? "#d7ffb8" : "white",
              cursor: "pointer",
            }}
          >
            <div className={styles.div45}>
              <img src="/img/gapaham2.png" width="80px" height="50px" />
            </div>
            <div className={styles.div46}>
              <p>Icon</p>
              <p>{answer}</p>
            </div>
          </button>
        ))}
      </div>
    );
  }

  if (type === 5) {
    return (
      <div className={styles.div50}>
        <div className={styles.div49}>
          <img src="/img/gapaham.png" width="100px" height="80px" />
          <button className={styles.buttonkonten5}>
            <img
              className={styles.imgkonten5}
              src="/img/gapaham2.png"
              width="50px"
              height="30px"
            />
            <div>
              <p className={styles.pkonten1}>I Like Football</p>
              <p className={styles.pkonten2}>
                -----------------------------------
              </p>
            </div>
          </button>
        </div>
        <hr className={styles.hrkonten1} />
        <div className={styles.div42}>
          {selectedAnswer?.map((answer) => (
            <button key={answer} className={styles.buttonkonten3}>
              {answer}
            </button>
          ))}
        </div>
        <hr className={styles.hrkonten2} />
        <hr className={styles.hrkonten2} />

        <div className={styles.div42}>
          {answers.map((answer) => {
            const selected = selectedAnswer?.findIndex(
              (item) => item === answer
            );
            return (
              <button
                onClick={() => handleAnswer(answer)}
                key={answer}
                style={{
                  background:
                    selected !== -1 && selected !== undefined
                      ? "#d7ffb8"
                      : "white",
                }}
                className={styles.buttonkonten3}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      {answers.map((answer) => (
        <Fragment key={answer}>
          <button
            onClick={() => handleAnswer(answer)}
            className={styles.buttonjawab2}
            style={{
              background: selectedAnswer === answer ? "#d7ffb8" : "white",
            }}
          >
            {answer}
          </button>
          <br />
        </Fragment>
      ))}
    </div>
  );
}
export default AnswerMethod;
