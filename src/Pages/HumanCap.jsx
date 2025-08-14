import CapitalCover from "../Components/CapitalCover"

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
                description={"What underpins IndianOil’s journey as the nation’s largest integrated energy major is a strong foundation of intellectual capital, powered by cutting-edge innovation, engineering excellence and a future-ready mindset. \n Our business model is perpetually adaptive to pivotal shifts in the global energy landscape. By nurturing a formidable talent pipeline and promoting a culture of continuous learning and innovation, IndianOil remains committed to delivering smart, sustainable energy solutions that create enduring value for our customers, stakeholders and the nation."}
                stakeholders={["Employees", "Customers", "Government and Regulatory Bodies"]}
                materialMatters={["Data Integrity and Cybersecurity", "Product Stewardship and Customer Satisfaction"]}
                sdgIcons={[
                    "./iol-images/Intellectual Capital/Sdg1.webp",
                    "./iol-images/Intellectual Capital/Sdg2.webp",
                ]}
                imagePosition="right"
                theme={"#bca1cc"}
            />
        <div className="marginal">

        </div>
    </div>
  )
}

export default HumanCap