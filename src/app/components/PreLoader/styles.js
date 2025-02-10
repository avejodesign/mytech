import React from "react";
import styled from "styled-components";

export const Overlay = styled.div`
    pointer-events: none;

    .counter {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #bcbcc4;
        padding: 0.2em 0.4em;
        font-size: 100px;
        font-family: "Neue-Machina";
        z-index: 10000;
    }

    .overlay-box {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        display: flex;

        .bar {
            width: 10vw;
            height: 105vh;
            background: #4301AB;
        }
    }
`;