import React,{useContext} from 'react'
import { Context } from '../../../index';
import "./SignUp.css";
import firebase from 'firebase/compat/app';
import {useAuthState}from'react-firebase-hooks/auth'
const Signup = () => {
  const {auth}=useContext(Context)
  const[user]=useAuthState(auth)
  const signed = async() =>{
    const provider =new firebase.auth.GoogleAuthProvider()
    const {user} =await firebase.auth().signInWithPopup(provider)
  }
  return (
    <div className='main'>
        <div className='container'>
            <div className='btns'>
                {user ?
                <div className='for-welcome'>
                  <img src={user.photoURL} alt="user photo"/>
                  <h2>Welcome<br/> {user.displayName}</h2>  
                </div>
                  :
                  <div className='signwith'>
                    <h2>Sign with Google</h2>
                    <button className='btn btn-primary' onClick={signed}><i className="fa-brands fa-google-plus-g"></i> Sign up</button>
                  </div>
              }
            </div>
        </div>
    </div>
  )
}
export default Signup;
