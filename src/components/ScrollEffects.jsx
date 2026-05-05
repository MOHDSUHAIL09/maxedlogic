import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ScrollEffects = ({ children }) => {
  const scopeRef = useRef();

  // ========== 1. Text Invert (.bw-split-text) ==========
  useGSAP(() => {
    const invertTexts = gsap.utils.toArray('.bw-split-text');
    invertTexts.forEach(target => {
      const split = new SplitText(target, { type: "lines" });
      if (split.lines) {
        split.lines.forEach(line => {
          gsap.to(line, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              scrub: 1,
              start: 'top 0%',
              end: "bottom center"
            }
          });
        });
      }
    });
  }, { scope: scopeRef });

  // ========== 2. Split Text Animation (.split-text) ==========
  useGSAP(() => {
    const splitTexts = gsap.utils.toArray('.split-text');
    splitTexts.forEach(el => {
      const split = new SplitText(el, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });
      gsap.set(el, { perspective: 400 });

      let fromVars = { opacity: 0, duration: 0.4, stagger: 0.02 };
      if (el.classList.contains('right')) fromVars.x = "50";
      else if (el.classList.contains('left')) fromVars.x = "-50";
      else if (el.classList.contains('up')) fromVars.y = "80";
      else if (el.classList.contains('down')) fromVars.y = "-80";
      else fromVars = { opacity: 0, y: 80, duration: 0.4, stagger: 0.02 };

      gsap.from(split.chars, {
        ...fromVars,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none" // Reverse hataya
        }
      });
    });
  }, { scope: scopeRef });

  // ========== 3. Text Up Scroll (.text-splite-up) ==========
  useGSAP(() => {
    const textUpItems = gsap.utils.toArray('.text-splite-up');
    textUpItems.forEach(el => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 110%',
          end: 'bottom 100%',
          scrub: 1,
          markers: false,
          toggleActions: 'play none none none' // Reverse hataya
        }
      });
      const split = new SplitText(el, { type: "words, lines" });
      gsap.set(el, { perspective: 400 });
      split.split({ type: "lines" });
      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    });
  }, { scope: scopeRef });

  // ========== 4. Hero Circle Btn (.tp-btn-trigger) ==========
  useGSAP(() => {
    const bounceBtns = gsap.utils.toArray(".tp-btn-bounce");
    if (bounceBtns.length === 0) return;

    bounceBtns.forEach(btn => {
      gsap.set(btn, { y: -150, opacity: 0 });
      const triggerParent = btn.closest('.tp-btn-trigger');
      if (triggerParent) {
        gsap.to(btn, {
          scrollTrigger: {
            trigger: triggerParent,
            start: "top center",
            markers: false,
            toggleActions: "play none none none" // Reverse hataya
          },
          duration: 1.5,
          delay: 1,
          ease: "bounce.out",
          y: 0,
          opacity: 1,
        });
      }
    });
  }, { scope: scopeRef });

  // ========== 5. Draw Border (.bw-draw-border) ==========
  useGSAP(() => {
    const borders = gsap.utils.toArray('.bw-draw-border');
    borders.forEach(line => {
      gsap.set(line, { width: 0 });
      gsap.to(line, {
        scrollTrigger: {
          trigger: line,
          start: 'top 90%',
          end: "bottom 80%",
          scrub: 1,
          markers: false,
        },
        width: "100%",
        delay: 5,
        duration: 3
      });
    });
  }, { scope: scopeRef });

  // ========== 6. Special Image Reveal (.reveal-*) ==========
  useGSAP(() => {
    const revealAnimation = (selector, axis, percent, scale) => {
      gsap.utils.toArray(selector).forEach(revealItem => {
        const image = revealItem.querySelector("img");
        if (!image) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: revealItem,
            toggleActions: "play none none none" // Reverse hataya
          },
        });
        tl.set(revealItem, { autoAlpha: 1 })
          .from(revealItem, {
            duration: 1.5,
            [axis + "Percent"]: -percent,
            ease: "power2.out",
          })
          .from(image, {
            duration: 1.5,
            [axis + "Percent"]: percent,
            scale: scale,
            delay: -1.5,
            ease: "power2.out",
          });
      });
    };
    revealAnimation(".reveal-right", "x", -100, 1.3);
    revealAnimation(".reveal-left", "x", 100, 1.3);
    revealAnimation(".reveal-bottom", "y", -100, 1.3);
  }, { scope: scopeRef });

  // ========== 7. DEFAULT IMAGE FADE-IN ==========
  useGSAP(() => {
    const allImages = gsap.utils.toArray('img:not(.no-effect)');
    allImages.forEach(img => {
      const parent = img.closest('.reveal-right, .reveal-left, .reveal-bottom');
      if (parent) return;
      
      gsap.from(img, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          toggleActions: "play none none none" // Reverse hataya
        }
      });
    });
  }, { scope: scopeRef });

  // ========== 8. DEFAULT CARD FADE-UP ==========
  useGSAP(() => {
    const cards = gsap.utils.toArray('.portfolio-item, .single-feature-item, .fade-up');
    cards.forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none" // Reverse hataya
        }
      });
    });
  }, { scope: scopeRef });

  // ========== 9. PARAGRAPH & HEADING ==========
  useGSAP(() => {
    const texts = gsap.utils.toArray('p:not(.no-effect), h1:not(.no-effect), h2:not(.no-effect), h3:not(.no-effect), .text-fade');
    texts.forEach(text => {
      if (text.closest('.split-text, .text-splite-up, .tp-play-up')) return;
      gsap.from(text, {
        opacity: 0,
        x: 50,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none none" // Reverse hataya
        }
      });
    });
  }, { scope: scopeRef });

  // ========== 10. Hover Effect (.bw-hover-image) ==========
  useEffect(() => {
    const hoverItems = document.querySelectorAll('.bw-hover-image');
    if (!hoverItems.length) return;

    const moveImage = (e, item, index) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (item.children[index]) {
        item.children[index].style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    let ticking = false;
    const handleMouseMove = (e, item, index) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          moveImage(e, item, index);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handlers = [];
    hoverItems.forEach((item, i) => {
      const handler = (e) => handleMouseMove(e, item, 1);
      item.addEventListener("mousemove", handler);
      handlers.push({ item, handler });
    });

    return () => {
      handlers.forEach(({ item, handler }) => {
        item.removeEventListener("mousemove", handler);
      });
    };
  }, []);

  // ========== 11. Data-background ==========
  useEffect(() => {
    const dataBgElements = document.querySelectorAll('[data-background]');
    dataBgElements.forEach(el => {
      const url = el.getAttribute('data-background');
      if (url) {
        el.style.backgroundImage = `url(${url})`;
      }
    });
  }, []);

  // ========== 12. Refresh ScrollTrigger ==========
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);
    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
    };
  }, []);

  return <div ref={scopeRef}>{children}</div>;
};

export default ScrollEffects;