"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Styles
import { FooterContainer } from "./styles.js";

export default function Footer() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".group-footer",
                start: "top bottom",
                scrub: false,
            }
        }).from(".links", {
			opacity: 0,
			x: -100,
			ease: "power4.out",
			duration: 2,
			stagger: 0.3,
		}, 1).from("#logo-giant", {
            opacity: 0,
			y: 100,
			ease: "power4.out",
			duration: 1,
        }, 2);
    });

    return (
        <FooterContainer>
            <div className="container-main">
                <div className="group-footer">
                    <div className="links logo">
                        <img src="./logo-icon.svg" alt="" />
                    </div>
                    <div className="links website-link">
                        <p className="title">Website</p>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">How to use</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Smart Contract</a></li>
                        </ul>
                    </div>
                    <div className="links about-link">
                        <p className=" title">About</p>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Visit</a></li>
                        </ul>
                    </div>
                    <div className="links follow-link">
                        <p className="title">Follow</p>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="links sign-up-email">
                        <p className="title">Sign up for ous newsletter</p>
                        <input type="text" placeholder="E-mail address" />
                    </div>
                </div>

                <img id="logo-giant" src="./logo-giant.svg" alt="" />
                <img id="bubble" src="./bubble-footer.png" alt="" />
            </div>
        </FooterContainer>
    )
}