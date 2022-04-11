import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../../index';
import "./cart.css";
const Cart = () => {
  let num = 1
  const oldData = JSON.parse(localStorage.getItem('to-cart')) || [];
  const{auth}=useContext(Context)
  const[user]=useAuthState(auth)
  return (
    <div className='container'>
      <h1 className='title'>Saved books</h1>
      {oldData.length === 0 && (
      <div className='empty'>
        No items added.
      </div>
      )}
      {user? <div className='cart-added'>
      <table className="table">
        <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book</th>
                <th scope="col">Price</th>
                <th scope="col">Url</th>
              </tr>
        </thead>
        {oldData.map((yuh)=>(
          
            <tbody key={yuh.url}>
              <tr>
                <th scope="row">{num++}</th>
                <td>{yuh.title}</td>
                <td>{yuh.price}</td>
                <td><a href={yuh.url}>Link</a></td>
              </tr>
            </tbody>
          
        ))}
       </table>
      </div> : <div className='talab'>
        <h1 className='s-sup-see'>Sign Up for see</h1>
      </div>}
    </div>
  )
}

export default Cart