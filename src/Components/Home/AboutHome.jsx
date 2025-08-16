import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedHeading, AnimatedText } from "../AnimationLib";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutHome = () => {
  const containerRef = useRef(null);
  const hexagonRef = useRef(null);
  const centerRef = useRef(null);
  const visionItems = useRef([]);
  const floatingDotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only run desktop animation if viewport is large
      if (window.innerWidth >= 1024) {
        // Initial setup - hide all elements
        gsap.set(
          [hexagonRef.current, centerRef.current, ...visionItems.current],
          {
            opacity: 0,
            scale: 0,
          }
        );

        // Main timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: false,
          },
        });

        // Main animation sequence
        tl.to(hexagonRef.current, {
          duration: 1.5,
          opacity: 1,
          scale: 1,
          rotation: 360,
          ease: "back.out(1.7)",
        })
          .to(
            centerRef.current,
            {
              duration: 1,
              opacity: 1,
              scale: 1,
              ease: "elastic.out(1, 0.3)",
            },
            "-=0.5"
          )
          .to(
            visionItems.current,
            {
              duration: 0.8,
              opacity: 1,
              scale: 1,
              stagger: {
                amount: 1.5,
                from: "random",
              },
              ease: "back.out(1.7)",
            },
            "-=0.3"
          );

        // Floating dots animation
        gsap.to(floatingDotsRef.current, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-180, 180)",
          duration: "random(3, 6)",
          ease: "sine.inOut",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play pause resume pause",
          },
        });

        // Hover effects for vision items
        visionItems.current.forEach((item) => {
          if (item) {
            const hoverTl = gsap.timeline({ paused: true });
            hoverTl.to(item, {
              duration: 0.3,
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              ease: "power2.out",
            });

            item.addEventListener("mouseenter", () => hoverTl.play());
            item.addEventListener("mouseleave", () => hoverTl.reverse());
          }
        });
      }
    }, containerRef);

    // Cleanup
    return () => ctx.revert();
  }, []);

  const visionData = [
    {
      title: "Ethics",
      description: "Setting high standards for ethics and values",
      position: "top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "People",
      description: "Leading with passion to excel",
      position: "top-1/4 right-45 transform translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Innovation",
      description: "Pioneering the spirit of creativity and research",
      position: "bottom-1/4 right-45 transform translate-x-1/2 translate-y-1/2",
    },
    {
      title: "Environment",
      description: "Caring for the environment and community",
      position: "bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2",
    },
    {
      title: "Technology",
      description: "Harnessing frontier technology",
      position: "bottom-1/4 left-45 transform -translate-x-1/2 translate-y-1/2",
    },
    {
      title: "Customers",
      description: "Fostering relationships for a lifetime",
      position: "top-1/4 left-45 transform -translate-x-1/2 -translate-y-1/2",
    },
  ];

  const mobileImageSrc = "./iol-images/About-us-infographic.webp"; // Replace with your mobile image path

  return (
    <div className="w-full overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 px-4">
        <AnimatedHeading
          level={1}
          duration={1}
          className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-[#1c559d] mb-4"
          splitBy="chars"
        >
          About Us
        </AnimatedHeading>

        <AnimatedText
          animation="slideUp"
          delay={0.1}
          className="text-2xl md:text-3xl lg:text-4xl font-thin text-gray-600 leading-tight mb-4 px-2"
        >
          Driven by Passion, Defined by Commitment
        </AnimatedText>
        <AnimatedText
          animation="slideUp"
          delay={0.1}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4"
        >
          As India's largest integrated and diversified energy company,
          IndianOil is driven by an unwavering passion to excel and a relentless
          commitment to serve the nation's energy needs.
        </AnimatedText>
      </div>

      <div
        ref={containerRef}
        className={`relative w-full flex items-center justify-center mt-4 mb-4
    ${
      window.innerWidth >= 1024
        ? "rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen p-4 md:p-10"
        : ""
    }`}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[600px]">
            {/* Hexagon Background */}
            <div
              ref={hexagonRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div
                  className="w-90 h-90 bg-gradient-to-br from-orange-500 to-orange-600"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    clipPath:
                      "polygon(25% 6.69873%, 75% 6.69873%, 100% 50%, 75% 93.30127%, 25% 93.30127%, 0% 50%)",
                    transform: "rotate(90deg)",
                    transformOrigin: "center",
                  }}
                ></div>
              </div>
            </div>

            {/* Center Logo */}
            <div
              ref={centerRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="text-center bg-[#fbdec8] rounded-full shadow-xl backdrop-blur-sm 
                                flex flex-col items-center justify-center w-70 h-70 xl:w-64 xl:h-64 p-6"
              >
                <div className="w-16 md:w-18 mb-3">
                  <img
                    src="./Indian-oil-logo.webp"
                    alt="Indian Oil Logo"
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  The Energy of India
                </h3>
                <p className="text-base xl:text-lg text-gray-600">
                  A Globally Admired Company
                </p>
              </div>
            </div>

            {/* Vision Items */}
            {visionData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (visionItems.current[index] = el)}
                className={`absolute ${item.position} cursor-pointer group`}
              >
                <div className="rounded-xl p-2 max-w-60 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl xl:text-2xl text-center font-bold text-orange-500 mb-1 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base xl:text-lg text-center text-gray-700">
                    {item.description}
                  </p>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Connection Lines */}
                <div
                  className="absolute top-1/2 left-1/2 w-32 xl:w-40 h-px bg-gradient-to-r from-orange-300 to-transparent transform -translate-y-1/2 origin-left"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${
                      60 * index
                    }deg) translateX(180px)`,
                  }}
                ></div>
              </div>
            ))}

            {/* Floating Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 15 }, (_, i) => (
                <div
                  key={i}
                  ref={(el) => (floatingDotsRef.current[i] = el)}
                  className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout - Clean Image Only */}
          <div className="lg:hidden flex justify-center">
            <img
              src={mobileImageSrc}
              alt="About Us Mobile"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
