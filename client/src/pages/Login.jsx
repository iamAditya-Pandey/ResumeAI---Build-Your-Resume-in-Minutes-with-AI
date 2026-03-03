/**
 * @project ResumeAI
 * @file Login.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50 font-outfit'>
            <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-sm">
                <h1 className="text-gray-900 text-3xl mt-10 font-semibold">{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
                
                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-violet-400 transition-colors">
                        <User2Icon size={16} color='#6B7280'/>
                        <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0 w-full text-sm" value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-violet-400 transition-colors">
                    <Mail size={13} color="#6B7280" />
                    <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0 w-full text-sm" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-violet-400 transition-colors">
                    <Lock size={13} color="#6B7280"/>
                    <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0 w-full text-sm" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mt-4 text-left">
                    {/* Updated text color*/}
                    <button className="text-sm text-violet-600 hover:text-violet-700 font-medium" type="reset">Forget password?</button>
                </div>

                {/* Updated Button  */}
                <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-violet-600 hover:bg-violet-700 active:scale-[0.98] transition-all font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                {/* Updated Link*/}
                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-500 text-sm mt-4 mb-11 cursor-pointer">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                    <span className="text-violet-600 font-medium hover:underline">click here</span>
                </p>
            </form>
        </div>
    )
}

export default Login