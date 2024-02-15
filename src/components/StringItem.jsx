import React from "react";
import "./styles/GetString.css";

export default function StringItem ({ text }) {
    return (
        <div className="text-item">
        <span>{text}</span>
        </div>
    );
}

