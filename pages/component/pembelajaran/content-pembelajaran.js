import React, { useEffect, useState, useContext } from "react";
import { PageContext, PembelajaranContext, SessionContext } from "../../../utils/context";
import styles from './content-pembelajaran.module.css'
import { ProgressPembelajaran } from "./progress-pembelajaran";


export function ContentPembelajaran() {
    const [page, setPage] = useContext(PageContext);
    let konten = <ContentPembelajaranStart />;

    if (page == null) konten = <ContentPembelajaranStart />
    else if (page > 0) konten = <ContentPembelajaranPlay />
    return (
        <div className={styles["container-content"]}>
            <ProgressPembelajaran />
            {konten}
        </div>
    )
}

export function ContentPembelajaranStart() {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Ayo Selesaikan Level Ini</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Tunjukan apa yang kamu pelajari dan raih hadiah spesial</p>
        </div>
    )
}

export function ContentPembelajaranPlay({soal, jawaban}) {
    // const [{soal, jawaban}, setData] = useContext(SessionContext);
    const { jawabanTemp, page, evaluasi, allowNext } = useContext(PembelajaranContext)
    const [ , setJawabanTempState] = jawabanTemp;
    // const [ jawabanState , ] = jawaban;
    const [ pageState , ] = page;
    const [ allowNextState , ] = allowNext;
    const [ evaluasiState , ] = evaluasi;

    const [answers, setAnswers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionElements, setSuggestionElements] = useState([]);
    const [answerElements, setAnswerElements] = useState([]);

    useEffect(() => {
        const suggestionsTemp = [];
        jawaban.forEach(element => {
            suggestionsTemp.push({keyword: element.keyword, word: element.word})
        });
        setSuggestions(suggestionsTemp);
        setAnswers([]);
    }, [allowNextState]);


    // function for setting answer element
    function setAnswer(i) {
        const result = suggestions[i];
        const resultArray = suggestions.filter(element => result != element);
        setSuggestions(resultArray);
        const copyAnswers = Array.from(answers);
        copyAnswers.push(result);
        setAnswers(copyAnswers);

        setJawabanTempState(copyAnswers);
    }

    // function for setting suggestion element
    function setSuggestion(i) {
        // get answers array individual item
        const result = answers[i];
        // get filtered answers result without clicked item
        const resultArray = answers.filter(element => result != element);
        // set answers array
        setAnswers(resultArray);
        // getting a copy from suggestions array
        const copyAnswers = Array.from(suggestions);
        // pushing removed item into the suggestions array
        copyAnswers.push(result);
        // set suggestions array
        setSuggestions(copyAnswers);

        setJawabanTempState(resultArray);
    }

    // function for when suggestion element is removed or added
    useEffect(() => {
        const renders = [];
        suggestions.forEach((element, i) => {
            renders.push(<button data-keyword={element.keyword} className={styles["container-content-one-answer"]} onClick={() => setAnswer(i)}>{element.word}</button>)
        })
        setSuggestionElements(renders);
    }, [suggestions])

    // function for when answer element is removed or added
    useEffect(() => {
        const renders = [];
        answers.forEach((element, i) => {
            renders.push(<button data-keyword={element.keyword} className={styles["container-content-one-answer"]} onClick={() => setSuggestion(i)}>{element.word}</button>)
        })
        setAnswerElements(renders);
    }, [answers])

    return (
        <div className={styles["container-content-start"]}>
            <h2 className={styles["container-content-one-title-text"]}>Pilih arti yang sesuai dengan soal di bawah</h2>
            <div className={styles["container-content-one-question-header"]}>
                <h3 className={styles["container-content-one-header-question"]}>{soal.isi_soal}</h3>
            </div>
            <div className={styles["container-content-one-content"]}>
                <h5 className={styles["container-content-one-content-guide"]}>Arti:</h5>
                <div className={styles["container-content-one-container"]}>
                    {answerElements}
                </div>
                <hr width="100%" className={styles["container-content-one-line"]}/>
                <div className={styles["container-content-one-container"]}>
                    {suggestionElements}
                </div>
            </div>
        </div>
    );
}






export function ContentPembelajaranEnd({score_akhir, xp}) {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Score Akhir {score_akhir}</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Exp {xp}</p>
        </div>
    )
}