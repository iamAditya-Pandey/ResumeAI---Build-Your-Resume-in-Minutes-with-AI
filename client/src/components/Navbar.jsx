/*
 * @project ResumeAI
 * @file Navbar.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {

   const {user} = useSelector(state => state.auth)
   const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = ()=>{
        navigate('/')
        dispatch(logout())
    }
    
  return (
    <div className='shadow bg-white'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        
        {/* Clean link that ONLY goes to your home screen */}
        <Link to='/'>
            {/* Pure text logo - bypasses the SVG file completely so it cannot be cached or hijacked */}
            <div className="text-2xl font-black tracking-tight text-slate-800">
              ResumeAI<span className="text-violet-600">.</span>
            </div>
        </Link>
        
        <div className='flex items-center gap-4 text-sm'>
            <p className='max-sm:hidden'>Hi, {user?.name}</p>
            <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar