/**
 * @project ResumeAI
 * @file Testimonial.jsx
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import React from 'react'
import Title from './Title'
import { BookUserIcon } from 'lucide-react'

const Testimonial = () => {

    const cardsData = [
        {
            // Distinct young developer vibe
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', 
            name: 'Alex Mercer',
            handle: '@alex_codes',
            review: 'The AI perfectly summarized my MERN stack experience. I went from getting ghosted to landing three interviews in a week.'
        },
        {
            // Distinct professional woman vibe
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
            name: 'Priya Sharma',
            handle: '@priya_dev',
            review: 'Finally, a resume builder that knows how to highlight my competitive programming ratings and GitHub commits effectively!'
        },
        {
            // Distinct male vibe
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
            name: 'Jordan Lee',
            handle: '@jordantalks_tech',
            review: 'As a web developer, I am picky about UI. ResumeAI is stunning, fast, and the ATS-friendly PDF exports are flawless.'
        },
        {
            // Distinct Asian male vibe
            image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=200&auto=format&fit=crop',
            name: 'Marcus Chen',
            handle: '@marcus_builds',
            review: 'It takes the guesswork out of formatting. The AI bullet points made my software engineering roles sound incredibly impactful.'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
            <div className="flex gap-2">
                {/* Updated accessibility with card.name */}
                <img className="size-11 rounded-full object-cover" src={card.image} alt={`${card.name} profile photo`} loading="lazy"/>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-medium text-slate-800">{card.name}</p>
                        {/* Verified Checkmark SVG (Updated to Violet) */}
                        <svg className="mt-0.5 fill-violet-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            {/* Dyamic unique review text */}
            <p className="text-sm py-4 text-gray-700 leading-relaxed">{card.review}</p>
        </div>
    );

    return (
        <>
            <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12'>
                {/* Badge updated to Violet */}
                <div className="flex items-center gap-2 text-sm text-violet-600 bg-violet-400/10 rounded-full px-6 py-1.5">
                    <BookUserIcon className="size-4.5 stroke-violet-600" />
                    <span>Testimonials</span>
                </div>
                <Title 
                    title="Loved by Ambitious Professionals" 
                    description="See how ResumeAI is helping developers and job seekers bypass ATS filters and land interviews at top companies." 
                />
            </div>

            {/* Marquee Row 1 */}
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Marquee Row 2 (Reverse) */}
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            {/* Consider moving this to index.css later for cleaner code! */}
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
            `}</style>
        </>
    )
}

export default Testimonial