/**
 * @project ResumeAI
 * @file App.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
      if (token) {
        const { data } = await api.get('/api/users/data', { headers: { Authorization: token } })
        if (data.user) {
          dispatch(login({ token, user: data.user }))
        }
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      {/* Updated Toaster */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Ensures the toast uses your premium Outfit font
          className: 'font-outfit text-sm font-medium',
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#7c3aed', // violet-600
              secondary: '#fff',
            },
            style: {
              border: '1px solid #ddd6fe', // violet-200
              padding: '12px 24px',
              color: '#1e293b',
              borderRadius: '99px', // Makes it a pill shape to match your buttons
            },
          },
          error: {
            duration: 4000,
            style: {
              border: '1px solid #fecaca', // red-200
              padding: '12px 24px',
              color: '#1e293b',
              borderRadius: '99px',
            },
          }
        }}
      />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />

      </Routes>
    </>
  )
}

export default App