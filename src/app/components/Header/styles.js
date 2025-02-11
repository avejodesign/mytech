import React from "react";
import styled from "styled-components";

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
            font-size: clamp(30px, 6vw, 60px);
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