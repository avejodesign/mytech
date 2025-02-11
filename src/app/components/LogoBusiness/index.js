import React from 'react'

import { LogoBusiness } from './styles';

import ShowText from '../../utils/showText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function LogoBusinessComponent() {

    useGSAP(() => {
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
    })

    return (
        <LogoBusiness>
            <ShowText as="p" text="Trusted by Leading Companies Worldwide" type="chars" duration="0.5" stagger="0.01" />
            <ShowText as="h3" text="Used by the world's most average companies" duration="1" stagger="0.01" />
            <div className="logos">
                <img src="./logo-01.png" alt="" />
                <img src="./logo-02.png" alt="" />
                <img src="./logo-03.png" alt="" />
                <img src="./logo-04.png" alt="" />
                <img src="./logo-05.png" alt="" />
            </div>
        </LogoBusiness>
    )
}
