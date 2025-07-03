'use client';
import Script from "next/script";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { img: "../img/About Us/intro.jpeg", caption: " At WeddingLy, we’re here to turn your dream wedding into a reality,offering everything you need to plan the perfect day, all in one place.!" },
        { img: "../img/About Us/photographer2.jpg", caption: "Our skilled photographers capture the magic of every moment, ensuring your memories last forever in stunning detail." },
        { img: "../img/About Us/gown.jpg", caption: "Find the gown that makes you feel like the bride you’ve always dreamed of, with designs that capture timeless beauty." },
        { img: "../img/About Us/suit.jpg", caption: "Make a statement with a groom’s suit that’s tailored to perfection, ensuring you look as sharp as the moment deserves." },
        { img: "../img/About Us/bouquet.jpg", caption: " From classic to contemporary, our bespoke bouquets add the perfect touch of floral elegance to your bridal look.." },
        { img: "../img/About Us/veil2.jpg", caption: "Complete your bridal look with a veil that adds the perfect touch of elegance and romance to your wedding day ensemble." },
        { img: "../img/About Us/HairStylist.jpg", caption: "Whether you want classic or modern, our hair stylists bring your vision to life, making sure you feel as beautiful as you look." },
        { img: "../img/About Us/Makeup.jpeg", caption: " Our makeup artists are here to enhance your natural beauty, giving you a flawless, radiant look on your wedding day." },
        { img: "../img/About Us/VideoGrapher.jpeg", caption: "Relive every emotion from your special day with cinematic wedding videography that tells your love story in motion." },
        { img: "../img/About Us/WeddingPlanner.avif", caption: "Discover a wide range of beautiful wedding venues, each offering a unique setting to make your day unforgettable." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div id="main">
            <title>About Us</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/css/bootstrap.css" rel="stylesheet" />
            <link href="/css/weddingly.css" rel="stylesheet" />
            <link href="/css/AboutUS.css" rel="stylesheet" />
            <link rel="icon" href="/img/logo.png" type="image/png" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div className={`slides ${currentSlide === index ? "active" : ""}`} key={index}>
                        <img src={slide.img} style={{ width: "100%", height: "100%" }} />
                        <div className="caption">{slide.caption}</div>
                    </div>
                ))}
                
                <a className="prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
                    ❮
                </a>
                <a className="next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
                    ❯
                </a>
            </div>

            <Script src="../js/slideshow.js" />
        </div>
    );
}










