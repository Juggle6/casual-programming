import './fancy.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {useEffect, useRef} from 'react';

export default function FancyPage() {
    useEffect(() => {
        gsap.fromTo('#main-title', {opacity: 0, xPercent: -10}, {opacity: 1, xPercent: 0, scrollTrigger: {
            trigger: '.section.title',
            start: 'top top',
            end: '+=500',
            pin: true,
            scrub: 1
        }})
    }, [])

    return (
        <>
            <section className="section title">
                <div className="section contents">
                    <h1 id="main-title">WHAT IS THE KEY TO GOOD DESIGN?</h1>
                </div>
            </section>
            <section className="section planning">
                <div className="section contents">
                    <h2 id="good-planning">GOOD PLANNING</h2>
                    <div className="plan-well">
                        <h3 id="structured-plan">CREATE A STRUCTURED PLAN</h3>
                        <h3 id="justify-everything">JUSTIFY EVERYTHING</h3>
                        <h3 id="make-cool-stuff">MAKE THE COOLEST STUFF</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
