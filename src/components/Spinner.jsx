import React, { useState, useEffect } from "react";
import './Spinner.css'


const Spinner = () => {
 
  return (
    <>
      <div
        className="loader"
      >
        <div class="loader">
          <div data-glitch="Loading..." class="glitch">Loading...</div>
        </div>
      </div>
    </>
  );
};

export default Spinner;