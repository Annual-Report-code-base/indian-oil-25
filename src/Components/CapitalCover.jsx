import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CapitalCover = ({
  themeColor = "orange",
  capitalType = "Human",
  topBoxTitle = "KEY HIGHLIGHTS",
  topBoxSubtitle = "Our commitment to people development",
  bulletPoints = [
    "Employee engagement programs",
    "Skills development initiatives", 
    "Diversity and inclusion focus"
  ],
  mainImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop",
  directorImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  directorName = "John Smith",
  directorDesignation = "Chief Human Resources Officer",
  directorQuote = "Our people are our greatest asset and the foundation of our sustainable growth strategy.",
  highlightText = "Building Tomorrow's Workforce Today",
  description = "We believe in nurturing talent, fostering innovation, and creating an inclusive environment where every individual can thrive and contribute to our collective success.",
  stakeholders = ["Employees", "Communities", "Partners", "Investors"],
  materialMatters = ["Skills Development", "Employee Wellbeing", "Diversity & Inclusion", "Fair Labor Practices"],
  sdgIcons = [
    "https://via.placeholder.com/40x40/ff6b35/ffffff?text=3",
    "https://via.placeholder.com/40x40/ff6b35/ffffff?text=4",
    "https://via.placeholder.com/40x40/ff6b35/ffffff?text=8"
  ],
  imagePosition = "right",
  theme = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}) => {
  const leftContentRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clear any existing ScrollTriggers for this section
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Only apply pinning on larger screens
      const mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        // Create the pinning ScrollTrigger with proper end calculation
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => {
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            return `+=${Math.max(sectionHeight - viewportHeight, 0)}`;
          },
          pin: imageRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1
        });
      });

      // Animate content items (works on all screen sizes)
      const items = leftContentRef.current?.querySelectorAll(".animate-item");
      if (items && items.length > 0) {
        gsap.set(items, { autoAlpha: 0, y: 40 });
        
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: false,
            once: true
          }
        });
      }
    }, sectionRef);

    // Handle resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamic theme color classes
  const getThemeClasses = (color) => ({
    bg: `bg-${color}-100`,
    border: `border-${color}-500`,
    text: `text-${color}-600`
  });

  const themeClasses = getThemeClasses(themeColor);

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col md:flex-row relative"
      style={{ 
        background: theme,
        minHeight: '100vh'
      }}
    >
      {/* Left Content - Scrollable */}
      <div
        ref={leftContentRef}
        className={`w-full md:w-1/2 flex flex-col p-4 sm:p-6 lg:p-12 space-y-6 lg:space-y-8 relative z-10 ${
          imagePosition === "left" ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Floating Top Box */}
        <div className="animate-item bg-white backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg border-l-4 border-white/50 border-solid">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">
            {topBoxTitle}
          </h3>
          <p className="text-sm mb-3">{topBoxSubtitle}</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Capital Heading */}
        <div className="animate-item">
          <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl capitalize drop-shadow-lg leading-tight">
            {capitalType}{" "}
            <span className="text-white/70 block sm:inline">capital</span>
          </h2>
        </div>

        {/* Director Quote */}
        <div className="animate-item flex flex-col sm:flex-row items-center gap-4 bg-white backdrop-blur-sm p-4 lg:p-6 rounded-lg border-l-4 border-white/50">
          {directorImage && (
            <img
              src={directorImage}
              alt={directorName}
              className="w-16 h-16 lg:w-40 bg-orange-400 lg:h-40 object-cover rounded-full border-2 border-white/30 shadow-md flex-shrink-0"
            />
          )}
          <div className="flex-1">
            <p className="italic mb-3 text-sm lg:text-base leading-relaxed">
              "{directorQuote}"
            </p>
            <p className="text-sm font-bold">{directorName}</p>
            <p className="text-xs text-gray-600">{directorDesignation}</p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="animate-item bg-white backdrop-blur-sm p-4 lg:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            {highlightText}
          </h3>
          <p className="text-sm lg:text-base whitespace-break-spaces leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stakeholders & Material Matters */}
        <div className="animate-item grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-white backdrop-blur-sm p-4 lg:p-5 rounded-lg">
            <h4 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Stakeholders Impacted
            </h4>
            <ul className="text-sm space-y-2">
              {stakeholders.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white backdrop-blur-sm p-4 lg:p-5 rounded-lg">
            <h4 className="text-sm font-bold mb-3 uppercase tracking-wide">
              Material Matters
            </h4>
            <ul className="text-sm space-y-2">
              {materialMatters.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SDG Icons */}
        {sdgIcons.length > 0 && (
          <div className="animate-item">
            <h4 className="text-sm font-bold mb-3 text-white uppercase tracking-wide">
              UN SDG Alignment
            </h4>
            <div className="flex flex-wrap gap-3">
              {sdgIcons.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon}
                  alt={`SDG ${idx + 1}`}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Spacer */}
        {/* <div className="h-32"></div> */}
      </div>

      {/* Right (Pinned) Image */}
      <div
        ref={imageRef}
        className={`w-full md:w-1/2 h-64 md:h-screen relative ${
          imagePosition === "left" ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={mainImage}
          alt="Capital visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:from-transparent md:to-black/20"></div>
      </div>
    </div>
  );
};

export default CapitalCover;