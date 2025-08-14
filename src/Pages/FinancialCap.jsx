import CapitalCover from "../Components/CapitalCover"

const FinancialCap = () => {
    return (
        <div>
            <CapitalCover
                themeColor="orange"
                capitalType="Financial"
                topBoxTitle="PROPEL COST OPTIMISATION"
                topBoxSubtitle="Cost efficiency is key to long-term competitiveness"
                bulletPoints={[
                    "Enhance operational efficiency across all verticals",
                    "Reduce high-cost areas such as LPG bottling, civil AFS and logistics",
                    "Achieve best-in-class asset utilisation and profit margins through strategic cost control",
                ]}
                mainImage="./iol-images/Financial Capital/Financial-capital-background.webp"
                directorImage="./iol-images/Financial Capital/Anuj Jain_1.webp"
                directorName="Anuj Jain"
                directorDesignation="Director (Finance)"
                directorQuote="IndianOil delivered resilient financial performance in 2024–25, effectively managing the impact of geopolitical instability and volatile market conditions. With disciplined cost optimisation, strategic CAPEX and robust governance, the Company continues to balance growth, sustainability and stakeholder value."
                highlightText="Sprint ahead — with Fiscal Prudence"
                description={"Notwithstanding macro challenges, our stellar financial performance over the decades has been the outcome of prudent financial management — balancing growth ambitions with cost optimisation and sustainability goals across the value chain.\n We at IndianOil, remain steadfast in our resolve — SPRINTing ahead with strategic vision and proactive investments to create long-term value for our stakeholders. As a future-focused Company, we are making high-impact infrastructure investments to expand our refining business, coupled with matching investments in marketing and pipeline infrastructure."}
                stakeholders={["Investor and Shareholders", "Government and Regulatory Bodies",]}
                materialMatters={["N Business Ethics and Accountability",]}
                sdgIcons={["./iol-images/Financial Capital/Sdg1.webp", "./iol-images/Financial Capital/Sdg2.webp",]}
                imagePosition="right"
                theme={"#f2a77f"}
            />
            <div className="marginal">
                <div className="flex md:flex-row flex-col gap-6 ">
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <img src="./iol-images/Financial Capital/Graph/Input.webp" className="w-[70%]" alt="" />
                        </div>
                        <div>
                            <img src="./iol-images/Financial Capital/Graph/Other-equity.webp" alt="" className="w-[70%]" />
                        </div>
                        <div>
                            <img src="./iol-images/Financial Capital/Graph/Total-borrowings.webp" alt="" className="w-[70%]" />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-orange-400 mb-3">FINANCIAL RESILIENCE</h3>
                        <p className="mb-2">
                            We mitigate financial risks and ensure resilience through
                        </p>
                        <ul className="space-y-2 px-4 list-disc">
                            <li>
                                Proactive treasury operations and liquidity buffers
                            </li>
                            <li>
                                Hedging strategies for forex and interest rate risks
                            </li>
                            <li>
                                Stress-tested planning for external shocks
                            </li>
                            <li>
                                Optimised debt portfolio with sustainable gearing levels
                            </li>
                        </ul>
                        <p className="mt-3">
                            These practices ensure our ability to perform consistently and
                            transform responsibly, true to the spirit of SPRINT.
                        </p>

                        <h3 className="text-2xl font-semibold text-orange-400 my-3">TAX GOVERNANCE</h3>
                        <p className="mb-2">
                            IndianOil’s tax governance is anchored in an integrated strategy that combines efficient tax planning, proactive dispute resolution and real-time policy monitoring. We leverage technologies such as Robotic Process Automation, maintain rigorous compliance checks and continuously review business models and documentation to enhance tax efficiency and alignment.
                        </p>
                        <p>
                            Disputes are managed through legal reviews, advance rulings and close collaboration with tax authorities, while emerging policy
                            changes are assessed through CBIC updates, impact analyses and
                            supply chain reviews—ensuring compliance, informed decision-
                            making and sustained operational resilience.
                        </p>
                    </div>
                </div>

                <div className="my-12 space-y-10">
                    <div className="flex md:flex-row items-end flex-col gap-6">
                        <div className="w-[33%]">
                            <img src="/iol-images/Financial Capital/Graph/Output.webp" alt="" />
                        </div>
                        <div className="w-[33%]">
                            <img src="/iol-images/Financial Capital/Graph/Pat.webp" alt="" />
                        </div>
                        <div className="w-[33%]">
                            <img src="/iol-images/Financial Capital/Graph/Operating-cash-flow.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-end gap-6">
                        <div className="w-[33%]">
                            <img src="/iol-images/Financial Capital/Graph/Ebitda.webp" alt="" />
                        </div>
                        <div className="w-[33%]">
                            <img src="/iol-images/Financial Capital/Graph/Market-capitalisation.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <img src="./iol-images/Financial Capital/Graph/Shared-value-creation.webp" alt="" className="md:w-[85%]" />
                </div>
            </div>
        </div>
    )
}

export default FinancialCap