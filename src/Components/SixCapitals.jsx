import React from 'react';

const SixCapitals = () => {
    const capitals = [
        { name: 'Manufactured', icon: 'gear', color: '#6ab7e9', link: '/manufactured' },
        { name: 'Financial', icon: 'rupee', color: '#f5c68f', link: '/financial' },
        { name: 'Human', icon: 'users', color: '#88d1c0', link: '/human' },
        { name: 'Intellectual', icon: 'lightbulb', color: '#b6a1d8', link: '/intellectual' },
        { name: 'Social and Relationship', icon: 'handshake', color: '#f2a9b3', link: '/social' },
        { name: 'Natural', icon: 'leaf', color: '#b5e5a4', link: '/natural' },
    ];

    const getIcon = (iconName) => {
        // You would replace this with actual SVG or image imports
        switch (iconName) {
            case 'gear':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                );
            case 'rupee':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h12M6 8h12M6 13h12M6 18h12M6 8v10M18 8v10M12 3v15M12 18a4 4 0 0 0-4-4" />
                    </svg>
                );
            case 'users':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 19H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4z" />
                        <path d="M12 12V9" />
                        <path d="M12 12h-4" />
                        <path d="M12 12h4" />
                        <path d="M12 12v3" />
                    </svg>
                );
            case 'lightbulb':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 18a6 6 0 0 0-6-6v6a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6h-6a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6v-6a6 6 0 0 0-6-6h-6a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6z" />
                    </svg>
                );
            case 'handshake':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19L5 12l7-7m7 7-7 7m7-7L12 5" />
                    </svg>
                );
            case 'leaf':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
                        <path d="M12 21h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
                        <path d="M5 21h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Six Capitals</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {capitals.map((capital, index) => (
                    <a
                        key={index}
                        href={capital.link}
                        className="flex flex-col items-center text-center w-40 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                            style={{ backgroundColor: capital.color }}
                        >
                            {getIcon(capital.icon)}
                        </div>
                        <span className="text-lg font-semibold text-gray-700">{capital.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SixCapitals;