import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger


export const Animation = () => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger
    //  Navbar..

    gsap.set(".lable-nav .line ", {
        width: "0%",
    })
    gsap.set(".lable-nav .lable-text ", {
        opacity: 0,
        y: -100,
    })
    gsap.set(".logo ", {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    })
    gsap.set(".menu-links ul li", {
        opacity: 0,
        y: 400,
        ease: Expo.easeInOut
    })
    gsap.set(".icons-nav #icon", {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    })

    // page 2
    gsap.set(".home-content  h1", {
        opacity: 0,
        y: 40,
    })
    gsap.set(".home-content .tshirt img", {
        width: 0
    })

    // 
    gsap.set(".cnt-1", { opacity: 0, scale: 1.1 });
    gsap.set(".cnt-2-text h1", { opacity: 0, y: 30 });
    gsap.set(".cnt-2-text p", { opacity: 0, y: 30 });
    gsap.set(".cnt-2-text p", { opacity: 0, y: 30 });
    gsap.set(".cnt-2-product-1", { opacity: 0, scale: 1.1 });
    gsap.set(".cnt-2-product-2", { opacity: 0, scale: 1.1 });
    gsap.set(".button-1 span", { opacity: 0 });
    gsap.set(".button-2 span", { opacity: 0 });
    gsap.set(".button-1", { width: "7vw" });
    gsap.set(".button-2", { width: "7vw" });
    // Use gsap.from to animate from the initial state to the final state
    gsap.to(".cnt-1", {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 2,
        ease: Expo.easeInOut
    });
    gsap.to(".button-1 ", {
        width: "18vw",
        duration: 1,
        delay: 1.5,
        ease: Expo.easeInOut
    });
    gsap.to(".button-1 span", {
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: Expo.easeInOut
    });
    gsap.to(".button-2 ", {
        width: "18vw",
        duration: 1,
        delay: 1.5,
        ease: Expo.easeInOut
    });
    gsap.to(".button-2 span", {
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: Expo.easeInOut
    });

    const tl = gsap.timeline();
    tl.to(".lable-nav .line ", {
        width: "42%",
        duration: 1,
        repeat: 0,
        ease: Expo.easeInOut
    }).to(".lable-nav .lable-text", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        repeat: 0,
        ease: Expo.easeInOut
    }).to(".logo ", 2, {
        opacity: 1,
        y: 0,
        repeat: 0,
        ease: Expo.easeInOut
    }, 0.4).to(".menu-links ul li", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        repeat: 0,
        ease: Expo.easeInOut
    }).to(".icons-nav #icon", 2, {
        opacity: 1,
        stagger: 0.2,
        repeat: 0,
        y: 0,
        ease: Expo.easeInOut
    }, 0.4).to(".cnt-2-text h1", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: -0.9,
        ease: Expo.easeInOut
    }).to(".cnt-2-text p", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        repeat: 0,
        delay: -0.8,
        ease: Expo.easeInOut
    }).to(".cnt-2-product-1", {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        repeat: 0,
        delay: -0.8,
        ease: Expo.easeInOut
    }).to(".cnt-2-product-2", {
        opacity: 1,
        scale: 1,
        delay: -0.8,
        repeat: 0,
        duration: 0.9,
        ease: Expo.easeInOut
    })

    // page-2
    gsap.to(".home-content h1 ", {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: ".home-content h1",
            // markers:true,
            start: "-200% 20%",
            end: "200% 20%",
        }
    })
    gsap.to(".home-content .tshirt img", {
        width: 100,
        duration: 1,
        delay: 0.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: ".home-content h1",
            // markers:true,
            start: "-160% 20%",
            end: "200% 20%",
        }
    })
    gsap.set(".catgories div", {
        opacity: 0,
    })
    gsap.to(".catgories div", {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: ".home-content h1",
            // markers:true,
            start: "-160% 20%",
            end: "200% 20%",
        }
    })
    gsap.set(".home3-content", {
        opacity: 0
    })
    gsap.to(".home3-content", {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
            trigger: ".home3-content",
            start: "10% 20%",
            end: "200% 20%",
        }
    })


    // Deatil Page
    gsap.set("#left h1", {
        opacity: 0,
        y: 20,
    })
    gsap.set("#left p", {
        opacity: 0,
        y: 20,
    })
    gsap.set("#left h2", {
        opacity: 0,
        y: 20,
    })

    gsap.set("button", {
        opacity: 0,
        y: 20,

    })

    gsap.set(".line-one", {
        opacity: 0,
        y: -800,
    })
    gsap.set(".line-two", {
        opacity: 0,
        y: -800,
    })

    gsap.set("#center", {
        opacity: 0,
    })
    gsap.set("#content img", {
        opacity: 0,
        y: -800,
    })


    gsap.set("#right-elems div", {
        opacity: 0,
        y: 40,
    })

    // animate
    gsap.to("#left h1", 1, {
        opacity: 1,
        delay: 1,
        y: 0,
        ease: Expo.easeInOut
    })
    gsap.to("#left p", 1, {
        opacity: 1,
        delay: 1.4,
        y: 0,
        ease: Expo.easeInOut
    })
    gsap.to("#left h2", 1, {
        opacity: 1,
        delay: 1.4,
        y: 0,
        ease: Expo.easeInOut
    })

    gsap.to("button", 1, {
        opacity: 1,
        delay: 1.6,
        y: 0,
        ease: Expo.easeInOut
    })

    gsap.to(".line-one", 1, {
        opacity: 1,
        delay: 2,
        y: 0,
        ease: Expo.easeInOut
    })
    gsap.to(".line-two", 1, {
        opacity: 1,
        delay: 2.5,
        y: 0,
        ease: Expo.easeInOut
    })

    gsap.to("#center", 2, {
        opacity: 1,
        delay: 1,
        ease: Expo.easeInOut
    })
    gsap.to("#content img", 2, {
        opacity: 1,
        delay: 1.4,
        y: 0,
        ease: Expo.easeInOut
    })


    gsap.to("#right-elems div", 2, {
        opacity: 1,
        delay: 1.6,
        stagger: 0.2,
        y: 0,
        ease: Expo.easeInOut
    }, 0.2)

}