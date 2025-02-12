"use client";
import React from 'react';
import { useEffect } from 'react';

import {
    Header,
    Navbar,
    Hero,
} from "./styles";

// Utils
import ParallaxImage from '../../utils/ParallaxImage';
import ShowText from '../../utils/showText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import SplitType from 'split-type';

export default function HeaderComponent() {
    
    useGSAP(() => {
        let split = new SplitType.create(".split-text", { type: "chars" });
		let split2 = new SplitType.create(".split-text2", { type: "lines" });

        gsap.timeline().from(split.chars, {
			y: 500,
			ease: "power4.out",
			duration: 1.5,
			stagger: 0.02,
		}, 0).from(split2.lines, {
			y: 100,
			ease: "power4.out",
			duration: 1,
			stagger: 0.04,
		}, 1).from(".account", {
			opacity: 0,
			y: 400,
			ease: "power4.out",
			duration: 1,
			scale: 0.5,
			rotateX: "100deg",
		}, 1).from(".transactions", {
			opacity: 0,
			y: 400,
			ease: "power4.out",
			duration: 1,
			scale: 0.5,
			rotateX: "100deg",
		}, 1).from(".group-link", {
			opacity: 0,
			y: 300,
			ease: "power4.out",
			duration: 1,
		}, 1).from(".nav-fade", {
			opacity: 0,
			y: -100,
			ease: "power4.out",
			duration: 1,
		}, 1).from("#line-window", {
			ease: "power4.out",
			duration: 2,
			clipPath: "inset(0% 0% 100% 0%)",
		}, 1).from("header", {
			ease: "power4.out",
			duration: 2,
			"--clipPath": "inset(0% 0% 0% 100%)",
		}, 1).from("#blur-01", {
			opacity: 0,
			x: -100,
			ease: "power4.out",
			duration: 1,
		}, 1)
    });


    return (
        <Header>
            <div className="container-main">
                <Navbar>
                    <div className="container nav-fade">
                        <div className="group-nav">
                            <img src="./logo.svg" alt="" />
                            <div className="menu">
                                <ul>
                                    <li className="button--narvi"><span><span>Home</span></span></li>
                                    <li className="button--narvi"><span><span>How to use</span></span></li>
                                    <li className="button--narvi"><span><span>About</span></span></li>
                                    <li className="button--narvi"><span><span>Smart Contract</span></span></li>
                                </ul>
                            </div>
                        </div>
                        <button className="button button--narvi button-contact"><span><span>Contact</span></span></button>
                    </div>
                </Navbar>
                <Hero>
                    <img id="blur-01" src="./blur-01.webp" alt="" />
                    <div className="content">
                        <h1 className="split-text">Connect your company to the world of blockchain</h1>
                        <p className="split-text2">Our platform offers a secure, efficient, and user-friendly experience for connect you company.</p>
                        <div className="group-link">
                            <button className="button button--narvi"><span><span>Get Started</span></span></button>
                            <a href="#play">
                                <img src="./play.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="elements">
                        <div className="element account" parallax-speed={0.2}>
                            <div className="group-content">
                                <div className="content">
                                    <p>Account</p>
                                    <p>$10,561.23</p>
                                    <p>20.5% </p>
                                </div>
                                <a href="#exchange">Exchange</a>
                            </div>

                            <img src="./graphic.png" alt="" />
                        </div>
                        <div className="element transactions" parallax-speed={0.1}>
                            <div className="group-info">
                                <h4>Transactions</h4>
                                <p>View All</p>
                            </div>
                            <div className="list-transactions">
                                <div className="transaction">
                                    <div className="group-content">
                                        <img src="./bitcoin.svg" alt="" />
                                        <div className="content">
                                            <p>You buy Bitcoin</p>
                                            <p>Today</p>
                                        </div>
                                    </div>
                                    <p>$124.02</p>
                                </div>
                                <div className="transaction">
                                    <div className="group-content">
                                        <img src="./bitcoin.svg" alt="" />
                                        <div className="content">
                                            <p>You buy Bitcoin</p>
                                            <p>Today</p>
                                        </div>
                                    </div>
                                    <p>$124.02</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ParallaxImage src="./image-hero.webp" alt="" id="image-hero" clipPath_value="inset(100% 100% 100% 100%)" />
                </Hero>
            </div>
        </Header>
    )
}
