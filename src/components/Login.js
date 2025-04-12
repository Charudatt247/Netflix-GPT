import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInform = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg" 
        alt="logo" />
        </div>
        <form className='absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white  bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input 
            type='text' 
            placeholder='Email or Mobile Number' 
            className='p-4 my-4 w-full rounded-md bg-black bg-opacity-60 border border-white'/>}
            <input 
            type='text' 
            placeholder='Email or Mobile Number' 
            className='p-4 my-4 w-full rounded-md bg-black bg-opacity-60 border border-white'/>
            <input 
            type='password' 
            placeholder='password' 
            className='p-4 my-4 w-full rounded-md  bg-black bg-opacity-60 border border-white'/>
            <button className=' my-6 py-2 bg-red-700 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='p-2 my-2 cursor-pointer' onClick={toggleSignInform}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered! Sign Up Now...."}
            </p>
        </form>
    </div>
  )
}

export default Login;