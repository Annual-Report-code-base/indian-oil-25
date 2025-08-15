import React from "react";

const AboutUs2 = () => {
  return (
    <div className="px-6 md:px-20 py-10 font-sans text-gray-800">
      {/* Top Full-Width Section */}
      <div className="mb-10">
        <h4 className="text-lg font-medium mb-2">About Us</h4>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Driven by Passion, Defined by Commitment
        </h1>
        <p className="w-full text-base md:text-lg lg:text-xl text-[#00704a]">
          As India’s largest integrated and diversified energy company,
          IndianOil is driven by an unwavering passion to excel and a relentless
          commitment to serve the nation’s energy needs.
        </p>
      </div>

      {/* Bottom Two-Column Section */}
      <section className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Column - Description + Vision */}
        <div className="flex-1 space-y-4">
          <p>
            A Maharatna Enterprise under the Ministry of Petroleum and Natural
            Gas, Government of India, IndianOil has a robust presence across the
            hydrocarbon value chain — from refining and pipeline transportation
            to marketing, exploration and production, petrochemicals, natural
            gas and alternative energy.
          </p>
          <p>
            With group refining capacity of 80.75 MMTPA, over 20,000 Km pipeline
            network and over 63,000 customer touchpoints, IndianOil ensures
            reliable energy access across the country. IndianOil continues to
            maintain its leadership position in fuel marketing with the largest
            market share in petroleum products, including Petrol, Diesel, LPG
            and Aviation Turbine Fuel.
          </p>
          <p>
            For nearly seven decades, IndianOil continues to make significant
            contributions to India’s energy security and self-reliance,
            achieving historic firsts in specialised fuels. Backed by
            cutting-edge R&D, a vast distribution infrastructure and deep-rooted
            corporate citizenship, IndianOil plays a pivotal role in shaping
            India’s socio-economic progress.
          </p>
          <p>
            Guided by the vision of becoming ‘The Energy of India,’ IndianOil is
            committed to shaping a future-ready energy ecosystem. Our
            investments in Biofuels, Hydrogen, Carbon Capture Utilisation and
            Storage (CCUS) and Next-Gen Mobility Solutions reaffirm our pledge
            to lead India’s energy transition, while delivering enduring value
            to all stakeholders.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="public/iol-images/About-us-infographic.webp"
            alt="IndianOil Vision"
            className="w-full max-w-sm md:max-w-md h-auto object-contain"
          />
        </div>
      </section>

      {/* Full-Width Image with Same Padding */}
      <div className="bg-gray-100 rounded-3xl mt-6">
        <img
          src="public/iol-images/Indian-oil-values-the-north-star-inforgraphic.webp"
          alt="Full Width"
          className="w-full p-10 md:w-[80%] mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs2;
