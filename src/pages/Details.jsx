import React, { useEffect, useRef, useState } from 'react'
import './Details.css'
import png from '../assets/myp.png'
import video from '../assets/video2.mp4'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const params = useParams();
    const [detail, setdetail] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    //get similar product
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    //get single product
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/get-product/${params.slug}`
            );

            setdetail(data.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSingleProduct();
        //eslint-disable-next-line
    }, []);

    // console.log(relatedProducts,"Related")

    return (
        <>
            <div className='Detail-main'>
                <div className="detail-content">
                    <div id="content">
                        <div id="left">
                            <h1>{detail?.name}</h1>
                            <h2>€{detail?.price}</h2>
                            <p>{detail?.description}</p>
                            <button><i class="ri-shopping-bag-3-line"></i>Add Cart</button>
                        </div>
                        <div id="center">
                            <div id="center-bg">
                                <div className="img">
                                    <img src={`http://localhost:8080/api/v1/product/product-photo/${detail._id}`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="right">
                            <div id="right-elems">
                                <div id="elem1">
                                    <h1>Descriptions</h1>
                                    <i class="ri-add-fill"></i>
                                </div>
                                <div id="elem1">
                                    <h1>Quality</h1>
                                    <i class="ri-add-fill"></i>
                                </div>
                                <div id="elem1">
                                    <h1>Details</h1>
                                    <i class="ri-add-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-content-2">
                    <div className="detail-content-1">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 80
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >We handpick our products to guarantee quality, <br /> and our customer reviews speak for themselves. <br /> Shop with confidence, knowing you're getting the best.</motion.h1>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 1.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="detail-content-2-img">
                            <video src={video} autoPlay={true} loop={true} muted={true} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
