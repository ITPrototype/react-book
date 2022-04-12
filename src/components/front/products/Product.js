import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../../index';
import "./Product.css";
import { yuhhu } from '../../../index';
const Product = (books) => {
  const [editIndex, setEditIndex]= useState(null);
  const[suc,setSuc]=useState('hide')  
  
  const{auth}=useContext(Context)
  const[user]=useAuthState(auth)
  const tests = async(product)=>{
    setSuc('alert alert-success')
    setEditIndex(editIndex=>editIndex === product ? null : product)
    yuhhu.indexOf(product)===-1 ? yuhhu.push(product) && localStorage.setItem('to-cart',JSON.stringify(yuhhu)) : alert("You cant add 1 book 2 times bitch! 😤")
  }



  return (
    <div className='products'>
      {books.books.map((product)=>(
        <div className="card" key={product.url}>
          <div>
            <img 
              className='product-image' 
              src={product.image} 
              alt={product.title}
            />
          </div>
         <div className='content'>
          <div className='card-head'>
              <h3 className='product-name'>
                {product.title}<hr/>
              </h3>
              {editIndex===product && yuhhu.indexOf(product)!==-1 ? <div className={suc} role="alert">Added</div>:null}
              <span className='text-muted'>{product.subtitle}</span>
            </div>
            <div className='product-price'>
              <span className='underline'>{product.price}</span>
              {user ? <button className="btn btn-primary" onClick={()=>tests(product) }>
                {editIndex===product && yuhhu.indexOf(product)!==-1 ? "Added" : "Add to cart"}
              </button>: <h5 className='l-to-add'>Login to add</h5>}
            </div>
         </div>
        </div>
      ))}
    </div>
  )
}

export default Product
