import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChp7aiDMcRWcWW29XZqGnq0av5zhyw0as",
    authDomain: "book-auth-17d5d.firebaseapp.com",
    projectId: "book-auth-17d5d",
    storageBucket: "book-auth-17d5d.appspot.com",
    messagingSenderId: "89405562969",
    appId: "1:89405562969:web:232fc48885eda5595e5148",
    measurementId: "G-1340372EZC"
  };
  
  
  const app = firebase.initializeApp(firebaseConfig);
  export const  yuhhu = []
  export const Context = createContext(null)
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  ReactDOM.render(
  <Context.Provider
    value={{app,auth,firestore}}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
