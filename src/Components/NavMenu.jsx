import React, { useState, useRef, useEffect } from 'react';
import { HiMenu, HiX, HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { RiDownloadCloud2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [expandedSubSection, setExpandedSubSection] = useState(null);
    const panelRef = useRef(null);
    const overlayRef = useRef(null);

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

    const slideIn = (element) => {
        if (!element) return;
        element.style.transform = 'translateX(0%)';
        element.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    const slideOut = (element) => {
        if (!element) return;
        element.style.transform = 'translateX(100%)';
        element.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    const fadeIn = (element) => {
        if (!element) return;
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transition = 'opacity 0.3s ease-in-out';
    };

    const fadeOut = (element) => {
        if (!element) return;
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
            element.style.visibility = 'hidden';
        }, 300);
    };

    useEffect(() => {
        if (isMenuOpen) {
            fadeIn(overlayRef.current);
            slideIn(panelRef.current);
            document.body.style.overflow = 'hidden';
        } else {
            fadeOut(overlayRef.current);
            slideOut(panelRef.current);
            document.body.style.overflow = 'unset';
            setExpandedSection(null);
            setExpandedSubSection(null);
        }
    }, [isMenuOpen]);

    const toggleAccordion = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null);
            setExpandedSubSection(null);
        } else {
            setExpandedSection(section);
            setExpandedSubSection(null);
        }
    };

    const toggleSubAccordion = (subSection) => {
        setExpandedSubSection(expandedSubSection === subSection ? null : subSection);
    };

    const menuData = {
        corporateOverview: {
            title: "Corporate Overview",
            isInternal: true,
            items: [
                { name: "About Us", page: 6 },
                { name: "Our Businesses", page: 8 },
                { name: "Competitive Edge", page: 10 },
                { name: "From the Chairman's Desk", page: 20 },
                { name: "Governance", page: 32 },
                { name: "Leadership Team", page: 34 },
                { name: "Board Profile", page: 36 },
                { name: "Risk Management", page: 38 },
                { name: "Stakeholder Engagement", page: 42 },
                { name: "Materiality Assessment", page: 46 },
                { name: "IndianOil's Value Creation Model", page: 48 },
                { name: "Fuelling Sustainable Growth", page: 50 },
                { name: "Manufactured Capital", page: 52 },
                { name: "Financial Capital", page: 60 },
                { name: "Social & Relationship Capital", page: 64 },
                { name: "Intellectual Capital", page: 70 },
                { name: "Human Capital", page: 78 },
                { name: "Natural Capital", page: 84 },
                { name: "Awards and Accolades", page: 92 },
                { name: "Board of Directors", page: 98 },
                { name: "List of Senior Executives", page: 99 },
                { name: "Main Offices & Major Units", page: 102 },
                { name: "Auditors, Bankers, RTA etc.", page: 103 },
                { name: "Group Companies", page: 104 },
                { name: "Performance at a Glance", page: 106 }
            ]
        },
        statutoryReports: {
            title: "Statutory Reports",
            isInternal: false,
            items: [
                { name: "Directors' Report", pdf: "./docs/Directors-Report.pdf" },
                { name: "Annexure I - SC/ST/OBC Report", pdf: "./docs/Annexure1-SC:ST:OBC Report.pdf" },
                { name: "Annexure II - CSR Report", pdf: "./docs/AnnexureII-CSR-Report.pdf" },
                { name: "Annexure III - Secretarial Audit Report", pdf: "./docs/AnnexureIII-Secretarial-Audit-Report.pdf" },
                { name: "Annexure IV - Form No. AOC 2", pdf: "./docs/AnnexureIV-FormNoAOC2.pdf" },
                { name: "Annexure V - Report on Energy Conservation, Technology Absorption and Foreign Exchange Earning", pdf: "./docs/AnnexureV.pdf" },
                { name: "Report on Corporate Governance", pdf: "./docs/Report on Corporate Governance.pdf" },
                { name: "Management's Discussion and Analysis", pdf: "./docs/mda.pdf" }
            ]
        },
        financialStatements: {
            title: "Financial Statements",
            isInternal: false,
            hasSubSections: true,
            subSections: {
                standalone: {
                    title: "Standalone",
                    items: [
                        { name: "Independent Auditors' Report", pdf: "./docs/StandaloneIndependentAuditorsReport.pdf" },
                        { name: "Balance Sheet", pdf: "./docs/StandaloneBalance Sheet.pdf" },
                        { name: "Statement of Profit and Loss", pdf: "./docs/sfs Statement of Profit and Loss.pdf" },
                        { name: "Statement of Cash Flows", pdf: "./docs/sfs-Statement of Cash Flows.pdf" },
                        { name: "Statement of Changes in Equity", pdf: "./docs/sfs-Statement of Changes in Equity.pdf" },
                        { name: "Notes to Financial Statements", pdf: "./docs/sfs-Notes to Financial Statements.pdf" },
                        { name: "Income & Expenditure Account-Township, etc.", pdf: "./docs/sfs-Income-Expenditure.pdf" }
                    ]
                },
                consolidated: {
                    title: "Consolidated",
                    items: [
                        { name: "Independent Auditors' Report", pdf: "./docs/cfs-Independent-Auditors-Report.pdf" },
                        { name: "Balance Sheet", pdf: "./docs/cfs-Balance-Sheet.pdf" },
                        { name: "Statement of Profit and Loss", pdf: "./docs/cfs-Statement of Profit and Loss.pdf" },
                        { name: "Statement of Cash Flows", pdf: "./docs/cfs-Statement of Cash Flows.pdf" },
                        { name: "Statement of Changes in Equity", pdf: "./docs/cfs-Statement of Changes in Equity.pdf" },
                        { name: "Notes to Financial Statements", pdf: "./docs/cfs-Notes to Financial Statements.pdf" }
                    ]
                }
            },
            additionalItems: [
                { name: "Comments of Comptroller and Auditor General of India", pdf: "./docs/Comments.pdf" },
                { name: "Notice", pdf: "./docs/Notice.pdf" }
            ]
        },
    };



    const SubAccordionSection = ({ subSection, subSectionKey, isExpanded, onToggle, section }) => (
        <div className="border-b border-gray-300 last:border-b-0">
            <button
                onClick={() => onToggle(subSectionKey)}
                className="w-full px-8 py-3 cursor-pointer flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
            >
                <span className="text-md font-medium text-gray-700">{subSection.title}</span>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <HiChevronDown size={16} className="text-gray-500" />
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    maxHeight: isExpanded ? '9999px' : '0px',
                    transition: 'max-height 0.5s ease, opacity 0.3s ease-in-out'
                }}
            >

                <div className="bg-gray-100 py-2">
                    {subSection.items.map((item, index) => (
                        <Link
                            key={index}
                            to={
                                section.isInternal
                                    ? `/${slugify(item.name)}`
                                    : item.pdf
                            }
                            target={section.isInternal ? '_self' : '_blank'}
                            className="block px-8 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="text-sm">{item.name}</span>
                            <div className="flex items-center space-x-2">
                                {item.type && (
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                        {item.type}
                                    </span>
                                )}
                                <HiChevronRight size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );

    const AccordionSection = ({ section, sectionKey, isExpanded, onToggle }) => (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={() => onToggle(sectionKey)}
                className="w-full px-6 py-4 flex cursor-pointer items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
                <span className="text-lg font-semibold text-gray-800">{section.title}</span>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <HiChevronDown size={20} className="text-gray-600" />
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                style={{
                    maxHeight: isExpanded ? '9999px' : '0px',
                    transition: 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-in-out'
                }}

            >
                <div className="bg-gray-50 py-2">
                    {section.hasSubSections ? (
                        <>
                            {Object.entries(section.subSections).map(([subKey, subSection]) => (
                                <SubAccordionSection
                                    key={subKey}
                                    subSection={subSection}
                                    subSectionKey={subKey}
                                    isExpanded={expandedSubSection === subKey}
                                    onToggle={toggleSubAccordion}
                                    section={section}
                                />
                            ))}

                            {section.additionalItems && section.additionalItems.length > 0 && (
                                <div className="border-t border-gray-300 mt-2 pt-2">
                                    {section.additionalItems.map((item, index) => (
                                        <a
                                            // key={index}
                                            href={item.pdf}
                                            target='_blank'
                                            className="w-full px-8 py-3 text-left text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span className="text-sm">{item.name}</span>
                                            <div className="flex items-center space-x-2">
                                                
                                                <HiChevronRight size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        section.items.map((item, index) => (
                            <Link
                                key={index}
                                to={
                                    section.isInternal
                                        ? `/${slugify(item.name)}`
                                          : item.pdf
                                }

                                target={section.isInternal ? '_self' : '_blank'}
                                className="block w-full px-8 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-sm">{item.name}</span>
                                <div className="flex items-center space-x-2">
                                    {item.type && (
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                            {item.type}
                                        </span>
                                    )}
                                    <HiChevronRight size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </Link>
                        ))

                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="relative">
            <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 w-full">
                <div className="flex items-center justify-between px-6 py-2">
                    <div className="flex items-center w-14">
                        <img src="./Indian-oil-logo.webp" alt="" />
                    </div>

                    <div className='text-sm'>
                        <p>Integrated Annual Report <b>2024-25</b></p>

                    </div>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Open menu"
                    >
                        <HiMenu size={24} className="text-gray-700" />
                    </button>
                </div>
            </header>

            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black bg-opacity-50 z-50"
                style={{ opacity: '0', visibility: 'hidden' }}
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                ref={panelRef}
                className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 overflow-hidden"
                style={{ transform: 'translateX(100%)' }}
            >
                <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Annual Report 2024</h2>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 cursor-pointer rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <HiX size={24} className="text-white" />
                    </button>
                </div>

                <div className="h-full overflow-y-auto pb-20">
                    <div className="py-4">
                        <AccordionSection
                            section={menuData.corporateOverview}
                            sectionKey="corporateOverview"
                            isExpanded={expandedSection === 'corporateOverview'}
                            onToggle={toggleAccordion}
                        />

                        <AccordionSection
                            section={menuData.statutoryReports}
                            sectionKey="statutoryReports"
                            isExpanded={expandedSection === 'statutoryReports'}
                            onToggle={toggleAccordion}
                        />

                        <AccordionSection
                            section={menuData.financialStatements}
                            sectionKey="financialStatements"
                            isExpanded={expandedSection === 'financialStatements'}
                            onToggle={toggleAccordion}
                        />
                        <a href="https://iocl.com/download/SingleAnnualReport202425.pdf" target='_blank' className='border-b border-gray-200'>
                            <div className="w-full bg-gray-300 px-6 py-4 bg- flex cursor-pointer items-center justify-between text-left hover:bg-gray-200 transition-colors duration-200">
                                <span className='text-lg font-semibold text-gray-800'>
                                    Download Full Report
                                </span>
                                <RiDownloadCloud2Line className='text-gray-800' />

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;