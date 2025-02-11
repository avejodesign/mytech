import React from 'react'

import { FeaturesBenefits } from './styles';

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Utils
import ShowText from '@/app/utils/showText';

export default function FeaturesBenefitsComponent() {

    useGSAP(() => {
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
    });

  return (
    <FeaturesBenefits>
        <ShowText as="h2" text="Features and Benefits" type="chars" duration="1" stagger="0.02" />
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
  )
}
