const OurBusinesses = () => {
  return (
    <div className="px-6 md:px-20 py-10 font-sans text-gray-800">
      <section className="mb-10">
        <h4 className="text-lg font-medium mb-2">Our Businesses</h4>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          A Holistic View of Our Portfolio
        </h1>
        <p className="w-full text-base md:text-lg lg:text-xl text-[#00704a] mb-4">
          IndianOil continues to accelerate its transformation into an
          integrated energy major by scaling core strengths and seizing
          opportunities in emerging energy domains.
        </p>
        <p className="text-gray-700">
          Anchored by our commitment to national energy security, sustainability
          and innovation, we made strong progress across business verticals—from
          fortifying conventional assets to expanding our alternative energy
          footprint. Our diversified portfolio reflects a future-proof strategy
          aimed at delivering reliable, cleaner and customer-centric energy
          solutions across India and beyond.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-8 mb-12 items-start ">
        {/* Text */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm order-1 md:order-1">
          <h2 className="text-[#00a550] font-bold text-lg mb-3">
            REFINING, PIPELINES AND MARKETING
          </h2>
          <p className="text-gray-700 mb-4">
            As one of India’s foremost downstream energy players, we advanced
            our mission to deliver energy solutions that are reliable, efficient
            and future-ready. During 2024-25, we undertook major refinery
            upgrades to enhance product flexibility and environmental
            compliance, while our Pipelines Division achieved new benchmarks in
            capacity utilisation, safety and digitalisation. We also expanded
            our marketing and distribution networks with a strong focus on
            premium fuels, automation and customer experience—cementing our
            leadership position in the petroleum value chain.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center order-2 md:order-2">
          <img
            src="public/iol-images/refining-pipelines-and-marketing.webp"
            alt="Ethylene Recovery Unit"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 items-start">
        {/* Text */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm order-1 md:order-2">
          <h2 className="text-[#00a550] font-bold text-lg mb-3">NATURAL GAS</h2>
          <p className="text-gray-700">
            With India pivoting towards a gas-based economy, IndianOil
            reinforced its position as a key enabler. In 2024-25, we scaled up
            our investments in LNG terminals, pipeline connectivity and City Gas
            Distribution (CGD) networks, ensuring wider availability of clean
            energy. Our focus remained on enhancing supply reliability,
            optimising gas logistics and promoting natural gas across industrial
            and retail segments as a cleaner fuel.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <img
            src="public/iol-images/natural-gas.webp"
            alt="Natural Gas"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 mb-12 items-start mt-12">
        {/* Text */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm order-1 md:order-1">
          <h2 className="text-[#00a550] font-bold text-lg mb-3">
            PETROCHEMICALS
          </h2>
          <p className="text-gray-700 mb-4">
            2024-25 marked another leap in our journey to become a petrochemical
            powerhouse. Backed by integrated refinery-petrochemical complexes
            and new project announcements, we advanced our plans to capture
            value from existing streams. Our thrust on specialty chemicals,
            import substitution and global outreach is helping position us as a
            regional petrochemical leader in Southeast Asia.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center order-2 md:order-2">
          <img
            src="public/iol-images/petrochemicals.webp"
            alt="Petrochemicals"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Text */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm order-1 md:order-2">
          <h2 className="text-[#00a550] font-bold text-lg mb-3">
            EXPLORATION AND PRODUCTION (E&P)
          </h2>
          <p className="text-gray-700">
            In alignment with India’s energy independence goals, we intensified
            upstream activities to build a balanced and resilient portfolio.
            2024-25 saw strategic partnerships, technology adoption and
            production ramp-up in key domestic and overseas blocks, contributing
            to our goal of securing long-term hydrocarbon supply.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center order-2 md:order-1">
          <img
            src="public/iol-images/Exploration-and-production.webp"
            alt="E&P"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-8 mb-12 items-start mt-12">
        {/* Text */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm order-1 md:order-1">
          <h2 className="text-[#00a550] font-bold text-lg mb-3">
            ALTERNATIVE ENERGY AND OTHER BUSINESSES
          </h2>
          <p className="text-gray-700 mb-4">
            As India advances toward Net-Zero, IndianOil is leading the
            transition by diversifying into renewable energy, biofuels, green
            hydrogen, sustainable aviation fuel and waste-to-energy. In 2024-25,
            we made strategic strides in commissioning pilot projects,
            scaling-up existing green assets and partnering with innovators to
            fast-track our alternative energy ambitions. These initiatives
            reflect our growing importance in shaping a sustainable energy
            future.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center order-2 md:order-2">
          <img
            src="public/iol-images/Alternative-energy-and-other-businesses.webp"
            alt="Petrochemicals"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default OurBusinesses;
