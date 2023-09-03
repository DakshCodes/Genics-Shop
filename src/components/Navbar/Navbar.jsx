import React, { useEffect } from 'react'
import { Animation } from '../../animations/Animation';
import './Navbar.css';



const Navbar = () => {
    useEffect(() => {
        Animation();
    }, [])
    return (
        <div className='main-nav'>
            <div className="lable-nav">
                <span className='line'></span>
                <span className='lable-text'>Free Shipping in India</span>
                <span className='line'></span>
            </div>
            <div className="menu-nav">
                <div className="content">
                    <div className="logo">
                        GS
                    </div>
                    <div className="menu-links">
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="icons-nav">
                        <i id='icon' class="ri-search-line"></i>
                        <i id='icon' class="ri-user-3-line"></i>
                        <i id='icon' class="ri-shopping-bag-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
