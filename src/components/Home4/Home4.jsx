import React from 'react'
import './Home4.css';
import video from './video.mp4'

const Home4 = () => {
    return (<>
        <div className='Home4-main'>
            <div className='home-4-content'>
                <div className="page-4-box1">
                    <div className='page-4-box1-child1'>
                        <h1>
                            We're changing <br /> The Way Things <br /> Get Made
                        </h1>
                    </div>
                    <div className='page-4-box1-child2'>
                        <div className="box2-1">
                            <p id='text'><i class="ri-global-line"></i> MIssion</p>
                            <p id='para-2'>
                                We're on a misssion to empower creative independence in a commercial world and incridibke world
                            </p>
                        </div>
                        <div className="box2-2">
                            <p id='text-2'><i class="ri-flashlight-line"></i>Sustainability</p>
                            <p id='para'>
                                We're on a misssion to empower creative independence in a commercial world and incridibke world
                            </p>
                        </div>
                    </div>
                </div>
                <div className="page-4-box2"></div>
            </div>
        </div>
        <div className="home-4-content-2">
            <h1>want to design Your Own? Calm, We Can Do It! </h1>
            <div className="home-4-content-2-img">
                <video src={video} autoPlay={true} loop={true} muted={true} />
            </div>
        </div>
    </>
    )
}

export default Home4
