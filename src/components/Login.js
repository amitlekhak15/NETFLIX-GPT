import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import Header from './Header'
import { checkValidate } from '../utils/validate'
import { auth } from '../utils/firebase';
import { BACKBROUND } from '../utils/constants';

const Login = () => {
    const[isSignInForm,setisSignInForm]=useState(true)
    const[errorMessage,setErrormessage]=useState()
    const navigate=useNavigate()
    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)
    const toggleSignInForm=()=>{

    setisSignInForm(!isSignInForm)
    }
    const onHandleCLick=()=>{
        //validation
       const message= checkValidate(email.current.value,password.current.value)
       
       setErrormessage(message)
       if(message)return
       //signin //signup
       if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      
      // ...
    }).catch((error) => {
      // An error occurred
      setErrormessage(error.message)
      // ...
    });
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage)
    // ..
  });



       }
       else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage)
  });

       }


       


    }
  return (
    <div><Header/>
    <div className='absolute'>
    <img  className="h-screen object-cover"src={BACKBROUND}
        alt="logo"></img>
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold  p-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {isSignInForm?"":<input type="text" placeholder='Full Name ' className='p-4 my-2 w-full rounded-lg bg-gray-500' ref={name}/>}
            <input type="text" placeholder='Email Address ' className='p-4 my-2 w-full rounded-lg bg-gray-500 ' ref={email}/>
        <input type="text" placeholder='Password' className='p-4 my-2 w-full rounded-lg bg-gray-500 ' ref={password} />
            <p className='text-red-500'>{errorMessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={onHandleCLick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer font-bold ' onClick={toggleSignInForm}>
            {isSignInForm?"New to Netflix ? Sign Up Now":"Already Registered ? Sign In Now"}
                </p>
            
        </form>
    </div>
  )
}

export default Login