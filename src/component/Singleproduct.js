import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Singleproduct.css";
const Singleproduct = () => {
    const[product,setProduct] = useState({});
    const params = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id_}`)
        .then(res => res.json())
        .then(data=> setProduct(data))
    },[])
    console.log(product)
  return (
    <div className='container'>
        
        <div className='row mt-4 border p-4'>
            <div className='col-md-7'>
                <div>
                    <img src={product.image} class=" img-fluid  p-4" style={{width: "200px",height:"200px"}} alt="prodimage"></img>
                </div>
            </div>
            <div className='col-md-5'>
                <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3 className='mb-3'>{product.price}</h3>
                <button className='mx-2 button px-2'>-</button><span>2</span><button className='mx-2 button'>+</button>
                </div>
                <button className='btn button mt-3'>Add to cart</button>
            </div>
        </div>
      
    </div>
  )
}

export default Singleproduct
