import React from 'react';
import { LuArrowUpRight, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { AnimatedHeading } from '../AnimationLib';

const CapSlider = () => {
  const cards = [
    { id: 1, image: './iol-images/Manufactured Capital/Manufactured-capital-backgound.webp', title: 'Manufactured capital', link: '/manufactured-capital' },
    { id: 2, image: './iol-images/Financial Capital/Financial-capital-background.webp', title: 'Financial capital', link: '/financial-capital' },
    { id: 3, image: './iol-images/Social & Relationship capital/Social & Relationship Capital.webp', title: 'Social & Relationship Capital', link: '/social-relationship-capital' },
    { id: 4, image: './iol-images/Intellectual Capital/Intellectual-capital-background-img.webp', title: 'Intellectual Capital', link: '/intellectual-capital' },
    { id: 5, image: '/iol-images/Human Capital/Dsc_5213.webp', title: 'Human Capital', link: '/human-capital' },
    { id: 6, image: '/iol-images/Natural-Capital/Natural-capital-background-img.webp', title: 'Natural Capital', link: '/natural-capital' }
  ];

  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto py-8 bg-white">
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
        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-4 snap-x snap-mandatory overflow-x-auto sm:overflow-x-hidden"
        >
          {cards.map(card => (
            <div
              key={card.id}
              className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to={card.link}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                >
                  <LuArrowUpRight className="w-5 h-5 text-gray-800" />
                </Link>
              </div>
              <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation buttons - visible on all devices */}
        <div className="flex items-center gap-3 mt-4 justify-end">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
          >
            <LuChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300"
          >
            <LuChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapSlider;
