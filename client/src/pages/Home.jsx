/**
 * @project ResumeAI
 * @file Home.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}


export default Home
