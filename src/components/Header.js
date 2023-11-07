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
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
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
  const handleGptSearchClick=()=>{
    //toggleGptSearch
    dispatch(toggleGptSearchView())
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-center md:justify-between '>
        <img className='w-44 mx-auto md:mx-0'
         src={logo} alt="logo"></img>
        {user&&(<div className='flex p-2 justify-between'>
          {showGptSearch&&<select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
            
            
          </select>}
          <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch?"HomePage":"GPT Search"}</button>
       <img className=' hidden md:block w-12 h-12 ' src={USERICON} alt="usericon"/>
       <button onClick={handleSignout}className='font-bold text-white'>Sign Out</button>
       </div>)}
        
    
    </div>
  )
}

export default Header