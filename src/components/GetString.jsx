import React, { useState } from "react";
import StringItem from "./StringItem";
import "./styles/GetString.css";

export default function GetString(){

    const [words, setWords] = useState([]);
    const [inputWord, setInputWord] = useState("");

    const handleInputChange = (e) => {
        setInputWord(e.target.value);
    };

    const addText = () => {
        if (inputWord.trim() !== "") {
        setWords([...words, inputWord]);
        setInputWord("");
        }
    };

    return (
        <div className="text-container">
        <h2>Text</h2>
        <div className="input-container">
            <input
            type="text"
            value={inputWord}
            onChange={handleInputChange}
            placeholder="Введіть текст"
            />
            <button onClick={addText}>Додати</button>
        </div>

        <div>
            {words.map((word, index) => (
            <StringItem
                key={index}
                text={word}
            />
            ))}
        </div>
        </div>
    );
}

