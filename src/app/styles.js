import React from "react";
import styled from "styled-components";

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

export const Navbar = styled.nav`
    color: white;
    width: 100%;
    position: relative;
    max-width: 1240px;
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 50px;
        width: 100%;
    }

    @media (max-width: 1400px){
        .container {
            top: 20px;
        }
    }

    .group-nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 60px;
        }

        ul {
            list-style-type: none;
            display: flex;
            gap: 40px;
            
            li {
                span {
                    font-weight: 500 !important;
                }
                cursor: pointer;
            }
        }

    }
    
    
    .button-contact {
        color: white;
        /* backdrop-filter: blur(9.5px); */
        /* border-radius: 20px; */
        border: 2px solid rgba(255, 255, 255, 0.4);

        &::before {
            background: rgba(255, 255, 255,0.1);
        
        }
    }

    @media (max-width: 768px) {
        .group-nav { 
            ul {
                display: none;
            }  
        }
    }

`;

export const Hero = styled.div`
    height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    align-items: center;
    
    &::before {
        content: "";
        position: absolute;
        top: 800px;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        clip-path: var(--clipPath);
    }
    
    #blur-01 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .content {
        h1 {
            font-size: clamp(30px, 6vw, 64px);
            margin-bottom: 20px;
        }
        
        p {
            width: 100%;
            font-weight: 400;
            margin-bottom: clamp(18px, 4vw, 30px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
        }

        .group-link {
            display: flex;
            align-items: center;
            /* justify-content: center; */
            a[href="#get-started"] {
                background: white;
                padding: 8px 40px;
                color: black;
                
                border-radius: 100px;
                margin-right: 20px;
            }
            
            a[href="#play"] {
                border-radius: 100px;
                padding: 8px 20px;
                border: 1px solid rgba(255, 255, 255, 0.40);
            }
        }
        
    }
    
    .box {
        position: absolute;
        right: 0;
        height: 800px;
        width: 40%;
        object-fit: cover;
        z-index: -1;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: inset(0% 0% 0% 0%);
        }
    }
    
    .elements {
        position: relative;
        height: 100%;
        .account {
            width: fit-content;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(44.5px);
            border-radius: 16px;
            border: 1px solid #FFF;
            display: flex;
            padding: 14px;
            position: absolute;
            right: 0px;
            top: 150px;
            perspective: 1000px;
            
            p {
                margin-bottom: 0;
            }
            
            p:nth-child(1) {
                font-size: 14px;
                opacity: 0.6;
            }
            
            p:nth-child(2) {
                font-size: 20px;
                font-weight: 600;
            }
            
            p:nth-child(3) {
                font-size: 14px;
            }
            
            .group-content {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
            }
            
            img {
                position: relative;
                left: 40px;
            }
            
            a[href="#exchange"] {
                color: white;
                padding: 6px 20px;
                font-size: 12px;
                border: 1px solid rgba(255, 255, 255, 0.31);
                border-radius: 30px;
            }
        }
        .transactions {
            width: 380px;
            height: 200px;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(44.5px);
            border-radius: 16px;
            border: 1px solid #FFF;
            padding: 14px;
            position: absolute;
            left: 100px;
            bottom: 100px;
            
            
            p {
                margin-bottom: 0;
            }
            
            .group-info {
                display: flex;
                justify-content: space-between;
                
                p:nth-child(2) {
                    font-size: 14px;
                }
            }
            
            .list-transactions {
                display: flex;
                flex-direction: column;
                gap: 10px;
                position: relative;
                top: 20px;
            }
            
            .transaction {
                display: flex;
                justify-content: space-between;
                background: white;
                border-radius: 10px;
                padding: 16px 20px;
                color: black;
                align-items: center;
                
                img {
                    margin-right: 10px;
                }
                
                p {
                    font-weight: 500;
                }
                
                .group-content {
                    display: flex;
                    
                    
                    .content {
                        p {
                            font-size: 16px;
                            font-weight: 500;
                        }
                        
                        p:nth-child(2) {
                            font-size: 14px;
                            opacity: 0.6;
                        }
                    }
                }
                
            }
        }
        
    }
    
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        /* position: relative; */
        /* .content {
            margin-bottom: 40px;
        } */

        .group-link {
            margin-bottom: 50px;
        }
        
        .elements {
            transform: scale(0.7);
            
            .account {
                top: -220px;
            }

            .transactions {
                bottom: 20px;
                left: -40px;
                
            }
        }

        .box {
            width: 100%;
            top: initial;
            right: initial;
            left:0;
            bottom: 0;
            height: 300px;
        }

    }

    @media (max-width: 490px) {
        .elements {
            transform: scale(0.6);

            .account {
                top: -250px;
                right: -50px;
                left: initial;
            }

            .transactions {
                bottom: 0px;
                left: -60px;
            }
        }
    }
    
`;

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

