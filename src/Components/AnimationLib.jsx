import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Animated Heading Component (scroll-based)
// ============================================
export const AnimatedHeading = ({
  children,
  level = 1,
  className = '',
  delay = 0,
  duration = 0.8,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = [...children];
    container.innerHTML = chars
      .map((char, i) => `
        <span class="char-wrapper" style="display:inline-flex;overflow:hidden;vertical-align:top;">
          <span class="char-inner" style="display:inline-block; transform:translateY(100%)">
            ${char === ' ' ? '&nbsp;' : char}
          </span>
        </span>`)
      .join('');

    const elements = container.querySelectorAll('.char-inner');

    gsap.set(elements, { y: 100 });

    const ctx = gsap.context(() => {
      gsap.to(elements, {
        y: 0,
        duration,
        delay,
        stagger: {
          amount: duration * 0.4
        },
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        }
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [children, delay, duration]);

  const Tag = `h${level}`;
  return (
    <Tag
      className={`${className}`}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        lineHeight: 1.2,
        gap: '0px',
      }}
    >
      <span
        ref={containerRef}
        className="inline-flex"
        style={{ flexWrap: 'wrap', gap: '0px' }}
      />
    </Tag>
  );
};


// ============================================
// Animated Text Component (scroll-based)
// ============================================
export const AnimatedText = ({
  children,
  className = '',
  animation = 'fade', // Options: fade, slideUp, slideLeft, slideRight
  delay = 0,
  duration = 0.9
}) => {
  const containerRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  // Set initial state: invisible & offset
  gsap.set(container, { y: 50, opacity: 0 });

  const ctx = gsap.context(() => {
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
      }
    });
  }, container);

  return () => ctx.revert();
}, [animation, delay, duration, children]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};


// ============================================
// Animated Image Component (scroll-based)
// ============================================
export const AnimatedImage = ({
  src,
  alt,
  className = '',
  animation = 'slideUp',
  delay = 0,
  duration = 0.5,
  overlayColor = 'bg-black',
  object
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!container || !image) return;

    // Set initial state depending on animation
    gsap.set(image, {
      scale:
        animation === 'zoom'
          ? 1.3
          : animation === 'pop'
          ? 0.6
          : 1,
      y: animation === 'slideUp' ? 100 : 0,
      x: animation === 'slideLeft' ? -100 : 0,
      opacity: animation === 'fade' || animation === 'pop' ? 0 : 1,
      clipPath:
        animation === 'reveal'
          ? 'inset(100% 0 0 0)'
          : animation === 'revealLeftToRight'
          ? 'inset(0 100% 0 0)'
          : 'none',
    });

    if (overlay) {
      gsap.set(overlay, { scaleX: 1 });
    }

    // Define animation timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 90%',
        },
      });

      switch (animation) {
        case 'slideUp':
          tl.to(image, {
            y: 0,
            duration,
            ease: 'power3.out',
          });
          break;

        case 'slideLeft':
          tl.to(image, {
            x: 0,
            duration,
            ease: 'power3.out',
          });
          break;

        case 'zoom':
          tl.to(image, {
            scale: 1,
            duration,
            ease: 'power2.out',
          });
          break;

        case 'fade':
          tl.to(image, {
            opacity: 1,
            duration,
            ease: 'power2.out',
          });
          break;

        case 'pop':
          tl.to(image, {
            opacity: 1,
            scale: 1,
            duration,
            ease: 'back.out(1.7)',
          });
          break;

        case 'reveal':
          if (overlay) {
            tl.to(overlay, {
              scaleX: 0,
              duration: duration * 0.6,
              ease: 'power2.inOut',
              transformOrigin: 'left center',
            }).to(
              image,
              {
                clipPath: 'inset(0% 0 0 0)',
                duration: duration * 0.8,
                ease: 'power2.out',
              },
              '-=0.3'
            );
          } else {
            tl.to(image, {
              clipPath: 'inset(0% 0 0 0)',
              duration,
              ease: 'power2.out',
            });
          }
          break;

        case 'revealLeftToRight':
          if (overlay) {
            tl.to(overlay, {
              scaleX: 0,
              duration: duration * 0.6,
              ease: 'power2.inOut',
              transformOrigin: 'left center',
            }).to(
              image,
              {
                clipPath: 'inset(0 0% 0 0)',
                duration: duration * 0.8,
                ease: 'power2.out',
              },
              '-=0.3'
            );
          } else {
            tl.to(image, {
              clipPath: 'inset(0 0% 0 0)',
              duration,
              ease: 'power2.out',
            });
          }
          break;
      }
    }, container);

    return () => ctx.revert();
  }, [src, animation, delay, duration, overlayColor]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-${object}`}
      />
      {(animation === 'reveal' || animation === 'revealLeftToRight') && (
        <div
          ref={overlayRef}
          className={`absolute inset-0 ${overlayColor} origin-left`}
        />
      )}
    </div>
  );
};
