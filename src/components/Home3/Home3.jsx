import React, { useEffect } from 'react'
import './Home3.css'
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Link } from 'react-router-dom';
import Productcard from '../ProductsCard/Productcard';

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

const Home3 = () => {

    // TextAnimation.js
    const text = "Shop Genics";
    const text2 = " Where shopping meets genetics - Your one-stop destination for tailored trends and  personalized style. Unleash your unique shopping DNA with ShopGenics.This quote combines the idea of personalized shopping and a wide range of products";

    return (
        <div className='Home3-main'>
            <div className="home-3-content">
                <div className="head-home3">
                    <motion.div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: index * 0.09, ease: "easeInOut" }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                <div className="card-product">
                    <motion.div className='home2-content-text ' >
                        <motion.div
                            initial={{ opacity: 0, y: 50, }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, }}
                        >
                            Where shopping meets genetics - Your one-stop destination for tailored trends and  personalized style. Unleash your unique shopping DNA with ShopGenics.This quote combines the idea of personalized shopping and a wide range of products
                        </motion.div>
                    </motion.div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home3
