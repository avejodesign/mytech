"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import { 
    Slide,
} from "./styles";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Utils
import ShowText from '@/app/utils/showText';

export default function OusServices({ ref }) {

    useGSAP(() => {

        gsap.from(".mySwiper .swiper-slide", {
			opacity: 0,
			x: 100,
			ease: "power4.out",
			duration: 1,
			stagger: 0.5,
			scrollTrigger: {
                trigger: ".swiper-slide",
                start: "top bottom",
                scrub: false,
            }
		});

    }, [ref]);

    return (
        <>
            <Slide>
                <ShowText as="h2" text="Ous services" duration="1" stagger="0.02" />

                <div className="slide-swiper">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        className="mySwiper"
                        breakpoints={{
                            768: {
                              spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="./consulting-image.png" alt="" />
                            <img className="fade-layer" src="./layers-services-01.png" alt="" />
                            <div className="content">
                                <h3>Consultation and Needs Assessment</h3>
                                <p>Understanding the specific needs of the company and defining project requirements.</p>
                            </div>
                            <a href="" className="button--narvi"><span><span>See more</span></span></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./development-image.png" alt="" />
                            <img className="fade-layer" src="./layers-services-02.png" alt="" />
                            <div className="content">
                                <h3>Development and Integration</h3>
                                <p>Creating a tailor-made exchange platform adapted to the specific needs of the company.</p>
                            </div>
                            <a href="" className="button--narvi"><span><span>See more</span></span></a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./defi-nft-image.png" alt="" />
                            <img className="fade-layer" src="./layers-services-03.png" alt="" />
                            <div className="content">
                                <h3>DeFi and NFT Consultancy</h3>
                                <p>Assisting with the integration of DeFi (Decentralized Finance) products into the platform.</p>
                            </div>
                            <a href="" className="button--narvi"><span><span>See more</span></span></a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Slide>
        </>
    )
}