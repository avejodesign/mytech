"use client"

import { 
    Faq
} from "./styles";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import AccordionItem from "./accordionItem";

export default function Accordion() {

    useGSAP(() => {
        gsap.from(".accordion .item", {
			opacity: 0,
			y: -100,
			ease: "power4.out",
			duration: 2,
			stagger: 0.3,
			scrollTrigger: {
                trigger: ".accordion",
                start: "top bottom",
                scrub: false,
            }
		});
    });

    return (
        <>  
            <Faq>
                <div className="accordion">
                    {questionsAnswers.map((item, i) => (
                        <AccordionItem key={i} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </Faq>
        </>
    )
}

const questionsAnswers = [
    {
      open: false,
      question: "What is a cryptocurrency exchange?",
      answer:
        "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
    },
    {
        open: false,
        question: "How does the exchange integration work on my platform?",
        answer:
          "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
      },
      {
        open: false,
        question: "What are the requirements for integration?",
        answer:
          "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
      },
      {
        open: false,
        question: "How long does it take to integrate an exchange?",
        answer:
          "A cryptocurrency exchange is a platform that allows the purchase, sale, and exchange of cryptocurrencies. Users can exchange digital currencies for other digital currencies or for fiat currencies such as the dollar or euro.",
      },

];
