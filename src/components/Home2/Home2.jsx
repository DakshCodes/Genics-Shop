import React, { useEffect } from 'react'
import { Animation } from '../../animations/Animation';
import './Home2.css'

const Home2 = () => {
  useEffect(() => {
    Animation();
  }, [])
  return (
    <div className='main-home-2'>
      <div className="home-2-content">
        <div className="home-content">
          <h1>
            <span>SHOP GENICS makes clothes
              <span className='tshirt'>
                <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
              </span>
              to elevate everyday life </span> <span> through lighthearted escapism. While styles vary by <br />
              season,</span>  <span className='all-collection'>* all colllections</span> are guided by the ineffable <br /> sense of freedom that comes with travel.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home2
