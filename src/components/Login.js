import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {

        const message = checkValidData( email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        //sign up /sign in logic
        if(!isSignInForm){
            //sign Up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                    // ...
                  }).catch((error) => {
                    setErrorMessage(error.message)
                    // ...
                  });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
        else{
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
            });
        }
    };

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
        <form onClick={(e) => e.preventDefault()}
        className='absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white  bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input
            ref = {name} 
            type='text' 
            placeholder='Full Name' 
            className='p-4 my-4 w-full rounded-md bg-black bg-opacity-60 border border-white'/>}
            <input 
            ref = {email}
            type='text' 
            placeholder='Email or Mobile Number' 
            className='p-4 my-4 w-full rounded-md bg-black bg-opacity-60 border border-white'/>
            <input 
            ref = {password}
            type='password' 
            placeholder='password' 
            className='p-4 my-4 w-full rounded-md  bg-black bg-opacity-60 border border-white'/>
            <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
            <button className=' my-6 py-2 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='p-2 my-2 cursor-pointer' onClick={toggleSignInform}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered! Sign Up Now...."}
            </p>
        </form>
    </div>
  )
}

export default Login;