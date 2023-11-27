import React from 'react'
import './Productcard.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from "../../context/cart";
import toast from 'react-hot-toast'
const Productcard = ({ p, link }) => {
    const [cart, setCart] = useCart();

    return (
        <>
            <motion.div class="main"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <div class="card">
                    <Link to={`${link}`}>
                        <div class="card-img"><div class="img"><img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} alt="" /></div></div>
                    </Link>
                    <div class="card-title">{p?.name}</div>
                    <div class="card-subtitle">{p?.description}</div>
                    <hr class="card-divider" />
                    <div class="card-footer">
                        <div class="card-price"><span>₹</span>{p?.price}</div>
                        <button
                            onClick={() => {
                                setCart([...cart, p]);
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify([...cart, p])
                                );
                                toast.success("Added In Cart");
                            }}
                            class="card-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Productcard
