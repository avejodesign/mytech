import React from "react";
import styled from "styled-components";

export const Slide = styled.div`
    h2 {
        font-size: clamp(38px, 4vw, 48px);
        color: white;
        margin-bottom: 45px;
    }   
    
    .swiper {
        overflow: initial;
        clip-path: polygon(400% 0, 400% 100%, 0 100%, 0 0);
    }
    
    .swiper-slide {
        width: 450px;
        height: 470px;
        background: rgba(248, 248, 248, 0.12);
        backdrop-filter: blur(2px);
        z-index: -2;
        padding: 40px;
        color: white;
        border-radius: 16px;
        overflow: hidden;
        
        h3 {
            font-size: clamp(24px, 4vw, 32px);
            margin-bottom: 20px;
        }
        
        p {
            font-size: clamp(14px, 2vw, 18px);
        }
        img {
            position: absolute;
            bottom: -100px;
            right: -50px;
        }
        
        a {
            position: absolute;
            left: 40px;
            bottom: 40px;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.40);
            border-radius: 50px;
            padding: 8px 20px;
        }

        .fade-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            transform: scale(1.4)
        }
    }

    @media (max-width: 768px) {
        .swiper-slide {
            width: 340px;
            height: 380px;
        }
    }

    @media (max-width: 420px) {
        .swiper-slide {
            width: 300px;
            height: 340px;
            padding: 24px;

            img {
                width: 220px;
            }

            a {
                left: 24px;
                bottom: 24px;
            }
        }
    }
`;