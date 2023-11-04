import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    }); 
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-44'
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
        {user&&(<div className='flex p-2'>
       <img className='w-12 h-12' src="https://icons.iconarchive.com/icons/martin-berube/people/256/kid-icon.png" alt="usericon"/>
       <button onClick={handleSignout}lassName='font-bold text-white'>Sign Out</button>
       </div>)}
        
    
    </div>
  )
}

export default Header