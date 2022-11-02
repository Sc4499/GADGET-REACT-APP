import React,{useState,useEffect} from 'react';
import "./Home.css";
import Card from './Card';
const Priductlist = () => {


  const[state,setState]=useState([]);
  useEffect(()=>{
  
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data=> setState(data))
      
  },[])
  console.log(state)
  return (
    <div className='container mt-4'>
    <h4 className='t-color'>Products</h4>
    <div className='row'>
      {
       state.map(( item => <Card id ={item.id} title={item.title} image={item.image
       } price={item.price}/>))
     }

    </div>
  </div>
  )
    }

export default Priductlist;
