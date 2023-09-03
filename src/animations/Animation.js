import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';

export const Animation = () => {
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
        y: 100,
        ease: Expo.easeInOut
    })
    gsap.set(".menu-links ul li", {
        opacity: 0,
        y: 400,
        ease: Expo.easeInOut
    })
    gsap.set(".icons-nav #icon", {
        opacity: 0,
        y: 400,
        ease: Expo.easeInOut
    })
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
        ease: Expo.easeInOut
    }).to(".lable-nav .lable-text", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: Expo.easeInOut
    }).to(".logo ", {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: Expo.easeInOut
    }).to(".menu-links ul li", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: Expo.easeInOut
    }).to(".icons-nav #icon", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: Expo.easeInOut
    }).to(".cnt-2-text h1", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: -0.9,
        ease: Expo.easeInOut
    }).to(".cnt-2-text p", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: -0.8,
        ease: Expo.easeInOut
    }).to(".cnt-2-product-1", {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        delay: -0.8,
        ease: Expo.easeInOut
    }).to(".cnt-2-product-2", {
        opacity: 1,
        scale: 1,
        delay: -0.8,
        duration: 0.9,
        ease: Expo.easeInOut
    })


}