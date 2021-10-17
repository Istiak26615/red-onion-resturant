import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebaseApp from '../Firebase/Firebase.init';

initializeFirebaseApp();
const useFirebase = () => {
    
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const auth = getAuth();
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        e.preventDefault()
    }
    const handlePass=(e)=>{
        console.log(e.target.value)
        e.preventDefault()
    }
    const handleSomething=(e)=>{
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        e.preventDefault()
        // module 57.4 
    }
    return {email,password, setEmail,setPassword, handleEmail, handlePass, handleSomething}
};

export default useFirebase;