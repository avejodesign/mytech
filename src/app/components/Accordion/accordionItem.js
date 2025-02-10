"use client"

import { useState } from "react";

export default function AccordionItems({ question, answer}) {
    const [selected, setSelected] = useState(false); 
    return (
        <div className="item">
            <div className="title" >
                <h3>{question}</h3>
                <div className="arrow">
                    <span onClick={() => setSelected(!selected)} className={selected ? "show" : ""}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4975 12.1691L17 18.6575L23.5025 12.1691L25.5 14.1666L17 22.6666L8.5 14.1666L10.4975 12.1691Z" fill="white"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className={selected ? "content show" : "content"}>
                {answer}
            </div>
        </div>
    )
}