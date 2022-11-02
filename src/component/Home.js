import React from 'react';
import "./Home.css";

import banner from "../component/banner1.png";
import banner2 from "../component/banner2.jpg";
import banner3 from "../component/banner3.png";
import Priductlist from './Priductlist';
const Home = () => {
  
  return (
    <div>
      <div className='hero'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active imageht">
      <img src={banner} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='text-light'>Don't Wait</h5>
        <h1 className="text-light">Order NOW</h1>
        <button className='btn border border-light rounded-pill text-light'>Order Now</button>
      </div>
    </div>
    <div class="carousel-item imageht">
      <img src={banner2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='text-danger'>Don't Wait</h5>
        <h1 className="text-danger">Order NOW</h1>
        <button className='btn btn-danger rounded-pill'>Order Now</button>
      </div>
    </div>
    <div class="carousel-item imageht">
      <img src={banner3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
 <Priductlist/>
    </div>
  )
}

export default Home
