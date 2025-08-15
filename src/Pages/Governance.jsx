import React from "react";

const Governance = () => {
  return (
    <section
      className="relative bg-cover bg-top min-h-screen md:min-h-0 py-12"
      style={{
        backgroundImage:
          "url('/iol-images/Leading with Exemplary Governance/Leading With Exemplary Governance-background-img.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <h4 className="text-lg font-medium mb-2 text-[#00704A]">
            Governance
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-black">
            Leading with Exemplary Governance
          </h1>
          <p className="w-full text-base md:text-lg lg:text-xl text-[#00704A] mb-4">
            Our Board of Directors provide strategic direction and clear
            oversight ensuring that management actions align with the Company’s
            long-term vision, mission and values.
          </p>
          <p className="text-gray-800 mt-4">
            Through well-defined policies, risk management systems and ethical
            leadership, we promote a culture of accountability and resilience
            that supports both operational excellence and our energy transition
            agenda.
          </p>

          {/* PERSON CARD */}
          <div className="bg-yellow-50 mt-6 p-5 relative shadow-md max-w-lg rounded-md">
            <div className="flex items-center gap-4">
              <img
                src="/iol-images/Leading with Exemplary Governance/Kamal Kumar Gwalani.webp"
                alt="Kamal Kumar Gwalani"
                className="w-20 h-24 object-cover rounded-md"
              />
              <div>
                <p className="font-bold text-black">Kamal Kumar Gwalani</p>
                <p className="text-sm text-gray-600">Company Secretary</p>
              </div>
            </div>

            {/* Quote Start */}
            <img
              src="/iol-images/Leading with Exemplary Governance/Quote1.webp"
              alt="Quote Start"
              className="w-6 mt-4"
            />

            <p className="text-gray-800 mt-2">
              As IndianOil advances its transformation journey through SPRINT,
              our commitment to governance remains unwavering with well-defined
              policies and ethical and responsible business practices. The trust
              we build with stakeholders stems not only from our performance,
              but from the principles that guide it.
            </p>

            {/* Quote End */}
            <img
              src="/iol-images/Leading with Exemplary Governance/Quote2.webp"
              alt="Quote End"
              className="w-6 mt-2 ml-auto"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black/50 p-6 rounded-lg">
          <h4 className="text-[#00ff88] font-bold mb-6">
            PILLARS OF GOVERNANCE
          </h4>

          {[
            {
              num: 1,
              color: "bg-red-500",
              title: "Strategic Leadership with a Visionary Outlook",
              text: "Our Board of Directors shape our strategic vision, ethical framework and decision-making processes. To successfully embed strategic initiatives, risk management, performance enhancement and sustainable development within our operations, it is essential that decisions are made independently and based on thorough, well-informed judgment.",
            },
            {
              num: 2,
              color: "bg-green-600",
              title: "Nurturing a Resilient Organisational Culture",
              text: "Recognising that a strong corporate culture is key to our success, the Board defines our strategic priorities, core values, vision and mission. Such a foundation strengthens our ability to act as a progressive business entity, seize emerging market opportunities and uphold a governance framework that consistently delivers value to all stakeholders.",
            },
            {
              num: 3,
              color: "bg-teal-500",
              title: "Establishing Trust Through Robust Governance Practices",
              text: "We have formulated a Code of Conduct (CoC) specifically for our Board Members and Senior Management. The Code serves as a crucial guide, emphasising the significance of personal and professional integrity, honesty and ethical behaviour in all that we do.",
            },
            {
              num: 4,
              color: "bg-pink-500",
              title: "Promoting Integrity and Responsibility",
              text: "Integrity and accountability are core of our organisational values. The various initiatives including the Conduct Appeal and Discipline Rules, the Standing Orders and Whistle Blower Policy encourages employees to align their actions with our core principles, providing them with a secure channel to report any misconduct. It safeguards whistleblowers against retaliation, ensuring that concerns can be raised freely and without fear.",
            },
          ].map((pillar) => (
            <div key={pillar.num} className="flex gap-4 mb-6">
              <span
                className={`flex items-center justify-center w-12 h-12 rounded-full ${pillar.color} text-white font-bold text-lg`}
              >
                {pillar.num}
              </span>
              <div>
                <h3 className="font-semibold text-[#00ff88]">{pillar.title}</h3>
                <p className="text-gray-100 mt-1">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governance;
