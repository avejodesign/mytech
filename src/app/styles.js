import React from "react";
import styled from "styled-components";

export const PreLoader = styled.div`
    pointer-events: none;
    .counter {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        color: #bcbcc4;
        padding: 0.2em 0.4em;
        font-size: 100px;
        font-weight: 600;
        font-family: "Poppins";
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

export const Line = styled.div`
    width: calc(100% - 40px);
    max-width: 1200px;
    border-left: 1px solid rgba(255, 255, 255, 0.20);
    height: 100vh;
    padding: 0 20px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    pointer-events: none;
    clip-path: inset(0% 0% 0% 0%);
`;

export const Main = styled.main`
    overflow: hidden;

    @media (max-width:768px) {
        br {
            display: none !important;
        }
    }
`;

export const Container = styled.section`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Header = styled.header`
    position: relative;
`;




export const Sota = styled.section`
    position: relative;
    .group-content {
        display: flex;
        color: white;
        padding: 150px 0;
    }

    .label {
        min-width: 400px;
        p {
            font-size: clamp(14px, 2vw, 18px);
        }
    }

    .content {
        h2 {
            font-size: clamp(32px, 6vw, 64px);
            white-space: normal;
            margin-bottom: 40px;
        }

        .container-content {
            width: 100%;
            max-width: 60%;
            p {
                font-size: clamp(14px, 2vw, 20px);
                margin-bottom: 50px;
            }
        
        }


    }

    & .color-blur {
        position: absolute;
        top: -300px;
        transform: translateX(-50%);
        left: 50%;
        z-index: -1;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        .group-content {
            flex-direction: column;
            padding: 100px 0;
        }

        .content {

            h2 {
                margin-bottom: 20px;
            }

            .container-content {
                max-width: 100%;

                p {
                    margin-bottom: 30px;
                }
            }
        }

        .color-blur {
            width: 400%;
            top: -200px;
            transform: translateX(-50%);
            left: 50%;
            z-index: -1;
        }

    }
`;

export const FeaturesBenefits = styled.section`
    padding-bottom: 100px;

    h2 {
        font-size: clamp(28px, 4vw, 48px);
        color: white;
        margin-bottom: 60px;
    }
    .group-features-benefits .group {
        display: grid;
        grid-template-columns: 500px 1fr;
        gap: 40px;
        height: 300px;
        
        .item-fb {
            opacity: 0;
            border-radius: 16px;
            background: rgba(248, 248, 248, 0.05);
            backdrop-filter: blur(16.5px);
            padding: 30px;
            color: white;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;

            h4 {
                font-size: clamp(20px, 4vw, 28px);
                margin-bottom: 10px;
            }

            p {
                font-size: clamp(14px, 4vw, 16px);
            }

            .bg-features {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                object-fit: cover;
                pointer-events: none;
            }

            &:nth-child(1) {
                transform: translateX(-100%);
            }

            &:nth-child(2) {
                transform: translateX(100%);
            }

        }

    }
    
    .group-features-benefits .group:nth-child(2) {
        margin-top: 40px;
        grid-template-columns: 1fr 400px;


        .item-fb {
            &:nth-child(1) {
                transform: translateX(-100%);
            }

            &:nth-child(2) {
                transform: translateX(100%);
                
            }
        }
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;

        h2 {
            margin-bottom: 20px;
        }

        .group-features-benefits .group {
            grid-template-columns: 1fr;
            height: 600px;
            gap: 20px;
        }
        
        .group-features-benefits .group:nth-child(2) {
            margin-top: 20px;
            grid-template-columns: 1fr;
            height: 600px;
            gap: 20px;
        }
    }
`;

export const FeesExchange = styled.section`
    display: grid;
    grid-template-columns: 45% 1fr;
    border-top: 1px solid rgba(255, 255, 255, 0.20);
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    .exchange-info {
        position: relative;
        overflow: hidden !important;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            z-index: 10;
        }
    }

    .box {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: inset(0% 0% 0% 0%);
        }
    }


    .content {
        padding: 130px 100px;

        h2 {
            font-size: clamp(36px, 4vw, 58px);
            margin-bottom: 30px;
        }

        p:nth-child(1) {
            font-size: clamp(14px, 4vw, 20px);
            margin-bottom: 20px;
        }

        p:nth-child(3) {
            font-size: clamp(14px, 4vw, 20px);
            opacity: 0.6;
            margin-bottom: 40px;
        }

    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;

        .content { 
            padding: 60px 40px;    
        }

        .exchange-info {
            padding: 20px;
            img#info-img {
                width: 500px;
                padding: 20px;
            }
        }

    }

    @media (max-width: 460px) {
        .content { 
            padding: 40px 20px;

        }

        .exchange-info {

            img#info-img {
                width: 100%;
                padding: 20px;
            }
        }
    }
`;

export const FaqContent = styled.section`
    padding: 100px 0;
    position: relative;
    
    img {
        position: absolute;
        top: -600px;
        left: 0;
        width: 100%;

        z-index: -1;
        pointer-events: none;
    }

    h2 {
        font-size: clamp(28px, 4vw, 48px);
        margin-bottom: 40px;
        
        & .line > span {
            display: inherit !important;
        }
    }

    .accordion {

        h3 {
            font-size: clamp(18px, 4vw, 28px);
            text-transform: initial;
        }

        .item {
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.23);
            background: rgba(248, 248, 248, 0.05);
            backdrop-filter: blur(16.5px);
            padding: 20px;
            margin-bottom: 20px;
            

            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                
                span {
                    height: 60px;
                    width: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.20);
                    background: rgba(255, 255, 255, 0.11);
                    cursor: pointer;
                    
                    svg {
                        transition: all 0.4s cubic-bezier(0,1,0,1);
                        height: 30px;
                    }

                    &.show svg {
                        transform: rotate(180deg);
                        transition: all 0.4s cubic-bezier(0,1,0,1);
                    }
                }
            }
            
            .content {
                padding-right: 300px;
                max-height: 0;
                overflow: hidden;
                transition: all 0.4s cubic-bezier(0,1,0,1);
                
            }
    
            .content.show {
                height: auto;
                max-height: 9999px;
                transition: all 0.4s cubic-bezier(1, 0, 1, 0);
            }
        }

    }

    @media (max-width: 768px) { 
        padding: 50px 0;
        .item {
            span {
                width: 50px !important;
                height:50px !important;
            }
        }

        img {
            top: -200px;
            width: 200%;
        }
    }
`;

