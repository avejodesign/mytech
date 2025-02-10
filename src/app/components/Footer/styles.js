import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top: 1px solid rgba(255, 255, 255, 0.20);
    padding: 50px 0;
    position: relative;

    .group-footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;      
    } 

    .links {
        .title {
            font-size: 20px;
            font-weight: 500;
            line-height: 150%; 
            margin-bottom: 26px;
        }

        ul {
            list-style-type: none;

            li {
                margin-bottom: 20px;
                transition: all 0.2s ease;
                width: fit-content;
                
                a {
                    opacity: 0.6;
                    color: white;
                    font-size: 16px;
                    
                    &:hover {
                        opacity: 1;
                    }
                }
                
                
                &:hover {
                    transform: translateX(4px);
                    transition: all 0.2s ease;
                }
            }
        }

        input {
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: none;
            padding: 12px 20px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            font-family:"Poppins";
            color: white;
        }
    }

    img#logo-giant {
        position: relative;
        bottom: -100px;
        width: 100%;
    }

    img#bubble {
        position: absolute;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: -1;
    }

    @media (max-width: 768px) {
        .group-footer {
            grid-template-columns: 1fr;   
            gap: 30px 0;  

            .logo {
                /* margin-bottom: 40px; */
            }
        } 

        img#logo-giant { 
            bottom: -80px;
        }

        img#bubble { 
            bottom: -100px;
        }
    }

    @media (max-width: 490px) {
        img#logo-giant { 
            bottom: -60px;
        }
    }
`;