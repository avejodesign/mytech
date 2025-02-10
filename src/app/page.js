"use client"
import { useEffect, useRef } from "react";

// CSS Styled Components
import {
	Main,
	Line,
	Container,
	Header,
	Hero,
	Navbar,
	LogoBusiness,
	Sota,
	FeaturesBenefits,
	FeesExchange,
	FaqContent,
} from "./styles";

// GSAP
import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Utils
import ParallaxImage from "./utils/ParallaxImage";

// Components
import OusServices from "./components/OusServices";
import Accordion from "./components/Accordion";
import PreLoader from "./components/PreLoader";

// Utils
import ShowText from "./utils/showText";

// Footer
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
	const container = useRef(null);

	useGSAP(() => {
		let split = new SplitType.create(".split-text", { type: "chars" });
		let split2 = new SplitType.create(".split-text2", { type: "lines" });

		gsap.timeline().from(split.chars, {
			y: 500,
			ease: "power4.out",
			duration: 1.5,
			stagger: 0.02,
		}, 2).from(split2.lines, {
			y: 100,
			ease: "power4.out",
			duration: 1,
			stagger: 0.04,
		}, 3).from(".account", {
			opacity: 0,
			y: 400,
			ease: "power4.out",
			duration: 1,
			scale: 0.5,
			rotateX: "100deg",
		}, 3).from(".transactions", {
			opacity: 0,
			y: 400,
			ease: "power4.out",
			duration: 1,
			scale: 0.5,
			rotateX: "100deg",
		}, 3.2).from(".group-link", {
			opacity: 0,
			y: 300,
			ease: "power4.out",
			duration: 1,
		}, 3).from(".nav-fade", {
			opacity: 0,
			y: -100,
			ease: "power4.out",
			duration: 1,
		}, 3).from("#line-window", {
			ease: "power4.out",
			duration: 2,
			clipPath: "inset(0% 0% 100% 0%)",
		}, 3).from("header", {
			ease: "power4.out",
			duration: 2,
			"--clipPath": "inset(0% 0% 0% 100%)",
		}, 3).from("#blur-01", {
			opacity: 0,
			x: -100,
			ease: "power4.out",
			duration: 1,
		}, 3)

		gsap.from(".button--narvi", {
			opacity: 0,
			x: 200,
			ease: "power4.out",
			duration: 2,
			scrollTrigger: {
				trigger: ".button--narvi",
				start: "top bottom",
				scrub: false,
			}
		});

		gsap.to(".group-features-benefits .group .item-fb", {
			opacity: 1,
			x: 0,
			ease: "power4.out",
			duration: 2,
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".group-features-benefits .group .item-fb",
				start: "top bottom",
				scrub: false,
			}
		});

		gsap.from(".logos img", {
			opacity: 0,
			x: -100,
			ease: "power4.out",
			duration: 2,
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".logos img",
				start: "top bottom",
				scrub: false,
			}
		});


	}, [container]);

	return (
		<ReactLenis root>
			<PreLoader />
			<Main ref={container}>
				<Line id="line-window" />
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
							<img id="blur-01" src="./blur-01.png" alt="" />
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
							<ParallaxImage src="./image-hero.png" alt="" id="image-hero" clipPath_value="inset(100% 100% 100% 100%)" delay="2"/>
						</Hero>
					</div>
				</Header>
				<div className="container-main">
					<LogoBusiness>
						<ShowText as="p" text="Trusted by Leading Companies Worldwide" ref={container} type="chars" duration="0.5" stagger="0.01" />
						<ShowText as="h3" text="Used by the world's most average companies" ref={container} duration="1" stagger="0.01" />
						<div className="logos">
							<img src="./logo-01.png" alt="" />
							<img src="./logo-02.png" alt="" />
							<img src="./logo-03.png" alt="" />
							<img src="./logo-04.png" alt="" />
							<img src="./logo-05.png" alt="" />
						</div>
					</LogoBusiness>
				</div>
				<div className="container-main">
					<OusServices ref={container} />
				</div>
				<Sota>
					<div className="container-main">
						<div className="group-content">
							<div className="label">
								<ShowText as="p" text="Unbreakable Protection" ref={container} type="chars" duration="1" stagger="0.01" />
							</div>
							<div className="content">
								<ShowText as="h2" text="State of the art encryption to <br/> protect your data" ref={container} duration="1" stagger="0.02" />
								<div className="container-content">
									<ShowText
										as="p"
										text="Our advanced encryption methods ensure that your sensitive information is protected from unauthorized access and cyber threats. By utilizing the latest in encryption technology, we provide robust security solutions that safeguard your data and maintain the integrity of your digital transactions."
										ref={container}
										type="chars"
										duration="1"
										stagger="0.005"
									/>
									<p></p>
								</div>
								<button className="button button--narvi"><span><span>Get Started</span></span></button>
							</div>
						</div>
						<img className="color-blur" src="./layer-sota.png" alt="" />
					</div>
				</Sota>
				<div className="container-main">
					<FeaturesBenefits>
						<ShowText as="h2" text="Features and Benefits" ref={container} type="chars" duration="1" stagger="0.02" />
						<h2></h2>
						<div className="group-features-benefits">
							<div className="group">
								<div className="item-fb">
									<img className="bg-features" src="./bg-features-01.png" alt="" />
									<div className="content">
										<h4>User-Friendly <br />Interface</h4>
										<p>Navigate our intuitive platform with ease, whether you're a seasoned trader or a newcomer</p>
									</div>
									<div className="icon">
										<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 0V35.3554H24.9477V41.9999H35.533V35.3554H41.9999V0H0ZM9.4882 2.46093H39.5389V6.64451H9.4882V2.46093ZM2.46101 2.46093H7.02735V6.64451H2.46101V2.46093ZM2.46101 9.10544H39.5389V32.8944H35.533V16.9401L30.2403 11.0594L24.9477 16.9401V32.8944H2.46101V9.10544ZM30.2403 14.7381L33.0629 17.8743H27.4177L30.2403 14.7381ZM27.4087 20.3353H33.0719V34.1229H27.4087V20.3353ZM27.4087 36.5837H33.0719V39.5389H27.4087V36.5837Z" fill="white" />
											<path d="M21 15.1349H7V17.5958H21V15.1349ZM21 20.3848H7V22.8458H21V20.3848ZM14.875 25.6348H7V28.0957H14.875V25.6348Z" fill="white" />
										</svg>
									</div>
								</div>
								<div className="item-fb">
									<img className="bg-features" src="./bg-features-02.png" alt="" />
									<div className="content">
										<h4>Advanced Security</h4>
										<p>Your assets are protected with top-tier security protocols, including multi-factor authentication and cold storage</p>
									</div>
									<div className="icon">
										<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M34.4939 5.34778C30.5152 4.63477 26.8512 2.46192 25.0212 1.23022C23.8256 0.425414 22.4351 0 20.9999 0C19.5647 0 18.1742 0.425414 16.9786 1.23022C15.1487 2.46192 11.4847 4.63485 7.50599 5.34786C5.14956 5.77008 3.43921 7.80897 3.43921 10.1957V20.0976C3.43921 23.3687 4.35435 26.5575 6.15928 29.5754C7.57129 31.9363 9.52781 34.1928 11.9743 36.282C16.0879 39.795 20.1613 41.6269 20.3326 41.7031L20.9999 42L21.6673 41.7031C21.8387 41.6269 25.912 39.795 30.0256 36.282C32.472 34.1928 34.4286 31.9363 35.8406 29.5754C37.6456 26.5575 38.5607 23.3687 38.5607 20.0976V10.1956C38.5607 7.80888 36.8504 5.77 34.4939 5.34778ZM35.2782 20.0975C35.2782 24.9743 32.8145 29.5618 27.9555 33.7331C25.131 36.1577 22.2633 37.7381 21 38.3796C18.096 36.9041 6.72153 30.4606 6.72153 20.0976V10.1956C6.72153 9.40029 7.29492 8.72025 8.08497 8.57866C12.6556 7.75958 16.7674 5.329 18.8115 3.95317C19.4634 3.51438 20.2202 3.2824 20.9999 3.2824C21.7796 3.2824 22.5363 3.51438 23.1882 3.95325C25.2324 5.32908 29.3441 7.75966 33.9147 8.57883C34.7047 8.72041 35.2782 9.40037 35.2782 10.1957V20.0975Z" fill="white" />
											<path d="M18.4582 24.1525L12.8489 18.9011L10.6055 21.2972L18.6697 28.847L31.4974 14.4625L29.0477 12.2779L18.4582 24.1525Z" fill="white" />
										</svg>

									</div>
								</div>
							</div>
							<div className="group">
								<div className="item-fb">
									<img className="bg-features" src="./bg-features-03.png" alt="" />
									<div className="content">
										<h4>Real-Time Market Data</h4>
										<p>Stay ahead with real-time updates and in-depth market analysis</p>
									</div>
									<div className="icon">
										<img src="./analytics-icon.svg" />
									</div>
								</div>
								<div className="item-fb">
									<img className="bg-features" src="./bg-features-04.png" alt="" />
									<div className="content">
										<h4>Smart Contract Integration</h4>
										<p>Leverage the power of smart contracts for secure and transparent transactions.</p>
									</div>
									<div className="icon">
										<img src="./smart-contract.svg" />
									</div>
								</div>
							</div>
						</div>
					</FeaturesBenefits>
				</div>
				<FeesExchange>
					<div className="exchange-info">
						<ParallaxImage src="./background-fees.png" id="bg-fee" alt="" clipPath_value="inset(100% 100% 100% 100%)" />
						<img src="./exchange-info.png" id="info-img" alt="" />
					</div>
					<div className="content">
						<ShowText as="p" text="Encourages users to transact more frequently" stagger="0.005" duration="1" />
						<ShowText as="h2" text="Competitive <br/> fees based on <br/> exchange <br/> volume" stagger="0.02" duration="1" />
						<ShowText as="p" text="Highlight different use cases such as escrow <br/> services, supply chain management, and more." stagger="0.005" duration="1" />
						<button className="button button--narvi"><span><span>Get started</span></span></button>
					</div>
				</FeesExchange>
				<FaqContent>
					<img src="./background-faq.png" alt="" />
					<div className="container-main">
						<ShowText as="h2" text="Popular questions <br/>about blockchain" stagger="0.02" duration="1" />
						<div className="faq">
							<Accordion />
						</div>
					</div>
				</FaqContent>
				<Footer />
			</Main>
		</ReactLenis>
	)
}
