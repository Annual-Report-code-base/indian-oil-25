import React, { useState } from 'react';
import KnowMore from '../KnowMore';

// Mock animated components since they're not available
const AnimatedHeading = ({ children, className, ...props }) => (
    <h1 className={className}>{children}</h1>
);

const Message = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=" bg-gradient-to-br from-[#2a2b73] via-[#338eaf] to-[#3eaa85] relative overflow-hidden">
            {/* Subtle Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-32 left-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-40 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-slate-600/3 to-blue-600/3 rounded-full blur-3xl animate-spin"
                    style={{ animationDuration: '30s' }}
                ></div>
            </div>

            {/* Sophisticated Geometric Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-16 w-2 h-16 bg-gradient-to-b from-blue-500/30 to-transparent animate-pulse"></div>
                <div className="absolute top-1/3 right-24 w-8 h-8 border border-gray-400/20 rotate-45 animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-slate-400/30 to-transparent animate-pulse delay-500"></div>
                <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-blue-600/20 rotate-45 animate-pulse delay-1500"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
                {/* Sophisticated Header */}
                <div className="text-center mb-12 px-4">
                    <AnimatedHeading
                        level={1}
                        duration={1}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold w-fit mx-auto text-white mb-4"
                        splitBy="chars"
                    >
                        From the Chairman's Desk
                    </AnimatedHeading>
                </div>

                {/* Compact CEO Card */}
                <div
                    className={`relative group transition-all duration-700 max-w-6xl mx-auto ${isHovered ? 'transform -translate-y-1' : ''
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Subtle Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/10 via-slate-600/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="grid md:grid-cols-7 gap-0">
                            {/* Image Side */}
                            <div className="md:col-span-2 relative flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30 z-10"></div>

                                {/* Minimal Corner Accents */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400/40 z-20"></div>
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-slate-400/40 z-20"></div>

                                {/* Image - full height so bottom touches card bottom */}
                                <div className="h-full overflow-hidden">
                                    <img
                                        src="./iol-images/From the Chairman's Desk/From The Chairmans Desk.webp"
                                        alt="Chairman Portrait"
                                        className="w-full h-full object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                {/* Mobile Name Badge */}
                                <div className="absolute bottom-0 w-[90%] left-1/2 -translate-x-1/2  md:hidden">
                                    <div className="bg-black/60 backdrop-blur-xl rounded-lg p-4 border border-white/10">
                                        <h3 className="text-lg font-light text-white mb-1">Shri A S Sahney</h3>
                                        <p className="text-blue-300 text-xs font-medium tracking-wider">
                                            Chairman, IndianOil
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Wider Content Side */}
                            <div className="md:col-span-5 p-6 md:p-8 relative flex flex-col justify-center">
                                {/* CEO Info - Desktop */}
                                <div className="hidden md:block mb-6 relative">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent mr-3"></div>
                                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>

                                    <h3 className="text-3xl font-thin text-white mb-2 tracking-wide">
                                        Shri A S Sahney
                                    </h3>
                                    <p className="text-blue-300 font-medium tracking-wider text-xs mb-4">
                                        Chairman, IndianOil
                                    </p>
                                    <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                                </div>

                                {/* Refined Message Content */}
                                <div className="space-y- relative">
                                    <div className="relative border-l border-white/10 pl-6">
                                        <p className="text-gray-300 text-xl leading-relaxed font-ligh">
                                            IndianOil concluded 2024–25 with record highs in product
                                            sales, refining and pipelines operations, while
                                            accelerating its shift to green energy. With bold
                                            investments, new-age fuels and Project SPRINT in motion,
                                            the Company is reshaping itself into a future-ready,
                                            diversified energy leader.
                                        </p>
                                    </div>

                                    {/* Compact Signature Section */}
                                    <div className="relative pt-8">
                                        <div className="group cursor-pointer">
                                           

                                            <div className="border-l-2 border-blue-500/30 pl-6">
                                                {/* <p className="text-white font-light text-lg mb-1">
                                                    Shri A S Sahney
                                                </p>
                                                <p className="text-white text-xs font-light tracking-wider">
                                                    CHAIRMAN, INDIANOIL
                                                </p>
                                                <div className="flex items-center mt-2 space-x-2">
                                                    <div className="w-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                                                    <div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>
                                                </div> */}
                                                <KnowMore theme='rose-200'/>
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
