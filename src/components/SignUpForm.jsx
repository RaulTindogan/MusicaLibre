import React, { useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandle = (e) => {e.preventDefault()}


  return (
    <div className="px-[20px] py-[40px] lg:px-[60px] md:w-[600px] mx-auto">
        <div className="form-container bg-[#2D014F] py-[30px] px-[20px] rounded-[10px] md:px-[40px] md:py-[40px]">
            <form className="flex flex-col" onSubmit={submitHandle}>
                <input type="text" name="" id="" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] pl-[20px]" value={username} onChange= {(e)=>{setUsername(e.target.value)}} placeholder="Username" required/>
                <input type="email" name="" id="" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] pl-[20px]" value={email} onChange= {(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" required/>
                <input type="password" name="" id="" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] pl-[20px]" value={password} onChange= {(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Password" required/>
                <input type="password" name="" id="" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] pl-[20px]" value={confirmPassword} onChange= {(e)=>{setConfirmPassword(e.target.value)}} placeholder="Re-enter Your Password" required/>
                <input type="submit" value="Sign Up" className="font-bold text-[1.2rem] rounded-[10px] border-2 border-white cursor-pointer py-[5px] bg-[#8B00F9]"/>
            </form>
            <div className='flex justify-center items-center my-[20px]'>
              <hr className='h-[1px] bg-black w-1/2' />
              <p className='mx-[20px]'>or</p>
              <hr className='h-[1px] bg-black w-1/2' />
            </div>
            <div className='flex flex-col gap-[10px]'>
              <button className="font-bold text-[1.2rem] rounded-[10px] border-2 border-white cursor-pointer py-[5px] bg-[#4267C9]">Sign Up with Facebook</button>
              <button className="font-bold text-[1.2rem] rounded-[10px] border-2 border-white cursor-pointer py-[5px] bg-[#F84E05]">Sign Up with Google+</button>
            </div>
       </div>
    </div>
  )
}

export default SignUpForm