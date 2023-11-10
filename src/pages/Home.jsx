import React, { useEffect, useRef, useState } from 'react'
import { Animation } from '../animations/Animation';
import './Home.css'
import { gsap } from "gsap";
import { Expo } from 'gsap/all';
import Home2 from '../components/Home2/Home2';
import Home3 from '../components/Home3/Home3';
import Home4 from '../components/Home4/Home4';
import Footer from '../components/footer/footer';
import banner1 from '../assets/images/banner-1.jpg'
import banner2 from '../assets/images/banner-2.jpg'
import banner3 from '../assets/images/banner-3.jpg'
import linkedin from '../assets/images/icons/linkedin.png'
import sampoo from '../assets/images/products/shampoo.jpg'
import sampoo2 from '../assets/images/products/jewellery-1.jpg'
import dress from '../assets/images/icons/dress.svg'


const Home = () => {

    useEffect(() => {
        Animation();
    }, []);

    return (<>


        <div>

            <header>
                <div className="header-top">
                    <div className="container">
                        <ul className="header-social-container">
                            <li>
                                <a href="#" className="social-link">
                                    <img src={linkedin} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={linkedin} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={linkedin} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={linkedin} alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="header-alert-news">
                            <p>
                                <b>Free Shipping In India</b>
                                This Week Order Over - 550rs
                            </p>
                        </div>
                        <div className="header-top-actions">
                            <select name="language">
                                <option value="en-US">English</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="container">
                        <a href="#" className="header-logo">
                            SG
                            {/* <img src="./assets/images/logo/logo.svg" alt="Anon's logo" width={120} height={36} /> */}
                        </a>
                        <div className="header-search-container">
                            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                            <button className="search-btn">
                                <ion-icon name="search-outline" />
                            </button>
                        </div>
                        <div className="header-user-actions">
                            <button className="action-btn">
                                <ion-icon name="person-outline" />
                            </button>
                            <button className="action-btn">
                                <ion-icon name="heart-outline" />
                                <span className="count">0</span>
                            </button>
                            <button className="action-btn">
                                <ion-icon name="bag-handle-outline" />
                                <span className="count">0</span>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="desktop-navigation-menu">
                    <div className="container">
                        <ul className="desktop-menu-category-list">
                            <li className="menu-category">
                                <a href="#" className="menu-title">Home</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Categories</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Men's</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Women's</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Jewelry</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Perfume</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Blog</a>
                            </li>
                            <li className="menu-category">
                                <a href="#" className="menu-title">Hot Offers</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mobile-bottom-navigation">
                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline" />
                    </button>
                    <button className="action-btn">
                        <ion-icon name="bag-handle-outline" />
                        <span className="count">0</span>
                    </button>
                    <button className="action-btn">
                        <ion-icon name="home-outline" />
                    </button>
                    <button className="action-btn">
                        <ion-icon name="heart-outline" />
                        <span className="count">0</span>
                    </button>
                    <button className="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline" />
                    </button>
                </div>
                <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
                    <div className="menu-top">
                        <h2 className="menu-title">Menu</h2>
                        <button className="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline" />
                        </button>
                    </div>
                    <ul className="mobile-menu-category-list">
                        <li className="menu-category">
                            <a href="#" className="menu-title">Home</a>
                        </li>
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Men's</p>
                                <div>
                                    <ion-icon name="add-outline" className="add-icon" />
                                    <ion-icon name="remove-outline" className="remove-icon" />
                                </div>
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shirt</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Shorts &amp; Jeans</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Safety Shoes</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Wallet</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Women's</p>
                                <div>
                                    <ion-icon name="add-outline" className="add-icon" />
                                    <ion-icon name="remove-outline" className="remove-icon" />
                                </div>
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Dress &amp; Frock</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Makeup Kit</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Jewelry</p>
                                <div>
                                    <ion-icon name="add-outline" className="add-icon" />
                                    <ion-icon name="remove-outline" className="remove-icon" />
                                </div>
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Earrings</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Couple Rings</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Necklace</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Bracelets</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Perfume</p>
                                <div>
                                    <ion-icon name="add-outline" className="add-icon" />
                                    <ion-icon name="remove-outline" className="remove-icon" />
                                </div>
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Clothes Perfume</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Deodorant</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Flower Fragrance</a>
                                </li>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Air Freshener</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">Blog</a>
                        </li>
                        <li className="menu-category">
                            <a href="#" className="menu-title">Hot Offers</a>
                        </li>
                    </ul>
                    <div className="menu-bottom">
                        <ul className="menu-category-list">
                            <li className="menu-category">
                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Language</p>
                                    <ion-icon name="caret-back-outline" className="caret-back" />
                                </button>
                                <ul className="submenu-category-list" data-accordion>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">English</a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Español</a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">Frençh</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-category">
                                <button className="accordion-menu" data-accordion-btn>
                                    <p className="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" className="caret-back" />
                                </button>
                                <ul className="submenu-category-list" data-accordion>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">USD $</a>
                                    </li>
                                    <li className="submenu-category">
                                        <a href="#" className="submenu-title">EUR €</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="menu-social-container">
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>



            <main>
                {/*
      - BANNER
    */}
                <div className="banner">
                    <div className="container">
                        <div className="slider-container has-scrollbar">
                            <div className="slider-item">
                                <img src={banner1} alt="women's latest fashion sale" className="banner-img" />
                                <div className="banner-content">
                                    <p className="banner-subtitle">Trending item</p>
                                    <h2 className="banner-title">Women's latest fashion sale</h2>
                                    <p className="banner-text">
                                        starting at $ <b>20</b>.00
                                    </p>
                                    <a href="#" className="banner-btn">Shop now</a>
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
                                    <a href="#" className="banner-btn">Shop now</a>
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
                                    <a href="#" className="banner-btn">Shop now</a>
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
                        <div className="sidebar  has-scrollbar" data-mobile-menu>
                            <div className="sidebar-category">
                                <div className="sidebar-top">
                                    <h2 className="sidebar-title">Category</h2>
                                    <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                                        <ion-icon name="close-outline" />
                                    </button>
                                </div>
                                <ul className="sidebar-menu-category-list">
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <p className="menu-title">Clothes</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Shirt</p>
                                                    <data value={300} className="stock" title="Available Stock">300</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">shorts &amp; jeans</p>
                                                    <data value={60} className="stock" title="Available Stock">60</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">jacket</p>
                                                    <data value={50} className="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">dress &amp; frock</p>
                                                    <data value={87} className="stock" title="Available Stock">87</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/shoes.svg" alt="footwear" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Footwear</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Sports</p>
                                                    <data value={45} className="stock" title="Available Stock">45</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Formal</p>
                                                    <data value={75} className="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Casual</p>
                                                    <data value={35} className="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Safety Shoes</p>
                                                    <data value={26} className="stock" title="Available Stock">26</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/jewelry.svg" alt="clothes" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Jewelry</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Earrings</p>
                                                    <data value={46} className="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Couple Rings</p>
                                                    <data value={73} className="stock" title="Available Stock">73</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Necklace</p>
                                                    <data value={61} className="stock" title="Available Stock">61</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/perfume.svg" alt="perfume" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Perfume</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Clothes Perfume</p>
                                                    <data value={12} className="stock" title="Available Stock">12 pcs</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Deodorant</p>
                                                    <data value={60} className="stock" title="Available Stock">60 pcs</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">jacket</p>
                                                    <data value={50} className="stock" title="Available Stock">50 pcs</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">dress &amp; frock</p>
                                                    <data value={87} className="stock" title="Available Stock">87 pcs</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/cosmetics.svg" alt="cosmetics" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Cosmetics</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Shampoo</p>
                                                    <data value={68} className="stock" title="Available Stock">68</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Sunscreen</p>
                                                    <data value={46} className="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Body Wash</p>
                                                    <data value={79} className="stock" title="Available Stock">79</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Makeup Kit</p>
                                                    <data value={23} className="stock" title="Available Stock">23</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Glasses</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Sunglasses</p>
                                                    <data value={50} className="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Lenses</p>
                                                    <data value={48} className="stock" title="Available Stock">48</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sidebar-menu-category">
                                        <button className="sidebar-accordion-menu" data-accordion-btn>
                                            <div className="menu-title-flex">
                                                <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width={20} height={20} />
                                                <p className="menu-title">Bags</p>
                                            </div>
                                            <div>
                                                <ion-icon name="add-outline" className="add-icon" />
                                                <ion-icon name="remove-outline" className="remove-icon" />
                                            </div>
                                        </button>
                                        <ul className="sidebar-submenu-category-list" data-accordion>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Shopping Bag</p>
                                                    <data value={62} className="stock" title="Available Stock">62</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Gym Backpack</p>
                                                    <data value={35} className="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Purse</p>
                                                    <data value={80} className="stock" title="Available Stock">80</data>
                                                </a>
                                            </li>
                                            <li className="sidebar-submenu-category">
                                                <a href="#" className="sidebar-submenu-title">
                                                    <p className="product-name">Wallet</p>
                                                    <data value={75} className="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-box">
                            {/*
                  - PRODUCT MINIMAL
    */}
                            {/*
                  - PRODUCT FEATURED
    */}
                            <div className="product-featured">
                                <h2 className="title">Deal of the day</h2>
                                <div className="showcase-wrapper has-scrollbar">
                                    <div className="showcase-container">
                                        <div className="showcase">
                                            <div className="showcase-banner">
                                                <img src={sampoo} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                                            </div>
                                            <div className="showcase-content">
                                                <div className="showcase-rating">
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star-outline" />
                                                    <ion-icon name="star-outline" />
                                                </div>
                                                <a href="#">
                                                    <h3 className="showcase-title">shampoo, conditioner &amp; facewash packs</h3>
                                                </a>
                                                <p className="showcase-desc">
                                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                                </p>
                                                <div className="price-box">
                                                    <p className="price">$150.00</p>
                                                    <del>$200.00</del>
                                                </div>
                                                <button className="add-cart-btn">add to cart</button>
                                                <div className="showcase-status">
                                                    <div className="wrapper">
                                                        <p>
                                                            already sold: <b>20</b>
                                                        </p>
                                                        <p>
                                                            available: <b>40</b>
                                                        </p>
                                                    </div>
                                                    <div className="showcase-status-bar" />
                                                </div>
                                                <div className="countdown-box">
                                                    <p className="countdown-desc">
                                                        Hurry Up! Offer ends in:
                                                    </p>
                                                    <div className="countdown">
                                                        <div className="countdown-content">
                                                            <p className="display-number">360</p>
                                                            <p className="display-text">Days</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">24</p>
                                                            <p className="display-text">Hours</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">59</p>
                                                            <p className="display-text">Min</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">00</p>
                                                            <p className="display-text">Sec</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase-container">
                                        <div className="showcase">
                                            <div className="showcase-banner">
                                                <img src={sampoo2} alt="Rose Gold diamonds Earring" className="showcase-img" />
                                            </div>
                                            <div className="showcase-content">
                                                <div className="showcase-rating">
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star" />
                                                    <ion-icon name="star-outline" />
                                                    <ion-icon name="star-outline" />
                                                </div>
                                                <h3 className="showcase-title">
                                                    <a href="#" className="showcase-title">Rose Gold diamonds Earring</a>
                                                </h3>
                                                <p className="showcase-desc">
                                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                                </p>
                                                <div className="price-box">
                                                    <p className="price">$1990.00</p>
                                                    <del>$2000.00</del>
                                                </div>
                                                <button className="add-cart-btn">add to cart</button>
                                                <div className="showcase-status">
                                                    <div className="wrapper">
                                                        <p> already sold: <b>15</b> </p>
                                                        <p> available: <b>40</b> </p>
                                                    </div>
                                                    <div className="showcase-status-bar" />
                                                </div>
                                                <div className="countdown-box">
                                                    <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                                                    <div className="countdown">
                                                        <div className="countdown-content">
                                                            <p className="display-number">360</p>
                                                            <p className="display-text">Days</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">24</p>
                                                            <p className="display-text">Hours</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">59</p>
                                                            <p className="display-text">Min</p>
                                                        </div>
                                                        <div className="countdown-content">
                                                            <p className="display-number">00</p>
                                                            <p className="display-text">Sec</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*
                  - PRODUCT GRID
    */}
                            <div className="product-main">
                                <h2 className="title">New Products</h2>
                                <div className="product-grid">
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                                            <img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                                            <p className="showcase-badge">15%</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">jacket</a>
                                            <a href="#">
                                                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                                            </a>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$48.00</p>
                                                <del>$75.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/shirt-1.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                                            <img src="./assets/images/products/shirt-2.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle black">sale</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">shirt</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$45.00</p>
                                                <del>$56.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                                            <img src="./assets/images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">Jacket</a>
                                            <h3>
                                                <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$58.00</p>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/clothes-3.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                                            <img src="./assets/images/products/clothes-4.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle pink">new</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">skirt</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$25.00</p>
                                                <del>$35.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/shoe-2.jpg" alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                                            <img src="./assets/images/products/shoe-2_1.jpg" alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">casual</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$99.00</p>
                                                <del>$105.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/watch-3.jpg" alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                                            <img src="./assets/images/products/watch-4.jpg" alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle black">sale</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">watches</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$150.00</p>
                                                <del>$170.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/watch-1.jpg" alt="Smart watche Vital Plus" className="product-img default" width={300} />
                                            <img src="./assets/images/products/watch-2.jpg" alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">watches</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$100.00</p>
                                                <del>$120.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/party-wear-1.jpg" alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                                            <img src="./assets/images/products/party-wear-2.jpg" alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle black">sale</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">party wear</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$25.00</p>
                                                <del>$30.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                                            <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">jacket</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$32.00</p>
                                                <del>$45.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                                            <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle black">sale</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">sports</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$58.00</p>
                                                <del>$64.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                                            <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">formal</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$50.00</p>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase">
                                        <div className="showcase-banner">
                                            <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                                            <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                                            <p className="showcase-badge angle black">sale</p>
                                            <div className="showcase-actions">
                                                <button className="btn-action">
                                                    <ion-icon name="heart-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="eye-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="repeat-outline" />
                                                </button>
                                                <button className="btn-action">
                                                    <ion-icon name="bag-add-outline" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="showcase-content">
                                            <a href="#" className="showcase-category">shorts</a>
                                            <h3>
                                                <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                                            </h3>
                                            <div className="showcase-rating">
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star" />
                                                <ion-icon name="star-outline" />
                                                <ion-icon name="star-outline" />
                                            </div>
                                            <div className="price-box">
                                                <p className="price">$78.00</p>
                                                <del>$85.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <img src="./assets/images/malik.png" alt="alan doe" className="testimonial-banner" width={80} height={80} />
                                    <p className="testimonial-name">Daksh SIngh</p>
                                    <p className="testimonial-title">CEO &amp; Founder Invision</p>
                                    <img src="./assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width={26} />
                                    <p className="testimonial-desc">
                                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                        dolor dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            {/*
                                                                      - CTA
    */}
                            <div className="cta-container">
                                <img src="./assets/images/cta-banner.jpg" alt="summer collection" className="cta-banner" />
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
                <div className="footer-category">
                    <div className="container">
                        <h2 className="footer-category-title">Brand directory</h2>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Fashion :</h3>
                            <a href="#" className="footer-category-link">T-shirt</a>
                            <a href="#" className="footer-category-link">Shirts</a>
                            <a href="#" className="footer-category-link">shorts &amp; jeans</a>
                            <a href="#" className="footer-category-link">jacket</a>
                            <a href="#" className="footer-category-link">dress &amp; frock</a>
                            <a href="#" className="footer-category-link">innerwear</a>
                            <a href="#" className="footer-category-link">hosiery</a>
                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">footwear :</h3>
                            <a href="#" className="footer-category-link">sport</a>
                            <a href="#" className="footer-category-link">formal</a>
                            <a href="#" className="footer-category-link">Boots</a>
                            <a href="#" className="footer-category-link">casual</a>
                            <a href="#" className="footer-category-link">cowboy shoes</a>
                            <a href="#" className="footer-category-link">safety shoes</a>
                            <a href="#" className="footer-category-link">Party wear shoes</a>
                            <a href="#" className="footer-category-link">Branded</a>
                            <a href="#" className="footer-category-link">Firstcopy</a>
                            <a href="#" className="footer-category-link">Long shoes</a>
                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">jewellery :</h3>
                            <a href="#" className="footer-category-link">Necklace</a>
                            <a href="#" className="footer-category-link">Earrings</a>
                            <a href="#" className="footer-category-link">Couple rings</a>
                            <a href="#" className="footer-category-link">Pendants</a>
                            <a href="#" className="footer-category-link">Crystal</a>
                            <a href="#" className="footer-category-link">Bangles</a>
                            <a href="#" className="footer-category-link">bracelets</a>
                            <a href="#" className="footer-category-link">nosepin</a>
                            <a href="#" className="footer-category-link">chain</a>
                            <a href="#" className="footer-category-link">Earrings</a>
                            <a href="#" className="footer-category-link">Couple rings</a>
                        </div>
                        <div className="footer-category-box">
                            <h3 className="category-box-title">cosmetics :</h3>
                            <a href="#" className="footer-category-link">Shampoo</a>
                            <a href="#" className="footer-category-link">Bodywash</a>
                            <a href="#" className="footer-category-link">Facewash</a>
                            <a href="#" className="footer-category-link">makeup kit</a>
                            <a href="#" className="footer-category-link">liner</a>
                            <a href="#" className="footer-category-link">lipstick</a>
                            <a href="#" className="footer-category-link">prefume</a>
                            <a href="#" className="footer-category-link">Body soap</a>
                            <a href="#" className="footer-category-link">scrub</a>
                            <a href="#" className="footer-category-link">hair gel</a>
                            <a href="#" className="footer-category-link">hair colors</a>
                            <a href="#" className="footer-category-link">hair dye</a>
                            <a href="#" className="footer-category-link">sunscreen</a>
                            <a href="#" className="footer-category-link">skin loson</a>
                            <a href="#" className="footer-category-link">liner</a>
                            <a href="#" className="footer-category-link">lipstick</a>
                        </div>
                    </div>
                </div>
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
                                <div className="icon-box">
                                    <ion-icon name="location-outline" />
                                </div>
                                <address className="content">
                                    419 State 414 Rte
                                    Beaver Dams, New York(NY), 14812, USA
                                </address>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="call-outline" />
                                </div>
                                <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="mail-outline" />
                                </div>
                                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
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
                        <img src="./assets/images/payment.png" alt="payment method" className="payment-img" />
                        <p className="copyright">
                            Copyright © <a href="#">Anon</a> all rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>

    </>
    )
}

export default Home
