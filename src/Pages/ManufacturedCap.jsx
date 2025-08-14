import CapitalCover from "../Components/CapitalCover"

const ManufacturedCap = () => {
    return (
        <div>
            <CapitalCover
                themeColor="orange"
                capitalType="Manufactured"
                topBoxTitle="STRENGTHEN CORE BUSINESSES"
                topBoxSubtitle="To secure and expand IndianOil’s leadership in its foundational sectors:"
                bulletPoints={[
                    "Maintain leadership position as India’s largest refining player",
                    "Increase market share in fuel retailing through network expansion and customer focus",
                    "Strengthen leadership across institutional business segments",
                    "Scale petrochemicals and specialty chemicals capacity to capture new value pools"
                ]}
                mainImage="/iol-images/Manufactured Capital/Manufactured-capital-backgound.webp"
                directorImage="/iol-images/Manufactured Capital/Arvind Kumar_1.webp"
                directorName="Arvind Kumar"
                directorDesignation="Director (Refineries)"
                directorQuote="IndianOil scaled new heights in 2024–25 with record refining throughput, extensive pipeline & marketing network and highest-ever petrochemical & natural gas sales. With massive infrastructure upgrades, digitalised operations and cleaner fuel logistics, the Company is reinforcing its core while gearing up for a low-carbon future."
                highlightText="Sprint ahead — Strengthening the Core, Reimagining Portfolio Mix"
                description="The best-in-class infrastructure and advanced facilities form the cornerstone of our operations, enabling us to deliver energy with security, reliability and efficiency. We are not just strengthening our assets across refining, pipelines and marketing locations, but also integrating smarter, cleaner and more efficient technologies to effectively transition
to a low-carbon future. Our network
of refineries, pipelines and marketing locations underpins a resilient, scalable and future-ready ecosystem — a solid foundation to thrive in a dynamic energy landscape."
                stakeholders={["Investor and Shareholders", "Employees and Contractual Workers", "Government and Regulatory Bodies"]}
                materialMatters={["Product stewardship and Customer Satisfaction", "N Environmental Impact", "Asset integrity and Process safety", "N Supply Chain Management"]}
                sdgIcons={["/iol-images/Manufactured Capital/Sdg1-icon.webp", "/iol-images/Manufactured Capital/Sdg2-icon.webp", "/iol-images/Manufactured Capital/Sdg3-icon.webp"]}
                imagePosition="right"
                theme={"#5fc6f1"}
            />
            <div className="marginal">
                <div className="mb-6">
                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Refineries Division-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">REFINERIES DIVISION</h3>
                    <p className="font-semibold mb-4">
                        As India’s flagship downstream energy Company, IndianOil’s Refineries Division continues to play a pivotal role in ensuring the nation’s energy self-sufficiency, while evolving to meet emerging sustainability mandates. In 2024-25, our refineries delivered strong operational performance, driven by innovation, efficiency and a clear focus on decarbonisation in line with our SPRINT strategy. We processed 71.56 MMT of crude oil during the year, operating at 102% of installed capacity.
                    </p>
                    <h3 className="font-semibold text-blue-800 mb-4">Modernising Infrastructure, Enhancing Capacity</h3>
                    <span className="py-2 px-4 inline-block font-semibold bg-blue-800 text-white rounded-xl">Gujarat Refinery</span>
                    <p className="my-4">
                        Commissioned the Synthesis Gas and NBA unit (point of OXO Alcohol Project), marking our entry into the production of 99.97% pure Normal Butanol- a critical feedstock for the chemical industry.
                    </p>
                    <span className="py-2 px-4 inline-block font-semibold bg-blue-800 text-white rounded-xl">Mathura Refinery</span>
                    <p className="my-4">
                        A 220KV grid power facility was facility inaugrated for reducing fuel consumption, cutting power costs and integrating green energy.
                    </p>
                    <span className="py-2 px-4 inline-block font-semibold bg-blue-800 text-white rounded-xl">Digboi Refinery</span>
                    <p className="my-4">
                        Commissioned a 7.5-Km DHDT feed pipeline, the longest in its operational history, bolstering diesel hydro-processing capabilities.
                    </p>
                    <span className="py-2 px-4 inline-block font-semibold bg-blue-800 text-white rounded-xl">Panipat Refinery</span>
                    <p className="my-4">
                        Commissioned Low Radiation Vacuum Preheaters (LRVPs) in both AVUs—a first in IndianOil’s network—reducing steam consumption by 6.8 TPH and generating an annual savings of H13.8 Crore.
                    </p>

                    <h3 className="font-semibold mb-4">Innovations and Initiatives for a Cleaner, Greener Tomorrow</h3>
                    <ul className="list-disc px-4">
                        <li>
                            Paradip Refinery commissioned the indDSK (KHDS) unit, producing ultra-low sulphur kerosene {"<8 ppm"} for pipeline-compatible delivery.
                        </li>
                        <li>
                            STORM-X, a high-octane racing fuel, especially formulated by Paradip Refinery, was successfully used in the MRF MMSC FMSCI Indian National Car Racing Championship.
                        </li>
                        <li>
                            Mathura Refinery commissioned an Electrostatic Coalescer Prewash (ECP) package, enabling the processing of high-TAN crudes for ATF production, reducing spent caustic generation and enhancing ATF yield.
                        </li>
                    </ul>

                    <div
                        className="rounded-3xl text-white px-8 my-6 py-12 flex flex-col lg:flex-row gap-10"
                        style={{
                            backgroundImage: `url("/iol-images/Manufactured Capital/A-legacy-to-remember-img.webp")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Left Heading */}
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-3xl font-bold leading-tight">
                                <span className="text-sky-400">A Legacy to</span> <br />
                                <span className="text-sky-400">Remember and Celebrate</span>
                            </h2>
                        </div>

                        {/* Content Boxes */}
                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Box 1 */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-[2px] bg-white w-12"></div>
                                    <span className="text-orange-400 text-xl">✦</span>
                                </div>
                                <h3 className="font-bold text-lg leading-snug">
                                    BARAUNI REFINERY’S <br /> DIAMOND JUBILEE
                                </h3>
                                <p className="text-sm mt-2 leading-relaxed">
                                    was celebrated by the inauguration of the ‘Drishti Path’
                                    technology exhibition centre, a commemorative ‘My Stamp’ and the
                                    donation of TruNAT medical machines.
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-[2px] bg-white w-12"></div>
                                    <span className="text-orange-400 text-xl">✦</span>
                                </div>
                                <h3 className="font-bold text-lg leading-snug">
                                    HALDIA REFINERY’S <br /> GOLDEN JUBILEE
                                </h3>
                                <p className="text-sm mt-2 leading-relaxed">
                                    saw the launch of landmark CSR projects ‘Drishti’ and ‘Shakti’ for
                                    eye and neurological care, alongside cultural celebrations such as
                                    the Haldia Boat Race and the inaugural IndianOil XtraMile Marathon
                                    (IOXM 2025).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Pipelines-division-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">PIPELINES DIVISION</h3>
                    <p className="font-semibold mb-4">
                        As India’s foremost energy transporter, our Pipelines Division continues to play a pivotal role in strengthening the nation’s energy infrastructure — efficiently, securely and sustainably. In 2024-25, aligned with our ‘SPRINT Ahead’ theme, the Division focused on enhancing capacity, integrating cleaner fuels and embedding digital intelligence into operations.
                    </p>
                    <p className="mb-3">
                        Our cross-country pipeline network, spanning over 20,005 Km (increased by 261 Km), now has a total capacity of 129.92 MMTPA for crude and products and 49.4 MMSCMD for gas. These underground energy highways handled a record throughput of 96.924 MMT of liquids and 4,668 MMSCM of gas, showcasing resilience and reliability in the face of growing national demand and transition imperatives.
                    </p>
                    <ul className="list-disc px-4 mb-3 space-y-2">
                        <li>
                            Significant throughput achievements, despite planned refinery shutdowns. Highest-ever product and gas pipeline throughput, with product throughput rising 3% y-o-y to 45.4 MMT.
                        </li>
                        <li>
                            Commissioned critical sections, including the Vijaywada – Hyderabad stretch under the Paradip – Hyderabad Pipeline and new connections under the Karwar and Kandla-Gorakhpur projects, improving regional connectivity.
                        </li>
                        <li>
                            Over 6,000 Km of pipeline integrity checks completed through Inline Inspections (ILI), with 4,500 Km using in-house R&D tools.
                        </li>
                        <li>
                            Deployed Unmanned Aerial Vehicle (UAV)-based monitoring and nano drones across 610 Km of critical Right-of-Way, integrated with Pipeline Intrusion Detection and Warning Systems (PIDWS)
                        </li>
                        <li>
                            Initiated pipeline transport of E-20 ethanol-blended petrol and B-1 biodiesel-blended diesel, aligned with biofuel goals.
                        </li>
                        <li>
                            Commenced LPG pumping from Paradip import terminal and extended MS supplies to Nepal via the Motihari-Amlekhgunj pipeline, enhancing cross-border trade.
                        </li>
                        <li>
                            Expanded CGD infrastructure to over 9,300 Km, adding 2 Lakh new PNG domestic connections, marking 75% annual growth.
                        </li>
                        <li>
                            Added 92 new CNG stations and reached peak gas sales of 4.54 Lakh kg/day, supporting the gas economy transition.
                        </li>
                        <li>
                            Approved projects worth ₹1,500+ Crore to enhance logistics in Bihar and Nepal through new pipelines and terminals.
                        </li>
                        <li>
                            Launched EPMC and PMC services, marking a shift towards end-to-end infrastructure development capabilities.
                        </li>
                        <li>
                            IndianOil’s Pipelines Division remains a strategic enabler in India’s evolving energy landscape. By modernising core infrastructure, integrating cleaner fuels and pushing the boundaries of innovation, the Division is set to SPRINT ahead—laying the groundwork for a more sustainable and inclusive energy future.
                        </li>
                    </ul>
                    <p>
                        IndianOil’s Pipelines Division remains a strategic enabler in India’s evolving energy landscape. By modernising core infrastructure, integrating cleaner fuels and pushing the boundaries of innovation, the Division is set to SPRINT ahead—laying the groundwork for a more sustainable and inclusive energy future.
                    </p>
                    <div className="mt-6">
                        <img src="/iol-images/Manufactured Capital/Mundra Panipat Pipeline Hub-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Marketing-division-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">MARKETING DIVISION</h3>
                    <p className="font-semibold mb-4">
                        In 2024–25, IndianOil strengthened both physical and digital infrastructure to support the growing fuel and energy distribution network.
                    </p>
                    <ul className="list-disc px-4 mb-3 space-y-2">
                        <li>
                            Commissioned 2,823 new Retail Outlets, bringing the total to 40,221, the largest network in India.
                        </li>
                        <li>
                            Added 4,656 EV charging stations (EVCS) and 37 battery N swapping stations, making the total count of 13,614 EVCS and
                            128 swap stations.
                        </li>
                        <li>
                            Launched the first-ever exclusive ‘Chhotu Shopee’ and extended 68 prison ROs under ‘Umeed – A Hope’ initiative.
                        </li>
                        <li>
                            Achieved a record fuel movement of 3,60,708 KL, dispatched in a single day. Key logistics interventions include commissioning of rail-loading facilities, pipeline integrations and the successful first-time coastal and transnational shipments of key fuels to locations, such as Nepal, Bangladesh and Port Blair.
                        </li>
                        <li>
                            The Jatni-Bhubaneshwar ATF pipeline, along with India’s first Vapour Recovery Unit at Paradip, represent new benchmarks in energy logistics and environmental compliance.
                        </li>
                        <li>
                            Efficient turnaround of bitumen terminals at Mangalore and Haldia, alongside the first bitumen imports from Oman, have further diversified IndianOil’s supply capabilities.
                        </li>
                        <li>
                            Commissioned new bottling plants, expanded LPG cylinder variants such as XTRALITE and launched new safety and quality protocols through the LPG Equipment Quality Manual.
                        </li>
                        <li>
                            Volumes of XTRATEJ, a high-efficiency LPG cylinder, grew by 48.9%.
                        </li>
                        <li>
                            In lubricants, IndianOil received the ‘Golden Peacock Award for Innovation’ and strengthened global logistics by securing 40% of Shipping Corporation of India’s global lubes business, across 70 ports worldwide.
                        </li>
                        <li>
                            Strengthened retail marketing with 72 new Way Side Amenities (WSA) projects, enhancing customer experience at highways and transit hubs. Key initiatives included the launch of ‘Apna Ghar‘ under PM1000, partnerships with major hospitality brands and a growing Non-Fuel Revenue (NFR) stream, highlighting IndianOil’s integrated mobility services model.
                        </li>
                    </ul>
                    <div className="mt-6">
                        <img src="/iol-images/Manufactured Capital/Indianoil Retail-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Petrochemicals-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">PETROCHEMICALS</h3>
                    <p className=" mb-4">
                        IndianOil’s Petrochemicals business achieved a historic milestone in 2024-25, achieving highest-ever sales volume of 3.24 MMT including exports — a significant rise over the 3.1 MMT recorded in the previous fiscal year. The performance was driven by robust domestic demand, portfolio expansion, strategic OEM partnerships and a strong thrust on sustainability and self-reliance.
                    </p>
                    <p className=" mb-4">
                        The Product application and Development centres at Panipat and Paradip are playing a pivotal role in developing new materials and applications for better product quality and innovative solutions.
                    </p>
                    <h3 className="font-semibold mb-3">Significant strides in capacity expansion and project approvals</h3>

                    <ul className="list-disc px-4 mb-3 space-y-2">
                        <li>
                            The IndianOil Board approved execution of the Joint Venture Agreement with MCPI Pvt. Ltd. for the 300 KTA Yarn Project at Bhadrak, Odisha
                        </li>
                        <li>
                            In-principle approval for a 42-KTPA Propylene Recovery Unit at Haldia, West Bengal
                        </li>
                        <li>
                            Investment approval for ethylene purification and gas-phase reactors at Paradip
                        </li>
                        <li>
                            Launched two new niche PP grades- P1750MN at Paradip and PP-ICP 5200MG at Panipat. HDPE grade 002DB52 was re- introduced from Panipat Plant
                        </li>
                        <li>
                            During 2024–25, 16 polymer grades received approvals from various OEM vendors
                        </li>
                    </ul>
                    <div className="my-6">
                        <h3 className="font-semibold text-blue-800 mb-3">Exceptional Sales Performance Across Segments</h3>
                        <div className="mb-6 flex flex-wrap gap-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl text-sky-500 font-semibold">1,940 TMT</h1>
                                <p>Composite polymers (PP & PE)</p>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl text-sky-500 font-semibold">483 TMT</h1>
                                <p>Glycols</p>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl text-sky-500 font-semibold">173 KT</h1>
                                <p>LAB + HAB</p>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl text-sky-500 font-semibold">123 TMT</h1>
                                <p>Butadiene</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Natural-gas-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">NATURAL GAS</h3>
                    <p className="font-semibold mb-4">
                        In 2024-25, IndianOil achieved its highest-ever natural gas sales volume of 9.45 MMTPA, marking a 20% growth over the previous year. This performance grew our market share to 14.2%, reflecting IndianOil’s growing stature in India’s gas-based transition.
                    </p>

                    <ul className="list-disc px-4 mb-3 space-y-2">
                        <li>
                            Signed a long-term LNG Sale Purchase Agreements (SPAs) with ADNOC (1.2 MMTPA for 14 years), TotalEnergies (0.8 MMTPA for 10 years) and a term sheet with ADNOC Ruwais terminal (1 MMTPA for 15 years).
                        </li>
                        <li>
                            Spot LNG procurement rose 82% YoY, with 2.11 MMT sourced through 34 cargoes.
                        </li>
                        <li>
                            New partnerships with ADNOC Trading, KOCH Supply, BB Energy and PTTTE bolstered flexibility and trading options.
                        </li>
                        <li>
                            Signed first international LNG export agreement with Nepal (Yogya Holdings).
                        </li>
                        <li>
                            Became the first seller of LNG cargo on the high seas to HPCL for commissioning its Chhara terminal.
                        </li>
                        <li>
                            Commissioned first LNG consumer station at CONCOR’s Khatuwas terminal, saving logistics costs for CONCOR and supporting sustainability.
                        </li>
                        <li>
                            CGD JV Companies achieved highest-ever sales of 605 MMSCM, commissioning 515 CNG stations, laying 37,000 Inch-Km of pipeline and adding over 5.15 Lakh domestic PNG connections.
                        </li>
                        <li>
                            Signed MoUs with Shell, ExxonMobil, ONGC and HPCL for collaborations across LNG bunkering, gas monetisation, trading and small-scale LNG deployment
                        </li>
                        <li>
                            Trading volumes on the Indian Gas Exchange (IGX) tripled to 296 Million Metric Standard Cubic Meters (MMSCM), with IndianOil accounting for 21% of the total traded volume on the platform.
                        </li>
                    </ul>
                </div>

                <div className="mb-6 flex md:flex-row flex-col gap-6">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 mb-4">
                            <img src="/iol-images/Manufactured Capital/Exploration And Production-icon.webp" alt="" />
                        </div>
                        <h3 className="font-semibold text-sky-500 mb-3">EXPLORATION AND PRODUCTION</h3>
                        <p className=" mb-4">
                            IndianOil’s Exploration & Production (E&P) business continues to strengthen India’s upstream energy security through domestic and international operations. In 2024-25, the business reported higher production, expanded its reserve base and achieved notable milestones across coal bed methane and conventional hydrocarbon assets. With a calibrated mix of risk-managed global participation and technology-driven exploration, IndianOil is steadily building long-term value in the upstream space.
                        </p>

                        <ul className="list-disc px-4 mb-3 space-y-2">
                            <li>
                                Share of upstream production for the year increased to 4.45 MMtoe, up from 4.26 MMtoe in the previous year. This increase was driven by
                            </li>
                            <ul className="list-disc px-4 mb-3 space-y-2">
                                <li>
                                    Increased production from the PNW Project in Canada
                                </li>
                                <li>
                                    Commencement of gas production in IndianOil’s BK-
                                    CBM-2001/1 block (Jharkhand)
                                </li>
                            </ul>
                            <li>
                                The workover operations in Block AAP -ON-94/1 (Dirok, Assam) has led to discovery of an additional Gas-in-Place (2P) of 127 BCF in the field.
                            </li>
                            <li>
                                Breakthroughs in Coal Bed Methane (CBM), Gas production commenced from BK-CBM -2001/1 block which initiated IndianOil’s first CBM gas sales via Indian Gas Exchange (IGX) at Bokaro Hub.
                            </li>
                            <li>
                                Completed first-ever acquisition through the NCLT route, acquiring 100% equity in Mercator Petroleum Limited and gaining ownership of Block CB-ONN-2005/9 in Gujarat’s prolific Cambay Basin.
                            </li>
                            <li>
                                First unconventional hydrocarbon discovery in block Onshore-1, Abu Dhabi through hydrofracking in well XN-76. Production Concession Agreement (PCA) signed with ADNOC for Ruwais discovery to facilitate the commencement of production in near future.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-6">
                        <img src="/iol-images/Manufactured Capital/Lower Zakum Central-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6 flex md:flex-row flex-col gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-semibold text-blue-800 mb-3">Expanding across geographies globally</h3>
                        <p className="font-semibold mb-4">
                            We accelerated our internationalisation strategy through impactful partnerships, cross-border infrastructure projects and market expansion.
                        </p>

                        <ul className="list-disc px-4 mb-3 space-y-2">
                            <li>
                                Two landmark framework agreements were signed with Nepal Oil Corporation to extend the Motihari–Amlekhgunj Pipeline to Chitwan (Nepal) and develop the Siliguri–Jhapa (Nepal) Pipeline, along with two greenfield terminals in Nepal.
                            </li>
                            <li>
                                First-ever exports of XP100 and AvGas 100 LL to Sri Lanka and Bangladesh
                            </li>
                            <li>
                                Supplied 635 TMT of petroleum products to Bangladesh
                            </li>
                            <li>
                                Established a 50:50 JV—IOML Hulas Lube Pvt. Ltd.—with Hansraj Hulaschand & Co. Pvt. Ltd. to build a SERVO lube blending plant in Nepal.
                            </li>
                            <li>
                                A tripartite MoU with Mitsubishi Corporation (Japan and India) to explore joint ventures in petrochemicals, SAF, logistics, carbon credits and bioplastics
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-6">
                        <img src="/iol-images/Manufactured Capital/Signing Of B2b Framework-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6 flex md:flex-row flex-col gap-6">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 mb-4">
                            <img src="/iol-images/Manufactured Capital/Explosives-icon.webp" alt="" />
                        </div>
                        <h3 className="font-semibold text-sky-500 mb-3">EXPLOSIVES</h3>
                        <p className="font-semibold mb-4">
                            IndianOil maintained its leadership in India’s bulk explosives segment, serving critical sectors such as mining, infrastructure and heavy industry through safe and reliable supply solutions. In 2024–25, the business achieved record sales of over 319 TMT, highlighting our position as the ‘preferred partner’ for several industry majors.
                        </p>

                        <ul className="list-disc px-4 mb-3 space-y-2">
                            <li>
                                Commissioning of a Site Mixed Explosives (SME) plant at Neyveli, Tamil Nadu, licensed for 4,000 MT per annum—fully catering to NLC India Ltd.’s explosives demand
                            </li>
                            <li>
                                Expanded footprint by onboarding Devprabha Mining and Infra Pvt. Ltd., MDO for Bharat Coking Coal Ltd., marking deeper penetration in Eastern India
                            </li>
                            <li>
                                Developing a Bulk Explosives Support Plant in the Majri area of Western Coalfields Ltd. and a 30-KTA SME plant at Mandamarri, Telangana to strengthen capacity and coverage, further integrating IndianOil into India’s industrial energy value chain
                            </li>
                            <li>
                                Completed first-ever acquisition through the NCLT route, acquiring 100% equity in Mercator Petroleum Limited and gaining ownership of Block CB-ONN-2005/9 in Gujarat’s prolific Cambay Basin.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-6">
                        <img src="/iol-images/Manufactured Capital/Charging Of Bulk Explosive-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6 gap-6">
                    <div className="w-16 h-16 mb-4">
                        <img src="/iol-images/Manufactured Capital/Pivoting Towards Alternate Energy-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-sky-500 mb-3">PIVOTING TOWARDS ALTERNATE ENERGY</h3>
                    <p className="font-semibold mb-4">
                        Aligned with our Net-Zero 2046 Vision, we are rapidly expanding our green energy portfolio with a strategic focus on Compressed Biogas (CBG), Sustainable Aviation Fuel (SAF) and community-driven circular economy models.
                    </p>
                    <div className="my-6">
                        <img src="/iol-images/Manufactured Capital/Indianoil - Powering Green-img.webp" alt="" />
                    </div>
                    <p className="mb-2">
                        Under the Sustainable Alternative Towards Affordable Transportation (SATAT) initiative, IndianOil facilitates private entrepreneurs to set-up CBG plants. We are scaling-up Compressed Biogas (CBG) production and as of March 2025, 44 CBG plants have been commissioned. IndianOil facilitated the CBG sale through these plants to 125 Retail Outlets and 4 industrial clients under the brand name ‘IndiGreen’.
                    </p>
                    <p className="mb-2">
                        Of these, IndianOil has commissioned 4 CBG plants with its own investment, including a 100 Tonnes per day cattle dung-based CBG plant at Adarsh Gaushala, Gwalior, inaugurated by Hon’ble Prime Minister.
                    </p>
                    <p className="mb-2">
                        Further, IndianOil is setting-up 30 CBG plants, with work progressing on 9 projects through our JV, IOC GPS Renewable Pvt. Ltd. The remaining projects are at various stages of development.
                    </p>
                    <p className="mb-2">
                        In SAF, we are developing India’s first commercial-scale plant with a capacity of 86.8 KTPA in Panipat, in partnership with LanzaJet Inc., leveraging their advanced alcohol-to-jet (ATJ) technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ManufacturedCap