import React, { useState } from 'react';
import { AnimatedHeading, AnimatedText } from '../AnimationLib';

const Message = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
            {/* Subtle Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-32 left-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-slate-600/3 to-blue-600/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
            </div>

            {/* Sophisticated Geometric Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-16 w-2 h-16 bg-gradient-to-b from-blue-500/30 to-transparent animate-pulse"></div>
                <div className="absolute top-1/3 right-24 w-8 h-8 border border-gray-400/20 rotate-45 animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-slate-400/30 to-transparent animate-pulse delay-500"></div>
                <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-blue-600/20 rotate-45 animate-pulse delay-1500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                {/* Sophisticated Header */}
                <div className='text-center mb-8 px-4'>
                    <AnimatedHeading
                        level={1}
                        duration={1}
                        className='text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-white mb-4'
                        splitBy="chars"
                    >
                        From the Chairman’s Desk
                    </AnimatedHeading>
                </div>

                {/* Sophisticated CEO Card */}
                <div
                    className={`relative group transition-all duration-1000 ${isHovered ? 'transform -translate-y-2' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Subtle Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/10 via-slate-600/10 to-blue-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="grid lg:grid-cols-12 gap-0">
                            {/* Elegant Image Side */}
                            <div className="lg:col-span-5 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30 z-10"></div>

                                {/* Minimal Corner Accents */}
                                <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-blue-400/40 z-20"></div>
                                <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-slate-400/40 z-20"></div>

                                {/* Animated Line Elements */}
                                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20"></div>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

                                <img
                                    src="./iol-images/From the Chairman's Desk/From The Chairmans Desk.webp"
                                    alt="CEO Portrait"
                                    className="w-full h-[60%] object-cover  grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-101"
                                />

                                {/* Mobile Name Badge */}
                                <div className="absolute bottom-8 left-8 right-8 lg:hidden">
                                    <div className="bg-black/60 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                                        <h3 className="text-2xl font-light text-white mb-1">
                                            Shri A S Sahney
                                        </h3>
                                        <p className="text-blue-300 text-xs font-medium tracking-[0.2em]">Chairman, IndianOil</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sophisticated Content Side */}
                            <div className="lg:col-span-7 p-8 lg:p-16 relative">
                                {/* CEO Info - Desktop */}
                                <div className="hidden lg:block mb-12 relative">
                                    <div className="flex items-center mb-8">
                                        <div className="w-12 h-px bg-gradient-to-r from-blue-500/50 to-transparent mr-4"></div>
                                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>

                                    <h3 className="text-5xl font-thin text-white mb-4 tracking-wide">
                                        Shri A S Sahney
                                    </h3>
                                    <p className="text-blue-300 font-medium tracking-[0.3em] text-xs mb-8">
                                        Chairman, IndianOil
                                    </p>
                                    <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                                </div>

                                {/* Refined Message Content */}
                                <div className="space-y-8 relative">
                      

                                    <div className="relative border-l border-white/10 pl-8 space-y-6">
                                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                                            IndianOil concluded 2024–25 with record highs in product sales, refining and pipelines operations, while accelerating its shift to green energy. With bold investments, new-age fuels and Project SPRINT
                                            in motion, the Company is reshaping itself into a future-ready, diversified energy leader.
                                        </p>
                                    </div>

                                    {/* Elegant Signature Section */}
                                    <div className=" relative">
                                        <div className="group cursor-pointer">
                                            <div className="relative mb-6">
                                                <svg viewBox="0 0 280 80" className="w-44 h-12 group-hover:opacity-80 transition-opacity duration-500">
                                                    <defs>
                                                        <linearGradient id="corporateSignature" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#64748b" />
                                                            <stop offset="50%" stopColor="#3b82f6" />
                                                            <stop offset="100%" stopColor="#64748b" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        d="M20 40 Q 90 20, 160 40 Q 220 60, 260 35"
                                                        stroke="url(#corporateSignature)"
                                                        strokeWidth="1.5"
                                                        fill="none"
                                                        className="opacity-70"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="border-l-2 border-blue-500/30 pl-6">
                                                <p className="text-white font-light text-xl mb-1">Marcus Blackwood</p>
                                                <p className="text-gray-400 text-xs font-light tracking-widest">CHIEF EXECUTIVE OFFICER</p>
                                                <div className="flex items-center mt-3 space-x-3">
                                                    <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                                                    <div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;