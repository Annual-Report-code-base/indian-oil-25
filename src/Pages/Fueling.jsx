import React from 'react';

const Fueling = () => {
    const capitals = [
        {
            title: 'FINANCIAL CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Financial-capital-img.webp',
            text: 'We strategically allocate financial resources to optimise returns, while funding innovation and transition projects. Our core investments in refining, pipelines and distribution networks ensure operational excellence, even as we channel capital towards cleaner energy ventures. The trade-off here involves balancing immediate financial performance with long-term sustainable growth in a rapidly evolving energy landscape.',
            bgColor: 'bg-[#fff0e8]',
            textColor: 'text-[#f47732]',
            iconColor: '#f47732'
        },
        {
            title: 'HUMAN CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Human-capital-img.webp',
            text: 'Our people are at the heart of everything we do. We are committed to nurturing talent and building a culture that prioritises safety, inclusion and continuous learning. We continue to invest in human capital, ensuring our workforce remains agile, empowered and equipped to drive progress through every stage of the energy transition.',
            bgColor: 'bg-[#e5f5f4]',
            textColor: 'text-[#3b9197]',
            iconColor: '#3b9197'
        },
        {
            title: 'MANUFACTURED CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Manufactured-capital-img.webp',
            text: 'Our robust infrastructure forms the backbone of energy security. Maintaining and upgrading this infrastructure is critical, yet we carefully weigh every decision and adopt a well-considered approach, which includes fortifying our core assets and investing in new energy solutions.',
            bgColor: 'bg-[#e7f1f9]',
            textColor: 'text-[#3093ce]',
            iconColor: '#3093ce'
        },
        {
            title: 'SOCIAL & RELATIONSHIP CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Social-relationship-capital-img.webp',
            text: 'We build enduring partnerships with communities, customers, regulators and suppliers. Strategic trade-offs arise in managing expectations and aligning stakeholder interests, as we pursue social license to operate alongside transformative energy goals.',
            bgColor: 'bg-[#fbedee]',
            textColor: 'text-[#dc3545]',
            iconColor: '#dc3545'
        },
        {
            title: 'INTELLECTUAL CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Intellectual-capital-img.webp',
            text: 'Innovation is the engine of our energy transition. We invest in deep research and applications to drive breakthroughs in cleaner fuels and efficiency. Trade-offs involve prioritising projects that not only reduce carbon footprint, but also enhance operational resilience and stakeholder value.',
            bgColor: 'bg-[#f4eff8]',
            textColor: 'text-[#8e5ea2]',
            iconColor: '#8e5ea2'
        },
        {
            title: 'NATURAL CAPITAL',
            image: '/iol-images/Fuelling Sustainable Growth/Natural-capital-img.webp',
            text: 'Conservation and nurturing the environment guide every decision at IndianOil. We are committed to minimising emissions, optimising resource use and investing in renewable sources. This involves trade-offs between resource-intensive legacy operations and cleaner alternatives, balancing current energy demands with ecological stewardship.',
            bgColor: 'bg-[#e7f3e8]',
            textColor: 'text-[#41a052]',
            iconColor: '#41a052'
        }
    ];

    return (
        <div>
            <div className='marginal'>
                <h1 className='text-2xl font-semibold mb-2'>Fuelling Sustainable Growth</h1>
                <h2 className='text-4xl font-extralight mb-3'>
                    by Aligning Capital
                    with Performance and Purpose
                </h2>
                <h3 className='text-2xl font-light text-[#1e5e63] mb-5'>
                    As we SPRINT ahead in our journey, the prudent deployment of Capitals —
                    Financial, Manufactured, Intellectual, Human, Social & Relationship and Natural
                    — are important. Together, these capitals serve as the strategic levers of our
                    value creation approach.
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {capitals.map((capital, index) => (
                        <div key={index} className={`flex flex-col p-6 rounded-lg ${capital.bgColor}`}>
                            <div className="flex items-center mb-4">
                                <img
                                    src={capital.image}
                                    alt={`${capital.title} icon`}
                                    className="w-12 h-12 object-contain"
                                />
                                <h4 className={`text-xl font-bold ml-4 ${capital.textColor}`}>{capital.title}</h4>
                            </div>
                            <p className="text-gray-700 font-light">{capital.text}</p>
                        </div>
                    ))}
                </div>
                <div>
                <img src="/iol-images/Fuelling Sustainable Growth/PencilSketch.webp" alt="Fuelling Sustainable Growth" className="w-full mt-6" />
                <img src="/iol-images/Fuelling Sustainable Growth/map.jpg" alt="" className='mt-5'/>
            </div>
            </div>
            
        </div>
    )
}

export default Fueling;