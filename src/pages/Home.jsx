import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { gsap } from "gsap";
import { Expo } from 'gsap/all';
import Home2 from '../components/Home2/Home2';
import Home3 from '../components/Home3/Home3';
import Home4 from '../components/Home4/Home4';
import Footer from '../components/footer/footer';
import banner1 from '../assets/cloth.jpg'
import banner2 from '../assets/cloth2.jpg'
import banner3 from '../assets/cloth3.jpg'
import linkedin from '../assets/images/icons/linkedin.png'
import my from '../assets/my.png'
import logo from '../assets/logo.jpg'
import sampoo2 from '../assets/images/products/jewellery-1.jpg'
import dress from '../assets/images/icons/dress.svg'
import { Link } from 'react-router-dom';


const Home = () => {

    return (<>


        <div>

            <main>
                {/*BANNER*/}
                <div className="banner">
                    <div className="container">
                        <div className="slider-container has-scrollbar">
                            <div className="slider-item">
                                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/dd10b6144722633.6291133f7fb70.jpg' alt="women's latest fashion sale" className="banner-img" />
                                <div className="banner-content">
                                    <p className="banner-subtitle">Trending item</p>
                                    <h2 className="banner-title">Women's latest fashion sale</h2>
                                    <p className="banner-text">
                                        starting at $ <b>20</b>.00
                                    </p>
                                    <Link to='/allproducts' className="banner-btn">Shop now</Link>
                                </div>
                            </div>
                            <div className="slider-item">
                                <img src={banner2} alt="modern sunglasses" className="banner-img" />
                                <div className="banner-content">
                                    <p className="banner-subtitle">Trending accessories</p>
                                    <h2 className="banner-title">Modern sunglasses</h2>
                                    <p className="banner-text">
                                        starting at $ <b>15</b>.00
                                    </p>
                                    <Link to='/allproducts' className="banner-btn">Shop now</Link>
                                </div>
                            </div>
                            <div className="slider-item">
                                <img src={banner3} alt="new fashion summer sale" className="banner-img" />
                                <div className="banner-content">
                                    <p className="banner-subtitle">Sale Offer</p>
                                    <h2 className="banner-title">New fashion summer sale</h2>
                                    <p className="banner-text">
                                        starting at $ <b>29</b>.99
                                    </p>
                                    <Link to='/allproducts' className="banner-btn">Shop now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
      - CATEGORY
    */}
                {/*
      - PRODUCT
    */}
                <div className="product-container">
                    <div className="container">
                        {/*
              - SIDEBAR
  */}
                        <div className="product-box">
                            {/*
                  - PRODUCT MINIMAL
    */}
                            {/*
                  - PRODUCT GRID
    */}
                         
                        </div>
                    </div>
                </div>
                {/*
                                                      - TESTIMONIALS, CTA & SERVICE
    */}
                <div>
                    <div className="container">
                        <div className="testimonials-box">
                            {/*
                                                                  - TESTIMONIALS
    */}
                            <div className="testimonial">
                                <h2 className="title">testimonial</h2>
                                <div className="testimonial-card">
                                    <img src={my} alt="alan doe" className="testimonial-banner" width={80} height={80} />
                                    <p className="testimonial-name">Daksh SIngh</p>
                                    <p className="testimonial-title">CEO &amp; Founder Invision</p>
                                    <img src={logo} alt="quotation" className="quotation-img" width={120} />
                                    <p className="testimonial-desc">
                                       Great It Is For Project Purpose
                                    </p>
                                </div>
                            </div>
                            {/*
                                                                      - CTA
    */}
                            <div className="cta-container">
                                <img src="https://i.pinimg.com/736x/e2/93/1f/e2931f2c60382700a6242967d45bbeb5.jpg" alt="summer collection" className="cta-banner" />
                                <a href="#" className="cta-content">
                                    <p className="discount">25% Discount</p>
                                    <h2 className="cta-title">Summer collection</h2>
                                    <p className="cta-text">Starting @ $10</p>
                                    <button className="cta-btn">Shop now</button>
                                </a>
                            </div>
                            {/*
                                                                      - SERVICE
    */}
                            <div className="service">
                                <h2 className="title">Our Services</h2>
                                <div className="service-container">
                                    <a href="#" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="boat-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Worldwide Delivery</h3>
                                            <p className="service-desc">For Order Over $100</p>
                                        </div>
                                    </a>
                                    <a href="#" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="rocket-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Next Day delivery</h3>
                                            <p className="service-desc">UK Orders Only</p>
                                        </div>
                                    </a>
                                    <a href="#" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="call-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Best Online Support</h3>
                                            <p className="service-desc">Hours: 8AM - 11PM</p>
                                        </div>
                                    </a>
                                    <a href="#" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="arrow-undo-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">Return Policy</h3>
                                            <p className="service-desc">Easy &amp; Free Return</p>
                                        </div>
                                    </a>
                                    <a href="#" className="service-item">
                                        <div className="service-icon">
                                            <ion-icon name="ticket-outline" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">30% money back</h3>
                                            <p className="service-desc">For Order Over $100</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*
                                                      - FOOTER
  */}
            <footer>
                <div className="footer-nav">
                    <div className="container">
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Popular Categories</h2>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Fashion</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Electronic</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Cosmetic</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Health</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Watches</a>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Products</h2>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Prices drop</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">New products</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Best sales</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Contact us</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Sitemap</a>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Our Company</h2>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Delivery</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Legal Notice</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Terms and conditions</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">About us</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Secure payment</a>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Services</h2>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Prices drop</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">New products</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Best sales</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Contact us</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Sitemap</a>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Contact</h2>
                            </li>
                            <li className="footer-nav-item flex">
                                <address className="content">
                                    419 Road
                                    Bhilwara, Rajasthan(Raj), 311001, India
                                </address>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="call-outline" />
                                </div>
                                <a href="tel:+607936-8058" className="footer-nav-link">(+91) 93xx</a>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="mail-outline" />
                                </div>
                                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmailcom</a>
                            </li>
                        </ul>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Follow Us</h2>
                            </li>
                            <li>
                                <ul className="social-link">
                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-facebook" />
                                        </a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-twitter" />
                                        </a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-linkedin" />
                                        </a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <img src={logo} width={100} alt="payment method" className="payment-img" />
                        <p className="copyright">
                            Copyright © <a href="#">Hey</a> all rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    </>
    )
}

export default Home
