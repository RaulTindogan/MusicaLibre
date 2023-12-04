import React from 'react'
import LogInForm from '../components/LogInForm'

function LogIn() {
  return (
    <section className='text-white px-[20px] py-[90px] bg-[#171717] md:px-[40px] lg:px-[60px] xl:container xl:mx-auto '>
      <h1 className='text-[2rem] font-bold'>LOG IN</h1>
      <LogInForm /> 
    </section>
  )
}

export default LogIn