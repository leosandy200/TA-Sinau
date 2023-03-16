import React, { useEffect, useState, useContext } from "react";
import { PembelajaranContext } from "../../../utils/context";
import styles from './content-pembelajaran.module.css'
import { ProgressPembelajaran } from "./progress-pembelajaran";


export function ContentPembelajaran() {
    const [page, setPage] = useContext(PembelajaranContext).page;
    let konten = <ContentPembelajaranStart />;

    if (page == null) konten = <ContentPembelajaranStart />
    else if (page >= 0) konten = <ContentPembelajaranOne />
    return (
        <div className={styles["container-content"]}>
            <ProgressPembelajaran />
            {konten}
        </div>
    )
}

function ContentPembelajaranStart() {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Ayo Selesaikan Level Ini</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Tunjukan apa yang kamu pelajari dan raih hadiah spesial</p>
        </div>
    )
}

function ContentPembelajaranMiddle() {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Ayo Selesaikan Permainan Ini</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Tunjukan apa yang kamu pelajari dan raih hadiah spesial</p>
        </div>
    )
}

function ContentPembelajaranOne() {
    const [{soal, jawaban}, setData] = useContext(PembelajaranContext).data;

    const [answers, setAnswers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionElements, setSuggestionElements] = useState([]);
    const [answerElements, setAnswerElements] = useState([]);

    function setAnswer(i) {
        const result = suggestions[i];
        const resultArray = suggestions.filter(element => result != element);
        setSuggestions(resultArray);
        const copyAnswers = Array.from(answers);
        copyAnswers.push(result);
        setAnswers(copyAnswers);

        setData({soal, jawaban, returned: copyAnswers});
    }

    function setSuggestion(i) {
        const result = answers[i];
        const resultArray = answers.filter(element => result != element);
        setAnswers(resultArray);
        const copyAnswers = Array.from(suggestions);
        copyAnswers.push(result);
        setSuggestions(copyAnswers);

        setData({soal, jawaban, returned: resultArray});
    }

    useEffect(() => {
        const renders = [];
        suggestions.forEach((element, i) => {
            renders.push(<button data-keyword={element.keyword} className={styles["container-content-one-answer"]} onClick={() => setAnswer(i)}>{element.word}</button>)
        })
        setSuggestionElements(renders);
    }, [suggestions])

    useEffect(() => {
        const renders = [];
        answers.forEach((element, i) => {
            renders.push(<button data-keyword={element.keyword} className={styles["container-content-one-answer"]} onClick={() => setSuggestion(i)}>{element.word}</button>)
        })
        setAnswerElements(renders);
    }, [answers])

    useEffect(() => {
        if (!soal) return;
        const suggestionsTemp = [];
        jawaban.forEach(element => {
            suggestionsTemp.push({keyword: element.keyword, word: element.word})
        });
        setSuggestions(suggestionsTemp);
        setAnswers([ ]);
    }, [soal])
    

    return (
        <div className={styles["container-content-start"]}>
            <div className={styles["container-content-one-title"]}>
                <h1 className={styles["container-content-one-title-text"]}>Pilih arti yang sesuai dengan kalimat tersebut</h1>
                <h3 className={styles["container-content-one-question"]}>{soal.isi_soal}</h3>
            </div>
            <div className={styles["container-content-one-content"]}>
                <div className={styles["container-content-one-answers"]}>
                    <div className={styles["container-content-one-answers-container"]}>
                        {answerElements}
                    </div>
                    <hr width="70%" />
                </div>
                <div className={styles["container-content-one-suggestions"]}>
                    {suggestionElements}
                </div>
            </div>
        </div>
    );
}