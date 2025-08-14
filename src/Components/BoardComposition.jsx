import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BoardCompositionGraphs = () => {
    // Data for Composition graph
    const compositionData = {
        labels: ['Whole-time (Executive) Directors', 'Government Nominee Directors', 'Non-Executive Independent Directors'],
        datasets: [{
            data: [54.55, 18.18, 27.27],
            backgroundColor: ['#f9a91b', '#c0416d', '#7e5551'],
            hoverBackgroundColor: ['#e0a800', '#9d2d76', '#5a6268'],
            borderWidth: 0,
        }],
    };

    // Data for Gender graph
    const genderData = {
        labels: ['Male Directors', 'Female Directors'],
        datasets: [{
            data: [72.73, 27.27],
            backgroundColor: ['#f9a91b', '#c0416d'],
            hoverBackgroundColor: ['#e0a800', '#9d2d76'],
            borderWidth: 0,
        }],
    };

    // Data for Age graph
    const ageData = {
        labels: ['Age 35-45', 'Age 46-55', 'Age 55 and above'],
        datasets: [{
            data: [9.09, 36.36, 54.55],
            backgroundColor: ['#f9a91b', '#c0416d', '#7e5551'],
            hoverBackgroundColor: ['#e0a800', '#9d2d76', '#5a6268'],
            borderWidth: 0,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
        cutout: '80%',
    };

    const CustomLegend = ({ data, colors }) => (
        <div className="mt-4 space-y-2">
            {data.labels.map((label, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <span className="w-4 h-4" style={{ backgroundColor: colors[index] }}></span>
                    <span className="text-sm">{label} - {data.datasets[0].data[index]}%</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row justify-around  space-y-8 md:space-y-0 md:space-x-8 p-4 bg-[#fef1e6] mt-5">
            {/* Composition Graph */}
            <div className="flex flex-col items-center max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Composition (%)</h3>
                <div className="relative w-60 h-60">
                    <Doughnut data={compositionData} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#f9a91b]"></span>
                        <span>Whole-time (Executive) Directors - 6 <span className='text-gray-500'>(54.55%)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#c0416d]"></span>
                        <span>Government Nominee Directors - 2 <span className='text-gray-500'>(18.18%)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#7e5551]"></span>
                        <span>Non-Executive Independent Directors - 3 <span className='text-gray-500'>(27.27%)</span></span>
                    </div>
                </div>
            </div>

            {/* Gender Graph */}
            <div className="flex flex-col items-center max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Gender (%)</h3>
                <div className="relative w-60 h-60">
                    <Doughnut data={genderData} options={options} />
                    
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#f9a91b]"></span>
                        <span>Male Directors - 8 <span className='text-gray-500'>(72.73%)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#c0416d]"></span>
                        <span>Female Directors - 3 <span className='text-gray-500'>(27.27%)</span></span>
                    </div>
                </div>
            </div>

            {/* Age Graph */}
            <div className="flex flex-col items-center max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Age (%)</h3>
                <div className="relative w-60 h-60">
                    <Doughnut data={ageData} options={options} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#f9a91b]"></span>
                        <span>Age 35-45 - 1 <span className='text-gray-500'>(9.09%)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#c0416d]"></span>
                        <span>Age 46-55 - 4 <span className='text-gray-500'>(36.36%)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-[#7e5551]"></span>
                        <span>Age 55 and above - 6 <span className='text-gray-500'>(54.55%)</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardCompositionGraphs;