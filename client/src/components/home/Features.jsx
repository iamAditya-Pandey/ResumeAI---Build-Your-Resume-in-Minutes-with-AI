/**
 * @project ResumeAI
 * @file Features.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import React, { useState } from 'react'
import Title from './Title';
import { Zap, Sparkles, FileCheck2, DownloadCloud } from 'lucide-react';

const Features = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div id='features' className='flex flex-col items-center my-16 scroll-mt-12 overflow-hidden'>

            {/* Badge & Title*/}
            <div className="flex items-center gap-2 text-sm text-violet-600 bg-violet-400/10 rounded-full px-6 py-1.5 mb-4">
                <Zap width={14} />
                <span className="font-medium">Smart Features</span>
            </div>
            
            <Title 
                title='Build a winning resume in minutes' 
                description='Leverage cutting-edge AI to generate tailored bullet points, bypass ATS bots, and land your dream job faster.' 
            />

            {/* Main Content Container */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 lg:gap-20 mt-12 px-6">
                
                {/* LEFT SIDE: Overlapping Professional Mockups */}
                <div className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] flex items-center justify-center group">
                    {/* Back Document (Slightly faded, rotated right) */}
                    <img 
                        src="https://images.unsplash.com/photo-1616628188550-808682f3926d?q=80&w=600&auto=format&fit=crop" 
                        alt="Resume Template Layout" 
                        className="absolute top-4 right-4 sm:right-10 w-2/3 max-w-[320px] rounded-xl shadow-2xl rotate-6 opacity-80 border border-gray-200 transition-transform duration-500 group-hover:rotate-12"
                    />
                    {/* Front Document (Crisp, rotated left, higher z-index) */}
                    <img 
                        src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop" 
                        alt="ATS Resume Template" 
                        className="absolute bottom-8 left-4 sm:left-10 w-2/3 max-w-[320px] rounded-xl shadow-2xl -rotate-3 border-4 border-white transition-transform duration-500 group-hover:-rotate-6 z-10"
                    />
                    {/* Decorative Blur blob behind images for that modern glow (Updated to Violet) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-400/20 blur-3xl rounded-full -z-10"></div>
                </div>

                {/* RIGHT SIDE: Feature Cards */}
                <div className="w-full md:w-1/2 flex flex-col gap-4" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    
                    {/* Feature 1: AI Smart Writer */}
                    <div className="flex items-center justify-start max-w-md w-full cursor-pointer group">
                        <div className={`p-6 w-full group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <Sparkles className="size-8 stroke-violet-600 shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-800">AI Smart Writer</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">Generate tailored, industry-specific bullet points that highlight your achievements perfectly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: ATS Templates */}
                    <div className="flex items-center justify-start max-w-md w-full cursor-pointer group">
                        <div className="p-6 w-full group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
                            <FileCheck2 className="size-8 stroke-green-600 shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-800">ATS-Optimized Templates</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">Clean, professional layouts rigorously tested to easily pass through Applicant Tracking Systems.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: PDF Export */}
                    <div className="flex items-center justify-start max-w-md w-full cursor-pointer group">
                        <div className="p-6 w-full group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <DownloadCloud className="size-8 stroke-orange-600 shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-800">1-Click PDF Export</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">Download your polished resume in a crisp, flawlessly formatted PDF ready to send to recruiters.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
    )
}

export default Features