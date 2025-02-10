"use client";

import React, { useState, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
    Overlay,
} from "./styles";

export default function PreLoader() {

    // const colorsBar = {
    //     color: "#0A0510",
    //     color: "#140624",
    //     color: "#1B0435",
    //     color: "#250449",
    //     color: "#2D035D",
    //     color: "#35026E",
    //     color: "#3E0281",
    //     color: "#460194",
    //     color: "#5001A7",
    //     color: "#5700B9",
    // }

    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        if (counter === 100) {
            return;
        }
        
        const interval = setInterval(() => {
            setCounter((prev) => {
              let newValue = prev + Math.floor(Math.random() * 5) + 1;
              return newValue > 100 ? 100 : newValue;
            });
        }, Math.floor(Math.random() * 0) + 20); // Atraso entre 200ms e 500ms
      

        return () => clearInterval(interval);
    }, [counter]);

    useGSAP(() => {
        gsap.to(".counter", {
            opacity: 0,
        }, 2);

        gsap.to(".bar", {
            height: 0,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut",
        }, 2);
    });

    

    return (
        <Overlay>
            <p className="counter">{counter}%</p>
            <div className="overlay-box">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </Overlay>
    )
}