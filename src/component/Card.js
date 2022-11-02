import React from 'react'
import { Link } from 'react-router-dom';
const Card = (prop) => {
  return (
    
    <div className='col-md-3  mb-3' key={prop.id}>
      <Link to={`/product/${prop.id}`}>
      <div class="card cardbor" style={{width: "15rem",height:"350px"}}>
        <div className='d-flex justify-content-center'>
        <img src={prop.image} class=" img-fluid  p-4" style={{width: "200px",height:"200px"}} alt="..."/>
        </div>
  <div class="card-body">
    <h6 class="card-title text-center t-color  m-auto">{prop.title}</h6>
    <p class="card-text text-center">Rs {prop.price}</p>
    <div className='d-flex justify-content-center'>
    <button  class="btn button px-4 rounded-pill">Add to cart</button>
    </div>
   
  </div>
</div>
</Link>
    </div>

   
  
  )
}

export default Card;
