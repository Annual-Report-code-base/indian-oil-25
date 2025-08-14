import React from 'react';
import BoardCompositionGraphs from '../Components/BoardComposition';

const BoardProfile = () => {
    const BoardMemberIcon = ({ letter, color }) => (
        <span
            className={`w-10 h-7 flex items-center justify-center text-[15px] text-white font-bold`}
            style={{ backgroundColor: color }}
        >
            {letter}
        </span>
    );

    const chairman = {
        name: "A S Sahney",
        role: "Chairman",
        education: "Graduate in Chemical Engineering",
        image: "/iol-images/Leadership_Team/Board Profile/A S Sahney.webp",
        leftIcons: [
            { letter: "D", color: "#3093ce" },
            { letter: "R", color: "#6e4f24" },
            { letter: "N", color: "#3093ce" },
        ],
        rightIcons: [
            { letter: "LS", color: "#9d9fa2" },
            { letter: "C", color: "#414042" },
            { letter: "PP", color: "#6d8e93" },
        ],
    };

    const wholeTimeDirectors = [
        {
            name: "Anuj Jain",
            role: "Director (Finance)",
            education: "Graduate in Commerce & Chartered Accountant",
            image: "/iol-images/Leadership_Team/Board Profile/Anuj Jain.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
                { letter: "R", color: "#6e4f24" },
            ],
            rightIcons: [
                { letter: "D", color: "#3093ce" },
                { letter: "LS", color: "#9d9fa2" },
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
                { letter: "P", color: "#25408f" },
                { letter: "M", color: "#f9a22b" },
            ],
        },
        {
            name: "Dr Alok Sharma",
            role: "Director (R&D)",
            education: "Graduate & Post-Graduate in Chemical Engineering",
            image: "/iol-images/Leadership_Team/Board Profile/Dr Alok Sharma.webp",
            leftIcons: [],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "P", color: "#25408f" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Rashmi Govil",
            role: "Director (HR)",
            education: "Graduate in Science & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Rashmi Govil.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
                { letter: "D", color: "#3093ce" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Arvind Kumar",
            role: "Director (Refineries)",
            education: "Graduate in Mechanical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Arvind Kumar.webp",
            leftIcons: [
                { letter: "R", color: "#6e4f24" },
                { letter: "LS", color: "#9d9fa2" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Suman Kumar",
            role: "Director (P&BD)",
            education: "Graduate in Mechanical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Suman Kumar.webp",
            leftIcons: [
                { letter: "C", color: "#414042" },
                { letter: "R", color: "#6e4f24" },
                { letter: "M", color: "#f9a22b" },
                { letter: "LS", color: "#9d9fa2" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
    ];

    const governmentNomineeDirectors = [
        {
            name: "Dr Sujata Sharma",
            role: "Director (Pipelines)",
            education: "Graduate in Chemical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Dr Sujata Sharma.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Esha Srivastava",
            role: "Director (Legal & Vigilance)",
            education: "Graduate in Law & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Esha Srivastava.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
    ];

    const independentDirectors = [
        {
            name: "Dr D R Sirpurker",
            role: "Director (Marketing)",
            education: "Graduate in Chemical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Dr D R Sirpurker.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Krishnan Sadagopan",
            role: "Director (Operations)",
            education: "Graduate in Chemical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Krishnan Sadagopan.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
        {
            name: "Prasenjit Biswas",
            role: "Director (Corporate Affairs)",
            education: "Graduate in Mechanical Engineering & Post Graduate in Management",
            image: "/iol-images/Leadership_Team/Board Profile/Prasenjit Biswas.webp",
            leftIcons: [
                { letter: "CSR", color: "#a1cd3a" },
                { letter: "S", color: "#983b53" },
            ],
            rightIcons: [
                { letter: "C", color: "#414042" },
                { letter: "PP", color: "#6d8e93" },
            ],
        },
    ];

    const allMembers = [
        chairman,
        ...wholeTimeDirectors,
        ...governmentNomineeDirectors,
        ...independentDirectors,
    ];

    const getSectionHeader = (index) => {
        if (index === 0) {
            return "CHAIRMAN";
        }
        if (index === 1) {
            return "WHOLE-TIME DIRECTORS";
        }
        if (index === wholeTimeDirectors.length + 1) {
            return "GOVERNMENT NOMINEE DIRECTORS";
        }
        if (index === wholeTimeDirectors.length + governmentNomineeDirectors.length + 1) {
            return "INDEPENDENT DIRECTORS";
        }
        return null;
    };

    return (
        <div>
            <div className='marginal'>
                <h1 className='text-2xl font-semibold mb-2'>Board Profile</h1>
                <h2 className='text-4xl font-extralight mb-2'>
                    Guided by Visionary Foresight
                </h2>
                <h3 className='text-2xl font-light text-[#1e5e63] mb-2'>
                    Our Board steers the organisation with integrity and foresight, upholding the highest
                    ethical standards, while ensuring compliance with regulatory guidelines.
                </h3>

                <div className='mt-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center'>
                        {allMembers.map((member, index) => (
                            <React.Fragment key={index}>
                                {getSectionHeader(index) && (
                                    <div className='col-span-full w-full'>
                                        <h1 className='text-2xl font-semibold md:mx-0 mx-auto text-[#11af7e] border-b w-fit border-[#11af7e]'>
                                            {getSectionHeader(index)}
                                        </h1>
                                    </div>
                                )}
                                <div className='text-center w-full'>
                                    <div className='relative mx-auto w-60 h-60 border-2 border-[#fbcbad] bg-[#fff0e8]'>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className='w-full h-full object-cover object-top'
                                        />
                                        <div className='absolute top-1 left-1 flex flex-col space-y-1.5'>
                                            {member.leftIcons.map((icon, i) => (
                                                <BoardMemberIcon key={i} letter={icon.letter} color={icon.color} />
                                            ))}
                                        </div>
                                        <div className='absolute top-1 right-1 flex flex-col space-y-1.5'>
                                            {member.rightIcons.map((icon, i) => (
                                                <BoardMemberIcon key={i} letter={icon.letter} color={icon.color} />
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className='text-lg font-semibold mt-3'>{member.name}</h3>
                                    <p className='text-md font-light'>{member.role}</p>
                                    <p className='text-xs text-gray-600 font-light mt-1'>
                                        {member.education}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className='mt-10 border-2 border-[#e8efef] p-3 rounded-lg bg-[#f8f9fa]'>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="A" color="#f37026" />
                            <span>Audit Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="R" color="#6e4f24" />
                            <span>Risk Management Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="LS" color="#9d9fa2" />
                            <span>LNG Sourcing Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="N" color="#3093ce" />
                            <span>Nomination & Remuneration Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="M" color="#f9a22b" />
                            <span>Marketing Strategies Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="PP" color="#6d8e93" />
                            <span>Planning and Projects Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="D" color="#3b9197" />
                            <span>Deleasing of Immoveable Properties Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="P" color="#25408f" />
                            <span>Project Evaluation Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="C" color="#414042" />
                            <span>Contracts Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="S" color="#983b53" />
                            <span>Stakeholders' Relationship Committee</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BoardMemberIcon letter="CSR" color="#a1cd3a" />
                            <span>Corporate Social Responsibility and Sustainable Development Committee</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='font-semibold text-2xl text-[#855f20] mb-2'>Board Composition and Diversity</h1>
                    <p className='text-xl'>
                        Being a Government Company, all Directors on the Board are appointed through
                        a transparent process overseen by the Government of India. The selection
                        process considers the core skills and competencies essential for effective
                        Board functioning in the context of IndianOil’s diverse operations.
                    </p>
                    {/* <BoardCompositionGraphs/> */}
                    <div className='flex md:flex-row flex-col gap-10 mt-5 mx-auto'>
                        <div>
                            <img src="/iol-images/Board Composition and Diversity/Composition-box-img.webp" alt="" className='w-90' />
                        </div>
                        <div>
                            <img src="/iol-images/Board Composition and Diversity/Gender-box-img.webp" alt="" className='w-90' />
                        </div>
                        <div>
                            <img src="/iol-images/Board Composition and Diversity/Age-img.webp" alt="" className='w-90' />
                        </div>
                    </div>
                    <img src="/iol-images/Board Composition and Diversity/Infographic-img.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BoardProfile;