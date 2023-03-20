import "react-tooltip/dist/react-tooltip.css";
import React from "react";
import styles from "../../component/belajar/bab.module.css";
import {Tooltip} from "react-tooltip";

export default function Bab({v, index, unitIndex, unitColor, unitLength}) {
    return (
        ((v.state) ? 
            <>
                <Tooltip
                    className={styles["tooltip"]}
                    place="bottom"
                    anchorSelect={`button[data-index="${index}"]`}
                    clickable
                    openOnClick
                    style={{backgroundColor: unitColor}}
                >
                    <div 
                        className={styles["tooltip-container"]}
                    >
                        <p className={styles["tooltip-description"]}>Pelajaran {unitIndex} ke {index+1}</p>
                        <a 
                            className={styles["tooltip-link"]} 
                            href={`/pembelajaran/${v.idUnit}`}
                            style={{color: unitColor}}
                        >
                            Belajar
                        </a>
                    </div>
                </Tooltip>
                <button
                    data-index={index}
                    className={styles.chapter}
                    style={{ backgroundColor: "#58CC02"}}>
                    <img src={(v.nextIdState || index == unitLength-1) ? "/icons/star.svg" : "/icons/belajar-unlocked.svg"} className={styles["chapter-img"]} />
                </button>
            </>
        :
        <p
            className={[styles.chapter, styles["chapter-disable-click"]].join(" ")}
            style={{ backgroundColor: "#878787" }}>
            <img src={"/icons/belajar-locked.svg"} className={styles["chapter-img"]} />
        </p>)
    )
}