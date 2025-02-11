"use client"
import { useEffect, useRef,useState } from "react";

// CSS Styled Components
import {
	PreLoader,
	Main,
	Line,
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Utils
import ParallaxImage from "./utils/ParallaxImage";

// Components
import HeaderComponent from "./components/Header";
import OusServices from "./components/OusServices";
import Accordion from "./components/Accordion";
import LogoBusinessComponent from "./components/LogoBusiness";
import FeaturesBenefitsComponent from "./components/FeaturesBenefits";

// Utils
import ShowText from "./utils/showText";

// Footer
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
	const container = useRef(null);
	const [counter, setCounter] = useState(0);
	const [isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        if (counter === 100) {
			return;
        }
        
        const interval = setInterval(() => {
			setCounter((prev) => {
				let newValue = (prev + Math.floor(Math.random() * 5) + 1);
				return newValue > 100 ? 100 : newValue;
            });
        }, Math.floor(Math.random() * 0) + 20); // Atraso entre 200ms e 500ms
		
        return () => clearInterval(interval);
    }, [counter]);
	
    useGSAP(() => {
		gsap.to(".counter", {
			opacity: 0,
        }, 1.5);
		
        gsap.to(".bar", {
			height: 0,
            stagger: {
				amount: 0.5,
            },
            ease: "power4.inOut",
			onComplete: () => {
				setIsLoading(false);
			}
        }, 2);

    });

	return (

		<ReactLenis root>
			{
				isLoading ? (
					<PreLoader> 
						<p className="counter">{counter + "%"}</p>
						<div className="overlay-box">
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
					</PreLoader>
				): (
					<Main ref={container}>
						<Line id="line-window" />
						<HeaderComponent />
						<div className="container-main">
							<LogoBusinessComponent />
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
							<FeaturesBenefitsComponent />
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
				)
			}
		</ReactLenis>
	)

	// return isLoading ? (
	//
}
