import React, { useState, useEffect, useRef } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { gsap } from 'gsap';
import { AnimatedHeading, AnimatedText } from '../AnimationLib';
import KnowMore from '../KnowMore';

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slideRefs = useRef([]);
    const contentRefs = useRef([]);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: "./iol-images/refining-pipelines-and-marketing.webp",
            title: "REFINING, PIPELINES AND MARKETING",
            text: "As one of India’s foremost downstreamenergy players, we advanced our missionto deliver energy solutions that are reliable, efficient and future-ready.",
            buttonText: "Read More"
        },
        {
            id: 2,
            image: "./iol-images/natural-gas.webp",
            title: "NATURAL GAS",
            text: "With India pivoting towards a gas-based economy, IndianOil reinforced its position as a key enabler.",
            buttonText: "Read More"
        },
        {
            id: 3,
            image: "/iol-images/petrochemicals.webp",
            title: "PETROCHEMICALS",
            text: "2024-25 marked another leap in our journey to become a petrochemical powerhouse.",
            buttonText: "Read More"
        },
        {
            id: 4,
            image: "/iol-images/petrochemicals.webp",
            title: "EXPLORATION AND PRODUCTION (E&P)",
            text: "In alignment with India’s energy independence goals, we intensified upstream cactivities to build a balanced and resilient portfolio.",
            buttonText: "Read More"
        },
        {
            id: 5,
            image: "/iol-images/Alternative-energy-and-other-businesses.webp",
            title: "ALTERNATIVE ENERGY AND OTHER BUSINESSES",
            text: "As India advances toward Net-Zero, IndianOil is leading the transition by diversifying into renewable energy, biofuels, green hydrogen, sustainable aviation fuel and waste-to-energy.",
            buttonText: "Read More"
        }
    ];

    // Auto-play functionality
    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 6500);
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [isHovered, currentSlide]);

    // Animation functions
    const animateSlideTransition = (direction = 'next') => {
        const currentSlideElement = slideRefs.current[currentSlide];
        const currentContent = contentRefs.current[currentSlide];

        if (currentSlideElement && currentContent) {
            // Animate current slide out
            gsap.to(currentSlideElement, {
                x: direction === 'next' ? '-100%' : '100%',
                duration: 1,
                ease: "power2.inOut"
            });

            // Animate content out with parallax effect
            gsap.to(currentContent.children, {
                x: direction === 'next' ? -100 : 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    };

    const animateSlideIn = (slideIndex) => {
        const newSlideElement = slideRefs.current[slideIndex];
        const newContent = contentRefs.current[slideIndex];

        if (newSlideElement && newContent) {
            // Set initial position
            gsap.set(newSlideElement, { x: '100%' });
            gsap.set(newContent.children, { x: 100, opacity: 0 });

            // Animate slide in
            gsap.to(newSlideElement, {
                x: '0%',
                duration: 1,
                ease: "power2.inOut"
            });

            // Animate content in with stagger and parallax
            gsap.to(newContent.children, {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                delay: 0.3,
                ease: "power2.out"
            });
        }
    };

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % slides.length;
        animateSlideTransition('next');

        setTimeout(() => {
            setCurrentSlide(nextIndex);
        }, 200);
    };

    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        animateSlideTransition('prev');

        setTimeout(() => {
            setCurrentSlide(prevIndex);
        }, 200);
    };

    const goToSlide = (index) => {
        if (index !== currentSlide) {
            const direction = index > currentSlide ? 'next' : 'prev';
            animateSlideTransition(direction);

            setTimeout(() => {
                setCurrentSlide(index);
            }, 200);
        }
    };

    useEffect(() => {
        animateSlideIn(currentSlide);
    }, [currentSlide]);

    // Initialize slide positions
    useEffect(() => {
        slides.forEach((_, index) => {
            if (slideRefs.current[index]) {
                gsap.set(slideRefs.current[index], {
                    x: index === currentSlide ? '0%' : '100%'
                });
            }
        });
    }, []);

    return (
        <div className="relative">

            <div className='text-center mb-8 px-4'>
                <AnimatedHeading
                    level={1}
                    duration={1}
                    className='text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-[#1c559d] mb-2'
                    splitBy="chars"
                >
                    Our Businesses
                </AnimatedHeading>

                <AnimatedText
                    animation='slideUp'
                    delay={0.1}
                    className='text-2xl md:text-3xl lg:text-4xl font-thin text-gray-600 leading-tight mb-2 px-2'
                >
                    A Holistic View of
                    Our Portfolio
                </AnimatedText>
                <AnimatedText
                    animation='slideUp'
                    delay={0.1}
                    className='text-lg md:text-xl lg:text-2xl text-gray-600  max-w-4xl mx-auto px-4'
                >
                    IndianOil continues to accelerate its transformation into an
                    integrated energy major by scaling core strengths and seizing
                    opportunities in emerging energy domains.
                </AnimatedText>
            </div>
            {/* Google Fonts */}
            {/* <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700&display=swap" rel="stylesheet" /> */}

            <section
                ref={containerRef}
                className="relative w-full h-[850px] overflow-hidden bg-[#1a1a2e]"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Slides Container */}
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            ref={(el) => (slideRefs.current[index] = el)}
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 z-10"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.4), rgba(26, 26, 46, 0.9))'
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-20 flex items-center justify-start h-full">
                                <div className="max-w-[1200px] mx-auto px-4 w-full">
                                    <div
                                        ref={(el) => (contentRefs.current[index] = el)}
                                        className="max-w-[690px] text-left text-white"
                                    >
                                        {/* Title */}
                                        <h2
                                            className="md:text-6xl text-3xl font-semibold leading-[1.1] mb-4 capitalize"
                                            style={{
                                                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.6)',
                                                // fontSize: 'clamp(60px, 8vw, 100px)'
                                            }}
                                        >
                                            {slide.title}
                                        </h2>

                                        {/* Text */}
                                        <p
                                            className="text-2xl font-medium opacity-85 mb-8 text-[#f0f0f0]"
                                            style={{
                                                textShadow: '1px 2px 4px rgba(0, 0, 0, 0.6)',
                                                // fontSize: 'clamp(24px, 3vw, 32px)'
                                            }}
                                        >
                                            {slide.text}
                                        </p>

                                        {/* Button */}
                                        <div>
                                            <KnowMore to={"/our-businesses"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className={`absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-[#f0f0f0] bg-transparent text-[#f0f0f0] flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-12'
                        } hover:bg-[#f0f0f0] hover:text-[#1a1a2e]`}
                >
                    <LuChevronLeft size={20} />
                </button>

                <button
                    onClick={nextSlide}
                    className={`absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 rounded-full border-2 border-[#f0f0f0] bg-transparent text-[#f0f0f0] flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-12'
                        } hover:bg-[#f0f0f0] hover:text-[#1a1a2e]`}
                >
                    <LuChevronRight size={20} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                ? 'bg-white opacity-100'
                                : 'bg-white opacity-40 hover:opacity-70'
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;