import React, { useEffect } from 'react'
import './Products.css'
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
import { useState } from 'react';
import Productcard from '../ProductsCard/Productcard';
import toast from 'react-hot-toast';
import axios from 'axios';
import useCategory from '../../context/useCategory';

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
            <motion.div className="scroller opacity-50" style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

const Products = () => {
    const categories = useCategory();
    const [checked, setchecked] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    // //get all cat
    // const getAllCategory = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
    //         if (data?.success) {
    //             setCategories(data?.category);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error("Something wwent wrong in getting catgeory");
    //     }
    // };

    useEffect(() => {
        getTotal();
    }, []);

    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/product-list/${page}`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //getTOtal COunt
    const getTotal = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/product-count`);
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (page === 1) return;
        loadMore();
    }, [page]);
    //load more
    const loadMore = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/product/product-list/${page}`);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
        }
    };

    // filter by cat
    const handleFilter = (id) => {
        console.log(id)
        setchecked(id);
    };

    const FilterProduct = async (c) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/product/product-filters`, {
                checked
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    }

    //lifecycle method

    useEffect(() => {
        if (!checked.length) getAllProducts();
        console.log(products, "product")

    }, [checked.length]);

    useEffect(() => {
        if (checked.length) FilterProduct();
        console.log(products, "filter")
    }, [checked]);


    const [products1, Setproducts] = useState([1, 2, 3, , 4]);
    // TextAnimation.js
    const text = "Products";
    const text2 = " Where shopping meets genetics - Your one-stop destination for tailored trends and  personalized style. Unleash your unique shopping DNA with ShopGenics.This quote combines the idea of personalized shopping and a wide range of products";

    return (
        <div className='product-main'>
            <div className="product-content">
                <div className="head-product">
                    <motion.div className='text-center'>
                        {text.split(" ").map((letter, index) => (
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
                    <div className="catgories">
                        {
                            categories.map(c => {
                                return <div className={`type ${checked === c._id && 'bg-[#000] !text-[#fff]'}`} onClick={(e) => handleFilter(c._id)}>{c.name}</div>
                            })
                        }
                    </div>
                </div>
                <div className="card-product">

                    {products?.map((p) => (<>
                        <Productcard link={`/detail/${p?.slug}`} key={p._id} p={p} />
                    </>
                    ))}
                </div>

                {
                    products > 0 && (
                        <div className="btn-load flex justify-center items-center p-6">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1);
                                }}
                                className="cursor-pointer transition-all 
    bg-gray-700 text-white px-6 py-2 rounded-lg
    border-green-400
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none uppercase">
                                Load More
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products
