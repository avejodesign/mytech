import React from "react";
import styled from "styled-components";

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
