import CapitalCover from "../Components/CapitalCover"
import { FaArrowRight } from "react-icons/fa";
const HumanCap = () => {
    return (
        <div>
            <CapitalCover
                themeColor="orange"
                capitalType="Human"
                topBoxTitle="NURTURE LEADERSHIP AND TALENT"
                topBoxSubtitle="Invest in people to power the transformation:"
                bulletPoints={[
                    "Build a pipeline of high-potential leaders aligned to emerging priorities",
                    "Attract and retain talent for new energy, digital and frontier businesses",
                    "Reinforce IndianOil’s core values while fostering agility, speed and collaboration"
                ]}
                mainImage="./iol-images/Human Capital/Dsc_5213.webp"
                directorImage="./iol-images/Human Capital/Rashmi Govil.webp"
                directorName="Rashmi Govil"
                directorDesignation="Director (Human Resources)"
                directorQuote="IndianOil’s talent strategy focuses on inclusive onboarding, continuous learning and leadership development through structured programs and digital platforms. With initiatives like Swadhyaya, Eklavya, Abhigyan and Saarthi we promote self- learning, mentoring and cross-cultural readiness. Our DEI (Diversity, Equity & Inclusion) framework and tech-driven HR practices ensure a supportive, equitable and future-ready workforce."
                highlightText="Sprint ahead — with Team Prowess"
                description={"Our transformational leap forward is propelled by our human assets, who convert our Vision to Execution on ground — to achieve new performance milestones and stay ahead in an evolving energy sector landscape. By adopting advanced technologies and implementing upskilling initiatives, we ensure our teams are equipped to excel and thrive, while contributing to the Corporation’s sustained growth trajectory."}
                stakeholders={["Employees and Contractual Workers"]}
                materialMatters={["Health and Safety", "Talent Management", "Diversity, Equity, Inclusion(DEI) and Human Rights"]}
                sdgIcons={[
                    "./iol-images/Human Capital/Sdg1.webp",
                    "./iol-images/Human Capital/Sdg2.webp",
                    "./iol-images/Human Capital/Sdg3.webp",
                    "./iol-images/Human Capital/Sdg4.webp",
                    "./iol-images/Human Capital/Sdg5.webp",
                    "./iol-images/Human Capital/Sdg6.webp",
                ]}
                imagePosition="right"
                theme={"#8ec7bb"}
            />
            <div className="marginal">
                <div className='my-6'>
                    <div className="w-16 h-16 mb-4">
                        <img src="./iol-images/Human Capital/Talent-management-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-[#8ec7bb] mb-3">TALENT MANAGEMENT</h3>
                    <p className=" mb-2">
                        We focus on welcoming and onboarding professionals with diverse cultural backgrounds, experience and skillsets. Through structured onboarding, including comprehensive induction programme and life skills training, we ensure a seamless transition of the employees in the organisation, aligning them with our values and vision.
                    </p>
                    <p className=" mb-2">
                        Employees embark on their journey with a comprehensive induction programme that offers in-depth organisational insights, function- specific orientation and essential life skills training—including physical and mental well-being as well as personal financial literacy.
                    </p>

                    <div className="w-16 h-16 my-4">
                        <img src="./iol-images/Human Capital/Learning-and-development-icon.webp" alt="" />
                    </div>
                    <h3 className="font-semibold text-[#8ec7bb] mb-3">LEARNING AND DEVELOPMENT</h3>
                    <p className=" mb-2">
                        We emphasise cross-cultural competence and global readiness through holistic learning programmes. These programme focus on regional communication nuances and incorporate real-life case studies from our pan-India operations. For global collaborations, specialised workshops equip employees with skills to navigate international business practices. We also offer various flagship programme at all levels of management levels, designed to promote leadership qualities.
                    </p>
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="md:w-1/2">
                            <h3 className="font-semibold mb-3">Continuous Learning</h3>
                            <p className=" mb-2">
                                Our e-learning Ecosystem - Swadhyaya, offers more than 1,950 courses across 550+ defined technical competencies.
                            </p>
                            <div className='my-6'>
                                <div className='md:w-[50%] h-full mb-6'>
                                    <h1 className="text-4xl md:text-5xl text-[#8ec7bb] font-semibold">1,95,712</h1>
                                    <p>Total learning days (across workforce)</p>
                                </div>
                                <div className='md:w-[50%] h-full'>
                                    <h1 className="text-4xl md:text-5xl text-[#8ec7bb] font-semibold">6.53</h1>
                                    <p>Learning person days/Employee</p>
                                </div>
                            </div>
                            <h3 className="font-semibold mb-3">Promoting Self-Learning at IndianOil</h3>
                            <p className=" mb-2">
                                ‘Eklavya’, an upskilling initiative, fosters a culture of continuous learning and professional growth among officers. Through this initiative, officers can enrol in a wide range of courses, certifications and diploma programme offered by Massive Open Online Course (MOOC) platforms, reputed institutes and edtech companies.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src="./iol-images/Human Capital/Iocians Participating -img.webp" alt="" />
                        </div>
                    </div>
                    <h3 className="font-semibold mb-3">Leveraging Experiential, Social and Formal Learning</h3>
                    <p className=" mb-2">
                        IndianOil ensures holistic development of its employees in line with the organisational strategic roadmap. The curated learning programme for addressing skill gaps through the classroom, as well as online mode, are conducted throughout the year. IndianOil’s Mentoring platform, ‘Abhigyan’ and one-on-one coaching programme such as ‘Saarthi’ support employees during their career and help them thrive in their roles. Additionally, various behavioural and functional trainings are also provided to all the employees throughout the year through learning centres, reputed academia and industry expertise.
                    </p>

                    <h3 className="font-semibold mb-3">Sopaan - For First Time Managers</h3>
                    <ul className="list-disc space-y-2 mb-4 mx-4">
                        <li>
                            Theatre-based workshop based on psychometric profiling
                        </li>
                        <li>
                            Simulation-based learning
                        </li>
                    </ul>

                    <h3 className="font-semibold mb-3">HR Horizons</h3>
                    <p>Shaping HR Leaders for Tomorrow’s Business Challenges</p>
                </div>

                <div className="mb-6">
                    <div className=" mx-auto grid md:grid-cols-2 gap-6 text-sm">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* NAV-URJA */}
                            <section>
                                <div className="w-16 h-16 mb-4">
                                    <img src="./iol-images/Human Capital/Nav-icon.webp" alt="" />
                                </div>
                                <h3 className="text-teal-700 font-bold uppercase">NAV-URJA</h3>
                                <h4 className="font-bold mt-1">
                                    BUILDING A FUTURE IN RENEWABLE ENERGY
                                </h4>
                                <ul className="mt-2 space-y-1">
                                    <li className="flex items-start">
                                        <FaArrowRight className="mt-1 mr-2 text-teal-700" />
                                        20-days classroom program for Junior and Middle management executives
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="mt-1 mr-2 text-teal-700" />
                                        Virtual-Series: Virtual, instructor-led programme for middle-level executives.
                                    </li>
                                </ul>
                            </section>

                            {/* TECHNOLOGY INTEGRATION IN HR */}
                            <section>
                                <h3 className="text-teal-700 font-bold uppercase">
                                    TECHNOLOGY INTEGRATION IN HR
                                </h3>
                                <p className="mt-1">
                                    IndianOil continues to leverage technology for employee engagement,
                                    increase operational efficiency and data-driven decisions.
                                </p>

                                {/* Employee Engagement */}
                                <div className="mt-3">
                                    <h4 className="font-bold">Employee Engagement</h4>
                                    <p>
                                        IndianOil Listening Assistant - IOLA, an AI-enabled platform has
                                        been implemented to understand employee experience at different
                                        milestones or moments during their career journeys.
                                    </p>
                                </div>

                                {/* HR Operational Efficiency */}
                                <div className="mt-3">
                                    <h4 className="font-bold">HR Operational Efficiency</h4>
                                    <p>
                                        Technology-enabled centralised HR shared services center.
                                    </p>
                                </div>

                                {/* Data-Driven */}
                                <div className="mt-3">
                                    <h4 className="font-bold">Data-Driven</h4>
                                    <p>
                                        Cascading dashboard for monitoring and improving people-centric
                                        Key Performance Indicators (KPIs).
                                    </p>
                                </div>

                                {/* Learning Initiatives */}
                                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <h5 className="font-bold">Academy on Wheels</h5>
                                        <p className="text-sm">
                                            Classroom on wheels for Retail Outlets Customer Attendants
                                        </p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <h5 className="font-bold">Learning on-the-go</h5>
                                        <p className="text-sm">
                                            Sampark, e-Learning platform for front-line workforce.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Diversity and Inclusion */}
                            <section>
                                <h3 className="text-teal-700 font-bold uppercase">
                                    DIVERSITY AND INCLUSION
                                </h3>
                                <p className="mt-1">
                                    At IndianOil, our aim is to build an inclusive culture that values
                                    diversity. Our Diversity, Equity and Inclusion (DE&I) framework
                                    ensures fair pay practices, promotes psychological safety and trust
                                    through measurable indices and continues to increase women’s
                                    representation in senior leadership roles, demonstrating our
                                    unwavering dedication to inclusive excellence.
                                </p>
                                <div className="mt-4">
                                    <span className="text-3xl font-bold text-teal-700">8.9%</span>
                                    <p className="text-gray-600">Gender diversity ratio</p>
                                </div>
                            </section>

                            {/* FemPowerment */}
                            <section className="bg-[#e6f5f4] border border-gray-300 rounded-lg p-4">
                                <h4 className="font-bold">Fempowerment</h4>
                                <p className="mt-2 text-gray-700">
                                    To build a more inclusive{" "}
                                    <span className="text-teal-700 font-semibold">workplace</span>, we
                                    launched <span className="font-semibold">‘Fempowerment’</span>. As part of this initiative, Senior women officers{" "}
                                    <span className="text-teal-700 font-semibold">across divisions</span> underwent structured mentoring training by a
                                    renowned clinical psychologist.{" "}
                                    <span className="text-teal-700 font-semibold">
                                        These trained leaders
                                    </span>{" "}
                                    are now mentoring junior women employees through focused workshops,
                                    which are aimed to foster cultural alignment and support
                                    professional development across the organisation.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="mb-6 flex md:flex-row flex-col gap-6">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 my-4">
                            <img src="./iol-images/Human Capital/Employee-well-being-icon.webp" alt="" />
                        </div>
                        <h3 className="font-semibold text-[#8ec7bb] mb-3">EMPLOYEE WELL-BEING</h3>
                        <p className=" mb-4">
                            We prioritise employee well-being through a holistic approach that supports mental, physical and emotional health. Initiatives such as the ‘Paramarsh’ Employee Assistance Programme provide psychological support to employees and their dependents, while comprehensive medical facilities, including periodic health check-ups for all age groups, promote a proactive approach to physical wellness.
                        </p>
                        <h3 className="font-semibold mb-3">Wellness Initiative for Employees</h3>
                        <p className=" mb-2">
                            The 4R 4U wellness initiative is a holistic programme designed to address the physical, emotional and mental health challenges faced by employees in today’s dynamic work environment. A comprehensive wellness calendar has been implemented across all divisions, featuring monthly themes focused on specific health concerns. These themes are complemented by targeted activities and interventions aimed at promoting overall well-being.
                        </p>
                        <p className=" mb-2">
                            The initiative extends beyond the workplace to include employees’ families, reinforcing our commitment to nurturing a healthy and resilient workforce at both individual and collective levels. This sustained focus on wellness is a key pillar in fostering a supportive and high-performing organisational culture.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="./iol-images/Human Capital/Not Just Breaking-img.webp" alt="" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mx-auto grid md:grid-cols-2 gap-6 text-sm">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Employee Health and Safety */}
                            <section>
                                <div className="">
                                    <div className="w-16 h-16 my-4">
                                        <img src="./iol-images/Human Capital/Employee-health-icon.webp" alt="" />
                                    </div>
                                    <h3 className="text-teal-700 font-bold uppercase">
                                        EMPLOYEE HEALTH AND SAFETY
                                    </h3>
                                </div>
                                <p className="mt-2">
                                    We operate under a comprehensive Health, Safety and Environment
                                    (HSE) Policy, duly approved by the Board. This policy provides a
                                    clear framework for driving safety, occupational health and
                                    environmental protection initiatives, integrating HSE as a core
                                    component of effective and responsible business management.
                                </p>

                                <div className="mt-4 space-y-2">
                                    <div>
                                        <span className="text-3xl font-bold text-teal-700">100%</span>
                                        <p className="text-gray-600">
                                            Refineries and petrochemical plants are ISO 45001:2018 certified
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-3xl font-bold text-teal-700">100%</span>
                                        <p className="text-gray-600">
                                            Operational locations audited for Safety
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Safety Management */}
                            <section>
                                <h4 className="font-bold">Safety Management</h4>
                                <p className="mt-1">
                                    We have implemented a robust Safety Management System across all our
                                    locations. Guidelines on Health, Safety and Environment Management
                                    System are in place, which cover various elements in line with Oil
                                    Industry Safety Directorate (OISD) standards and other statutory
                                    rules and regulations. We have also instituted 'Golden Rules of
                                    Safety' that are non-negotiable and mandatorily to be complied by all
                                    employees and contract workers across all locations to ensure personal
                                    and occupational safety. To reinforce safety readiness, regular audits,
                                    inspections and mock drills are conducted to identify unsafe practices
                                    and gaps in implementation of safety management systems at our
                                    locations. Time-bound corrective actions are taken to bridge the
                                    identified gaps. Additionally, digital portals are in place for
                                    reporting and analysing near-miss incidents, unsafe acts and unsafe
                                    conditions, fostering a culture of continuous safety improvement.
                                </p>
                            </section>

                            {/* Emergency Response Mechanism */}
                            <section>
                                <h4 className="font-bold">Emergency Response Mechanism</h4>
                                <p className="mt-1">
                                    Emergency response is guided by Disaster Management Plan of Ministry of
                                    Petroleum and Natural Gas (MoP&NG) and supported by Corporate and
                                    Divisional frameworks. Robust site-specific Emergency Response and
                                    Disaster Management Plans (ERDMP) are developed and implemented at all
                                    locations and cover all possible emergency scenarios such as fire,
                                    explosion and toxic release. These plans define roles, establish
                                    response teams that mobilise the emergency services and outline recovery
                                    measures. ERDMPs are certified by third parties and approved by the
                                    Board. Regular training, mock drills and coordination with authorities
                                    ensure readiness for both onsite and offsite emergencies.
                                </p>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Comprehensive Safety Training */}
                            <section>
                                <div className="flex items-start gap-3">
                                    {/* <TrainingIcon className="w-6 h-6 text-teal-700" /> */}
                                    <h4 className="font-bold">
                                        Comprehensive Safety Training and Skill Development
                                    </h4>
                                </div>
                                <p className="mt-1">
                                    We have conducted structured induction and refresher training
                                    programme for employees and contract workers in line with the Oil
                                    Industry Safety Directorate (OISD) and other relevant safety
                                    standards. These include both classroom and practical field sessions,
                                    which are focused on hazard identification, risk mitigation, safe
                                    operating procedures and emergency response. Specialised training is
                                    also offered in key areas such as safety leadership, electrical and
                                    construction safety, confined space entry, quantitative risk assessment
                                    (QRA) and hazard and operability study (Hazop), incident investigation
                                    and advanced medical management. Additionally, international
                                    certifications such as NEBOSH and targeted programme on lessons from
                                    past incidents are regularly imparted to build a safety-first culture
                                    across the organisation.
                                </p>
                            </section>

                            {/* Grievance and Redressal */}
                            <section>
                                <div className="">
                                    <div className="w-16 h-16 my-4">
                                        <img src="./iol-images/Human Capital/Grievance-and-redressal-icon.webp" alt="" />
                                    </div>
                                    <h4 className="font-bold text-teal-700">GRIEVANCE AND REDRESSAL</h4>
                                </div>
                                <p className="mt-1">
                                    We have set-up a structured and accessible grievance redressal
                                    mechanism to address employee concerns promptly and effectively. The
                                    system allows employees to submit and track grievances online, with
                                    provision for appeal or escalation on the outcome. Comprehensive
                                    training is provided to ensure employees and managers understand the
                                    processes, rights and responsibilities. This training is delivered
                                    through diverse formats such as workshops, role-plays and e-learning
                                    modules, with effectiveness measured through feedback, assessments and
                                    resolution data, ensuring a responsive and empathetic grievance-handling
                                    culture.
                                </p>
                                <div className="mt-3">
                                    <span className="text-3xl font-bold text-teal-700">20</span>
                                    <p className="text-gray-600">
                                        Grievances received and 21 resolved (1 pending from last year)
                                    </p>
                                </div>
                            </section>

                            {/* Employee Engagement Sessions */}
                            <section>
                                <div className="">
                                    <div className="w-16 h-16 my-4">
                                        <img src="./iol-images/Human Capital/Employee-engagement-sessions-icon.webp" alt="" />
                                    </div>
                                    <h4 className="font-bold text-teal-700">EMPLOYEE ENGAGEMENT SESSIONS</h4>
                                </div>
                                <p className="mt-1">
                                    The Company fosters a vibrant community spirit and camaraderie through
                                    vibrant township life, where festivals and special occasions are
                                    celebrated with enthusiasm. Events such as film screenings, plays,
                                    exhibitions and sports competitions offer employees and their family’s
                                    opportunities to bond, relax and stay engaged. Additionally, fitness
                                    initiatives like walkathons, cycling events and health challenges are
                                    regularly organised to encourage an active lifestyle and support
                                    overall well-being.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HumanCap