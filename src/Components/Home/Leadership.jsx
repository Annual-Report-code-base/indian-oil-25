import React, { useState } from 'react';
import { AnimatedHeading, AnimatedText } from '../AnimationLib';

const Leadership = () => {
    const [isImageView, setIsImageView] = useState(true);

    const teamMembers = [
        {
            name: "Suman Kumar",
            title: "Director (Planning and Business Development)",
            date: ""
        },
        {
            name: "Arvind Kumar",
            title: "Director (Refineries)",
            date: ""
        },
        {
            name: "A S Sahney",
            title: "Chairman",
            date: ""
        },
        {
            name: "Rashmi Govil",
            title: "Director (Human Resources)",
            date: ""
        },
        {
            name: "N Senthil Kumar",
            title: "Director (Pipelines)",
            date: "upto 30.06.2025"
        },
        {
            name: "V Satish Kumar",
            title: "Director (Marketing)",
            date: "upto 31.07.2025"
        },
        {
            name: "Alok Sharma",
            title: "Director (Research and Development)",
            date: ""
        },
        {
            name: "Atul Jain",
            title: "Director (Finance)",
            date: ""
        }
    ];

    const toggleView = () => {
        setIsImageView(!isImageView);
    };

    const MemberCard = ({ member, index }) => (
        <div
            className="bg-white rounded-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden group border-2 border-gray-200 hover:border-orange-200"
            style={{
                animationDelay: `${index * 100}ms`
            }}
        >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <div className="member-name text-xl font-semibold text-blue-900 mb-2">
                {member.name}
            </div>
            <div className="member-title text-gray-700 mb-1 leading-relaxed">
                {member.title}
            </div>
            {member.date && (
                <div className="member-date text-sm text-orange-600 italic font-medium">
                    {member.date}
                </div>
            )}
        </div>
    );

    return (
        <div className="">
            <div className=" mx-auto bg-white rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r  from-blue-900 to-orange-500 text-white p-10 text-left flex md:flex-row flex-col items-center justify-between gap-6">
                    
                    <div className="text-left">
                        <AnimatedHeading
                            level={1}
                            duration={1}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                            splitBy="chars"
                        >
                            Leadership Team
                        </AnimatedHeading>
                        <AnimatedText
                            animation='slideUp'
                            delay={0.1}
                            className='text-2xl md:text-3xl lg:text-4xl font-thin text-white leading-tight'
                        >
                            Driving Progress through Agile Stewardship
                        </AnimatedText>
                    </div>
                    <div className=''>
                        <button
                            onClick={toggleView}
                            className="border cursor-pointer border-white text-white px-8 py-3 rounded-2xl text-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform hover:from-orange-600 hover:to-blue-800"
                        >
                            {isImageView ? 'Switch to Card View' : 'Switch to Image View'}
                        </button>
                    </div>
                </div>


                {/* Image View */}
                {isImageView && (
                    <div className="relative bg-gray-50 overflow-hidden">
                        <div className="relative group pb-4">
                            <img
                                src="./iol-images/Leadership_Team/Leadership-team-img.webp"
                                alt="Leadership Team"
                                className="w-full h-auto block transition-transform duration-300 "
                            />
                            <div className="absolute inset-0 bg-blac bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>
                    </div>
                )}

                {/* Card Grid View */}
                {!isImageView && (
                    <div className="bg-gray-50 p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <MemberCard key={index} member={member} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leadership;