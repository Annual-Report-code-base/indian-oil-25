import React from 'react';
import Slider from 'react-slick';
import { LuChevronLeft, LuChevronRight, LuArrowUpRight } from 'react-icons/lu';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatedHeading, AnimatedText } from '../AnimationLib';

const CapSlider = () => {
    const cards = [
        {
            id: 1,
            image: './iol-images/Manufactured Capital/Manufactured-capital-backgound.webp',
            title: 'Manufactured capital',
            link: '/innovation'
        },
        {
            id: 2,
            image: './iol-images/Financial Capital/Financial-capital-background.webp',
            title: 'Financial capital',
            link: '/technology'
        },
        {
            id: 3,
            image: './iol-images/Social & Relationship capital/Social & Relationship Capital.webp',
            title: 'Social & Relationship Capital',
            link: '/strategy'
        },
        {
            id: 4,
            image: './iol-images/Intellectual Capital/Intellectual-capital-background-img.webp',
            title: 'Intellectual Capital',
            link: '/growth'
        },
        {
            id: 5,
            image: '/iol-images/Human Capital/Dsc_5213.webp',
            title: 'Human Capital',
            link: '/analytics'
        },
        {
            id: 6,
            image: '/iol-images/Natural-Capital/Natural-capital-background-img.webp',
            title: 'Natural Capital',
            link: '/digital'
        }
    ];

    const SliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const handleCardClick = (link) => {
        console.log(`Navigating to: ${link}`);
    };

    return (
        <div className=" mx-auto py-8 bg-white">
            {/* Header */}
            <div className="text-left mb-8">
                <AnimatedHeading
                    level={1}
                    duration={1}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2"
                    splitBy="chars"
                >
                    Our Capitals
                </AnimatedHeading>
            </div>

            {/* Slider */}
            <div className="relative">
                <Slider ref={SliderRef} {...settings}>
                    {cards.map((card) => (
                        <div key={card.id} className="px-3">
                            <div
                                className="group cursor-pointer"
                                onClick={() => handleCardClick(card.link)}
                            >
                                {/* Image */}
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Arrow icon */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <LuArrowUpRight className="w-5 h-5 text-gray-800" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Bottom Right Navigation */}
                <div className="flex items-center gap-3 mt-8 justify-end">
                    <button
                        onClick={() => SliderRef.current?.slickPrev()}
                        className="w-12 cursor-pointer bg-orange-500 h-12 border border-gray-300 rounded-full hover:border-gray-900 hover:bg-gray-900 font-bold text-white flex items-center justify-center transition-all duration-300"
                    >
                        <LuChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => SliderRef.current?.slickNext()}
                        className="w-12 bg-orange-500 cursor-pointer h-12 border border-gray-300 rounded-full hover:border-gray-900 hover:bg-gray-900 font-bold text-white flex items-center justify-center transition-all duration-300"
                    >
                        <LuChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CapSlider;