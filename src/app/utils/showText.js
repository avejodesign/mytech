"use client"

import { useRef, useEffect} from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import SplitType from "split-type";


export default function ShowText({ 
    ref,
    text,
    as: Component  = "div",
    className = "",
    type,
    stagger,
    duration,
    delay = "",
    ...props
}) {

    const containerRef = useRef(null);
    
    useGSAP(() => {
        if(type == "lines") {
            let split = new SplitType.create(containerRef.current, { type: "lines" });
            gsap.from(split.lines, {
                delay: delay,
                y: 200,
                ease: "power4.out",
                duration: duration,
                stagger: stagger,
                scrollTrigger: {
                    trigger: split.lines,
                    start: "top bottom",
                    scrub: false,
                }
            });

            return;
        } if (type == "words") {
            console.log(type)
            let split = new SplitType.create(containerRef.current, { type: "words" });
            gsap.from(split.words, {
                delay: delay,
                y: 200,
                ease: "power4.out",
                duration: duration,
                stagger: stagger,
                scrollTrigger: {
                    trigger: split.words,
                    start: "top bottom",
                    scrub: false,
                }
            });

            return;
        }

        let split = new SplitType.create(containerRef.current, { type: "chars" });

        gsap.from(split.chars, {
            delay: delay,
            y: 200,
            ease: "power4.out",
            duration: duration,
            stagger: stagger,
            scrollTrigger: {
                trigger: split.chars,
                start: "top bottom",
                scrub: false,
            }
        });

        
    }, [ref, containerRef]);

    return (
        <Component 
            ref={containerRef}
            className={className}
            {...props}
        >

            {text.split("<br/>").map((line, index) => (
                <span key={index}>
                    {line}
                    {index < text.split("<br/>").length - 1 && <br />}
                </span>
            ))}
        </Component>
    )
}