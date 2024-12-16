import React from 'react'
import logo from '../images/logo.svg'
const NavBar = () => {
  return (
    <div className=' fixed h-24 flex flex-row overflow-hidden w-screen justify-between px-28 py-5'>
      <div className=' flex flex-row justify-between w-1/2'>
      <img src={logo} alt="ssacsc" className=' h-[58px] w-[87px]'/>
      <div className=' font-ibm-plex-sans gap-[64px] items-center text-center cursor-pointer text-[16px] flex flex-row font-normal leading-[24px] text-[#000000]  decoration-skip-ink-none'>
        <h1 >Services</h1>
        <h1>Projects</h1>
        <h1>Team</h1>
        <h1>Contact Us</h1>
      </div>
      </div>
      <div className=' flex items-center justify-center w-[190px] h-[50px]'>
        <button className=' bg-black text-[16px] font-bold text-center rounded-[60px] text-white w-[190px] h-[50px] whitespace-normal'>Marketing Tools</button>
      </div>
    </div>
  )
}

export default NavBar
