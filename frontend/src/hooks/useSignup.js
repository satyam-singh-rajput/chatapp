import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthcontext } from '../context/Authcontext';
const useSignup=() => {
    const [Loading,setLoading]=useState(true);
    const {Authuser,Setauthuser}=useAuthcontext();
    const signup=async ({Fullname,Username,Password,ConfirmPassword,Gender})=>{
        const success=handleInputerrors({Fullname,Username,Password,ConfirmPassword,Gender});
        if(!success){
            return ;
        }
        try {
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({Fullname,Username,Password,ConfirmPassword,Gender})
            });
            const data= await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            // console.log(data);
            localStorage.setItem("chat-user",JSON.stringify(data));
            Setauthuser(data);
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false)
        }
    };
    return {Loading,signup};
}

export default useSignup

const handleInputerrors=({Fullname,Username,Password,ConfirmPassword,Gender})=>{
    if(!Fullname||!Username||!Password||!ConfirmPassword||!Gender){
        // console.log(Fullname);
        // console.log(Username);
        // console.log(Password);
        // console.log(ConfirmPassword);
        // console.log(Gender);

        toast.error('Please Fill all the Entries');
        return false;
    }
    if(Password!= ConfirmPassword){
        toast.error('Password does not match with Confirm Password');
        return false;
    }
    if(Password.length<8){
        toast.error('Password should be a min of 8 characters');
        return false;
    }
    return true;
}