import React from "react";
import styled from "styled-components";

export const LogoBusiness = styled.section`
    color: white;
    margin-top: 60px;
    margin-bottom: 120px;

    p {
        font-size: clamp(14px, 4vw, 18px);
        margin-bottom: 25px;
    }

    h3 {
        font-size: clamp(24px, 4vw, 32px);
        margin-bottom: 50px;
    }

    h3 .word {
        overflow: hidden !important;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
        max-width: max-content;     
    }

    .logos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        img {
            object-fit: cover;
            opacity: 0.6;
            cursor: pointer;
            
            &:hover {
                /* transform: translateX(20px) !important; */
                opacity: 1 !important;
            }
        }
    }
/*     
    @media (max-width: 768px) {
        margin-top: 40px;
        margin-bottom: 60px;

        .logos {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
        }
    }

    @media (max-width: 600px) {
        .logos {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;

            img {
                width: 120px;
            }
        }
    } */
`;