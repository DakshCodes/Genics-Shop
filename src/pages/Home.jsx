import React, { useEffect } from 'react'
import { Animation } from '../animations/Animation';
import './Home.css'
import { gsap } from "gsap";
import { Expo } from 'gsap/all';
import Home2 from '../components/Home2/Home2';

const Home = () => {
    useEffect(() => {
        Animation();
    }, [])
    return (<>
        <div className='main-home'>
            <div className="home-cnt">
                <div className="cnt-1">
                    <div className="button-1">
                        <span>Learn More</span>
                        <i class="ri-arrow-down-line"></i>
                    </div>
                    <div className="button-2">
                        <span>Contact Us</span>
                        <i class="ri-message-2-line"></i>
                    </div>
                </div>
                <div className="cnt-2">
                    <div className='cnt-2-text'>
                        <h1>
                            Real Designs By <br /> Real Artists <br />
                            For Real Peoples
                        </h1>
                        <p>
                            we're  challenging conventional retail , Putting  an end to dead stock, unconventiional waste and more funtastic
                        </p>
                    </div>
                    <div className='cnt-2-product'>
                        <div className='cnt-2-product-1'></div>
                        <div className='cnt-2-product-2'></div>
                    </div>
                </div>
            </div>
        </div>
        <Home2 />
    </>
    )
}

export default Home
