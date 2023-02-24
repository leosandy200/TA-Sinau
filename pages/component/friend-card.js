import React, { useState } from "react";
import styles from '../../styles/komponen/friend-card.module.css'

export function FriendCard() {
    const [selection, setSelection] = useState(0)
    const [items, setItems] = useState([]);

    function isSelected(value) {
        return (selection == value);
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["container-buttons"]}>
                <button 
                className={styles["container-button"]} 
                aria-checked={isSelected(0)}
                onClick={setSelection(0)}>
                    Mengikuti
                </button>
                <button 
                className={styles["container-button"]} 
                aria-checked={isSelected(1)}
                onClick={setSelection(1)}>
                    Pengikut
                </button>
            </div>
            <div className={styles["container-card-available"]}>
                <FriendCards items={items}/>
            </div>
        </div>
    )
}

function FriendCards({items}) {
    if (items?.length <= 0) {
        return (
            <div className={styles["container-card-error"]}>
                <img/>
                <p>Belajar lebih seru dan efektif saat kamu terhubung dengan yang lain</p>
            </div>
        )
    }

    let components = [];
    items.forEach(element => {
        components.push((
            <div>{element}</div>
        ))
    })

    return (
        <div className={styles["container-card-available"]}>
            {components}
        </div>
    )
}