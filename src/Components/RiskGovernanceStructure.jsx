import React from 'react';

const RiskGovernanceStructure = () => {
    const Card = ({ title, iconSrc, altText }) => (
        <div className="flex items-center w-full">
            <div className="relative flex-shrink-0 w-20 h-20">
                <svg className="w-full h-full text-[#ebebeb]" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70 0H10C4.47715 0 0 4.47715 0 10V70C0 75.5228 4.47715 80 10 80H70C75.5228 80 80 75.5228 80 70V10C80 4.47715 75.5228 0 70 0Z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={iconSrc} alt={altText} className="w-1/2 h-1/2 object-contain" />
                </div>
                <div className="absolute top-1/2 left-full -mt-2.5 w-5 h-5 bg-[#ebebeb] transform rotate-45" style={{ zIndex: -1 }}></div>
            </div>
            <div className="flex-grow p-4 border-b-2 border-gray-300">
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </div>
    );

    return (
        <div className="">
            <h2 className="text-2xl font-bold text-[#11af7e] mt-5 mb-8">INDIANOIL'S RISK GOVERNANCE STRUCTURE</h2>
            <div className="flex flex-col space-y-4">
                <Card 
                    title="Board of Directors" 
                    iconSrc="/path-to-your-icons/board.png" 
                    altText="Board of Directors Icon" 
                />
                <Card 
                    title="Audit Committee" 
                    iconSrc="/path-to-your-icons/audit.png" 
                    altText="Audit Committee Icon" 
                />
                <Card 
                    title="Risk Management Committee (RMC)" 
                    iconSrc="/path-to-your-icons/rmc.png" 
                    altText="Risk Management Committee Icon" 
                />
                <Card 
                    title="Risk Management Compliance Board (RMCB)" 
                    iconSrc="/path-to-your-icons/rmcb.png" 
                    altText="Risk Management Compliance Board Icon" 
                />
                <Card 
                    title="State/Unit Level Committees" 
                    iconSrc="/path-to-your-icons/state.png" 
                    altText="State/Unit Level Committees Icon" 
                />
            </div>
        </div>
    );
};

export default RiskGovernanceStructure;