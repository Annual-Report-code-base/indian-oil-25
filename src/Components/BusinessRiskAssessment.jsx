import React from 'react';
import { motion } from 'framer-motion';

const BusinessRiskAssessment = () => {
    const assessmentSteps = [
        {
            number: '1',
            title: 'Systematic Identification and Evaluation',
            points: [
                'Identification and categorisation of risks based on impact and likelihood',
                'Categorisation of risks into four levels: High, Medium, On Radar and Low',
            ],
        },
        {
            number: '2',
            title: 'Risk Mitigation and Monitoring',
            points: [
                'Employ strategies such as avoidance, reduction, transfer and acceptance',
                'Continuous monitoring and regular reviews to ensure effectiveness',
            ],
        },
        {
            number: '3',
            title: 'Integration into Decision-making',
            points: [
                'Strategic planning and operational decisions with risk assessment insights',
                'Balance risks and opportunities for sustainable growth',
            ],
        },
        {
            number: '4',
            title: 'Continuous Improvement',
            points: [
                'Regular meetings of the Risk Management Compliance Board',
                'Address emerging concerns and adjust mitigation plans proactively',
            ],
        },
        {
            number: '5',
            title: 'Collaboration and Coordination',
            points: [
                'Foster collaboration across business segments and departments',
                'Ensure comprehensive risk assessment and effective mitigation strategies through shared expertise',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = (isLeftAligned) => ({
        hidden: { opacity: 0, x: isLeftAligned ? -100 : 100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    });

    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#11af7e] mb-5">BUSINESS RISK ASSESSMENT</h2>
            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {assessmentSteps.map((step, index) => {
                    const isLeftAligned = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`flex ${isLeftAligned ? 'flex-row' : 'flex-row-reverse'} space-x-6`}
                            variants={itemVariants(isLeftAligned)}
                        >
                            <div className='flex md:flex-row flex-col'>
                                <div className={`flex-shrink-0 text-8xl pr-2 font-bold text-[#fee2cf] ${isLeftAligned ? '' : 'text-left'}`}>
                                        {step.number}
                                    </div>
                                <div className={isLeftAligned ? '' : 'text-left'}>
                                    
                                    <h3 className="text-2xl font-semibold mb-2 text-[#f47732]">{step.title}</h3>
                                    <ul className="list-none space-y-2">
                                        {step.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start">
                                                <span className="text-xl font-bold text-gray-600 mr-2">↗</span>
                                                <p className="text-lg text-gray-700">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default BusinessRiskAssessment;