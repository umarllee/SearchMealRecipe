import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import './contentPage.css'
import p1 from './meal1.jpg'
import p2 from './meal2.jpg'
import p3 from './meal3.jpg'
import p4 from './meal4.jpg'

export default function Content() {

    useEffect(() => {
        new Splide('.splide', {
            width: "100%",
            height: "530px",
            type: 'loop',
            arrows: true,
            paginationDirection: false,
            autoplay: 'playing',
            pagination: false,
            drag: 'free',
            focus: 'center',
            perPage: 1,
           
        }).mount();

    }, []);

    return (
        <div className="con">
            <section
                id="image-carousel"
                className="splide favSlider"
                aria-label="Beautiful Images"
            >
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide" data-splide-interval="3000"> <img src={p1} alt="meal" /> </li>
                        <li className="splide__slide" data-splide-interval="3000"> <img src={p4} alt="meal" /> </li>
                        <li className="splide__slide" data-splide-interval="3000"> <img src={p3} alt="meal" /> </li>
                        <li className="splide__slide" data-splide-interval="3000"> <img src={p2} alt="meal" /> </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

