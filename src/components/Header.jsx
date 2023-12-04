import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false)

  const burgerClick = ()=>{setBurgerOpen(!isBurgerOpen)};
  return (
    <>
        <header className='w-full fixed z-[100] top-0 bg-[rgba(0,0,0,0.5)] xl:container xl:top-0 xl:left-1/2 xl:-translate-x-1/2'>
        <nav className='w-full'>
          <div className='lg:hidden flex justify-between items-center px-[20px] py-[10px] md:px-[40px]'>
            <NavLink to="/"><img src="./assets/LOGO.svg" alt="MusicaLibre" className='w-[200px] cursor-pointer'/></NavLink> 
            {isBurgerOpen?<img src="./assets/xmark-solid.svg" alt="Menu" className='w-[30px] h-[50px] cursor-pointer' onClick={burgerClick} />:<img src="./assets/bars-solid.svg" alt="Menu" className='w-[30px] h-[50px] cursor-pointer' onClick={burgerClick} />}  
          </div>
          <div className='hidden bg-[rgba(0,0,0,0.5)] lg:flex justify-between items-center px-[20px] py-[20px] lg:px-[60px]'>
            <NavLink to="/"><img src="./assets/LOGO.svg" alt="MusicaLibre" className='w-[200px] cursor-pointer'/></NavLink>
            <ul className='flex justify-evenly items-center gap-x-[30px] text-white'>
              <li><NavLink to="/" className={
                ({isActive}) => !isActive?'desktop-links': 'active-class-link'
              }>HOME</NavLink></li>
              <li><NavLink to="/discover" className={
                ({isActive}) => !isActive?'desktop-links': 'active-class-link'
              }>DISCOVER</NavLink></li>
              <li><NavLink to="/about" className={
                ({isActive}) => !isActive?'desktop-links': 'active-class-link'
              }>ABOUT US</NavLink></li>
              <li><NavLink to="/contact" className={
                ({isActive}) => !isActive?'desktop-links': 'active-class-link'
              }>CONTACT US</NavLink></li>
              <li><NavLink to="/signup" className={
                ({isActive}) => !isActive?'desktop-links': 'active-class-link'
              }>SIGN UP</NavLink></li>
              <li><NavLink to="/login" className='log-in-btn px-[24px] py-[8px] ml-[50px]'>LOG IN</NavLink></li>
            </ul>
          </div>
        </nav>   
        <div className={`bg-[black] h-[100vh] overflow-hidden ${isBurgerOpen?'':'hidden'}`}>
          <ul className='text-white pt-2'>
            <NavLink to="/"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>HOME</li></NavLink>
            <NavLink to="/discover"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>DISCOVER</li></NavLink>
            <NavLink to="/about"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>ABOUT US</li></NavLink>
            <NavLink to="/contact"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>CONTACT US</li></NavLink>
            <NavLink to="/signup"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>SIGN UP</li></NavLink>
            <NavLink to="/login"><li className='py-3 pl-5 border-b-[1px] border-[rgba(156, 156, 156, 0.181)] cursor-pointer font-bold hover:bg-[#8B00F9]'>LOG IN</li></NavLink>
          </ul>
        </div>
      </header>     
    </>
  )
}

export default Header