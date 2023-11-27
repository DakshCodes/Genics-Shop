import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"
import { useSearch } from '../../context/search';
import axios from 'axios';
import logo from '../../assets/logo.jpg';


const Navbar = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    // const categories = useCategory();
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/search/${values.keyword}`
            );
            setValues({ ...values, results: data });
            navigate("/search");
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            setCursorPosition({ x: posX, y: posY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    }
    const handleseller = () => {
        toast.success("After Admin Approval You Can Sell");
    }


    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (cursorDot && cursorOutline) {
            cursorDot.style.left = `${cursorPosition.x}px`;
            cursorDot.style.top = `${cursorPosition.y}px`;

            cursorOutline.style.left = `${cursorPosition.x}px`;
            cursorOutline.style.top = `${cursorPosition.y}px`;
        }
    }, [cursorPosition]);


    // console.log(auth?.user?.role)
    return (<>
        <div className='main-nav !z-[2]'>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
            <div className="lable-nav">
                <span className='lable-text'>Free Shipping in India</span>
            </div>
            <div className="menu-nav">
                <div className="content">
                    <div className="logo">
                        <Link to={'/'}>
                            <img className='!h-[80px] md:!h-[120px]' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="menu-links !z-[3] !hidden md:!block ">
                        <ul>
                            <Link to={"/allproducts"}>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                            </Link>
                            <Link to={"/contact"}>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </Link>
                            <Link to={"/about"}>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="icons-nav">
                        {
                            auth?.user?.role === 1 && (
                                <button class="tooltip">
                                    <Link
                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                            }`} >
                                        <i id='icon' class="ri-user-3-line"></i>
                                        <span>DashBoard</span>
                                    </Link>
                                </button>
                            )

                        }
                        {
                            auth?.user?.role === 0 && (
                                <button class="tooltip" onClick={handleseller}>
                                    <Link>
                                        <i id='icon' class="ri-user-3-line"></i>
                                        <span>Seller</span>
                                    </Link>
                                </button>
                            )

                        }

                        <button class="tooltip relative">
                            <Link to={'/checkout'}>
                                <i id='cart' class="ri-shopping-bag-line"></i>
                                <span>Cart</span>
                                <span className='absolute'>{cart?.length}</span>
                            </Link>
                        </button>
                        {
                            auth.user ? (
                                <button class="Btn" title='LogOut' onClick={handleLogout}>
                                    <div class="sign" title='LogOut'>
                                        <svg title='LogOut' viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
                                    </div>
                                </button>
                            ) : (
                                <Link to={'/login'} class="cta">
                                    <span class="hover-underline-animation">Login</span>
                                </Link>
                            )
                        }

                    </div>
                </div>
            </div>
            {/* <div className="z-[1] h-[4rem] flex flex-col justify-center">
                <div className="relative  p-16 w-full sm:max-w-xl sm:mx-auto">
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}

                        className="overflow-hidden  z-0 rounded-full relative p-2">
                        <form role="form" className="relative flex z-50 bg-white rounded-full">
                            <input
                                value={values.keyword}
                                onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                                type="text" placeholder="search here" className="rounded-full flex-1 px-4 py-2 text-gray-700 focus:outline-none" />
                            <button className="bg-[#b18bbd] text-white rounded-full font-semibold px-5 py-2 hover:bg-[#b18bbd] focus:bg-[#b18bbd] focus:outline-none" onClick={handleSubmit}>Search</button>
                        </form>
                        <div className="glow glow-1 z-10 bg-[#fff] absolute" />
                        <div className="glow glow-2 z-20 bg-[#000] absolute" />
                        <div className="glow glow-3 z-30 bg-purple-400 absolute" />
                        <div className="glow glow-4 z-40 bg-blue-400 absolute" />
                    </motion.div>
                </div>
            </div> */}
        </div>

    </>

    )
}

export default Navbar
