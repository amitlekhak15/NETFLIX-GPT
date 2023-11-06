import React, { useEffect }from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logo } from '../utils/constants';
import { USERICON } from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    }); 
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
        
        
      
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
        
  
        // User is signed out
        // ...
      }
    });
    //unsubscribe when component unmounts
    return ()=>unsubscribe()
  
  },[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-44'
         src={logo} alt="logo"></img>
        {user&&(<div className='flex p-2'>
       <img className='w-12 h-12' src={USERICON} alt="usericon"/>
       <button onClick={handleSignout}className='font-bold text-white'>Sign Out</button>
       </div>)}
        
    
    </div>
  )
}

export default Header