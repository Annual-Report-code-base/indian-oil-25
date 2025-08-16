import React from "react";

export default function CompetitiveEdge() {
  const achievements = [
    {
      title: "Historic Sales Milestone Across Segments",
      body: "Achieved highest-ever sales volume, crossing the 100 MMT milestone for the first time in 2024-25, reaching 100.29 MMT across all segments (inclusive of gas, petrochemical and explosives). This is a significant increase from 97.5 MMT in the previous year.",
    },
    {
      title: "Record Pipeline Throughput & Strategic Expansion",
      body: "Pipeline throughput crossed 100.5 MMT—a first in Company’s history. We further expanded cross-country pipeline network by 261 Km, taking the total to over 20,000 Km, which constitutes more than half of India’s pipeline infrastructure.",
    },
    {
      title: "Integrated Capex Deployment",
      body: "Invested ₹40,374 Crore in capital expenditure, supporting capacity expansion, digitalisation, decarbonisation and infrastructure development across refining, marketing, pipelines, petrochemical and green energy segments.",
    },
    {
      title: "Consistent Refinery Performance & Growth Trajectory",
      body: "Maintained high refinery throughput throughout the year with robust distillate yield levels and supply chain discipline. The company remains on track to expand total refining capacity from 80.75 to 98.4 MMTPA by 2026–27, aligned with future energy demand.",
    },
    {
      title: "Petrochemical Growth Amid Global Challenges",
      body: "Despite a subdued global market, IndianOil’s petrochemical sales grew to 3.24 MMT, driven by product diversification and enhanced integration with core refining operations.",
    },
  ];

  return (
    <div className="w-full">
      {/* === COMPETITIVE EDGE SECTION === */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <img
          src="/iol-images/Competitive Edge.webp"
          alt="IndianOil refinery backdrop"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-800 via-blue-700/80 to-transparent" />

        {/* Right-side glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-2/3 w-1/2 bg-gradient-to-l from-blue-600/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* LEFT SIDE */}
            <div className="col-span-12 lg:col-span-7 text-white">
              <div className="text-lg font-medium mb-2">Competitive Edge</div>
              <h1 className="ext-3xl md:text-4xl font-bold leading-snug mb-4">
                Accelerating with High-Octane Performance
              </h1>
              <p className="mt-5 max-w-2xl text-white/90">
                Despite macroeconomic headwinds, IndianOil delivered a strong
                operational performance in 2024–25, with record-high sales
                volumes, peak pipeline throughput and one of the best distillate
                yield levels to date.
              </p>

              {/* Glassy card */}
              <div className="mt-8 rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur-md shadow-2xl max-w-lg">
                <div className="text-[11px] font-bold tracking-widest text-emerald-300">
                  WHAT MAKES INDIANOIL AN ENERGY
                </div>
                <div className="mt-1 text-3xl font-extrabold text-yellow-300 leading-none">
                  MAHARATNA
                </div>
                <p className="mt-4 text-white/90">
                  IndianOil is uniquely positioned to meet the nation’s evolving
                  energy demands. With robust financials, unparalleled
                  infrastructure, a diversified energy portfolio and ambitious
                  sustainability goals, we are set to deliver enduring value for
                  stakeholders, while contributing to the nation's economic
                  progress and energy security.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-10 flex flex-wrap items-start gap-x-12 gap-y-6">
                <div>
                  <div className="text-5xl font-bold leading-none">Largest</div>
                  <div className="mt-2 text-white/85">Refiner of India</div>
                </div>
                <div>
                  <div className="text-5xl font-semibold leading-none">
                    2nd Largest
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm backdrop-blur">
                      Petrochemical player of India
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm backdrop-blur">
                      E&amp;P player of India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 lg:col-span-5 text-white">
              <h3 className="uppercase tracking-wider text-sm font-semibold text-white/90">
                ACHIEVEMENTS AND MILESTONES (2024-25)
              </h3>
              <ul className="mt-4 space-y-4">
                {achievements.map((a, i) => (
                  <li
                    key={i}
                    className="relative rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-white/80" />
                      <div>
                        <div className="font-semibold">{a.title}</div>
                        <p className="mt-1 text-sm text-white/85">{a.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* PILLARS */}
              <div className="mt-10">
                <div className="uppercase tracking-wider text-sm font-semibold text-white/90">
                  PILLARS OF STRATEGIC ADVANTAGE AND GROWTH
                </div>
                <div className="mt-5">
                  <img
                    src="/iol-images/Pillars-of-strategic-advantage.webp"
                    alt="Pillars Hexagon Diagram"
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1220] to-transparent" />
      </section>

      {/* === UNMATCHED SCALE & OUTREACH SECTION === */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-yellow-700">
            Unmatched Scale and Outreach
          </h2>
          <p className="mt-2 text-gray-700 max-w-8xl">
            IndianOil commands an unparalleled presence across India’s energy
            landscape, with its expansive, largest pipeline network and
            nationwide customer touchpoints, ensuring accessibility across urban
            and rural regions alike.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-900">
                10 Group Refineries
              </p>
              <p className="text-sm text-gray-600">With 80.75 MMTPA capacity</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">63 Countries</p>
              <p className="text-sm text-gray-600">Export footprint</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">40,200+</p>
              <p className="text-sm text-gray-600">Retail Outlets</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">3.5 Crore</p>
              <p className="text-sm text-gray-600">
                Customers Being Served Daily
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">15.46 Crore</p>
              <p className="text-sm text-gray-600">Active LPG Customers</p>
            </div>
          </div>

          {/* Additional 3-column Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - Growing Inland and Export Mix */}
            <div>
              <div className="min-h-[100px]">
                {" "}
                {/* same height for all text sections */}
                <h3 className="text-green-600 font-bold text-lg uppercase">
                  Growing Inland and Export Mix
                </h3>
              </div>
              <div className="mt-4">
                <img
                  src="./iol-images/Unmatched Scale and Outreach/Inland-graph.webp"
                  alt="Growing Inland and Export Mix Stats"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4">
                <img
                  src="./iol-images/Unmatched Scale and Outreach/Export-throughput-graph.webp"
                  alt="Growing Inland and Export Mix Stats"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Column 2 - Upstream */}
            <div>
              <div className="min-h-[100px]">
                <h3 className="text-green-600 font-bold text-lg uppercase">
                  Upstream
                </h3>
                <p className="text-sm text-gray-600">
                  14 domestic and 11 overseas active blocks under various stages
                  of exploration, development and production
                </p>
              </div>
              <div className="mt-4">
                <img
                  src="./iol-images/Unmatched Scale and Outreach/Upstream-production-graph.webp"
                  alt="Upstream Stats"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Column 3 - Midstream */}
            <div>
              <div className="min-h-[100px]">
                <h3 className="text-green-600 font-bold text-lg uppercase">
                  Midstream
                </h3>
                <p className="mt-2 text-sm text-gray-800 font-bold">
                  India’s largest oil refiner with <br />
                  <span className="text-blue-900 font-bold text-xl">
                    ~31%
                  </span>{" "}
                  <br />
                  market share
                </p>
              </div>
              <div className="mt-4">
                <img
                  src="./iol-images/Unmatched Scale and Outreach/Retinery-throughput-graph.webp"
                  alt="Midstream Stats"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src="./iol-images/Unmatched Scale and Outreach/Sprint.webp" // <-- replace with your actual path
              alt="Running Man"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        {/* Downstream Header & Infographic */}
        <div className="min-h-[100px] text-center">
          <h3 className="text-green-600 font-bold text-lg uppercase">
            Downstream
          </h3>
          <p className="text-sm text-gray-600">
            Largest fuel retailer with over 63,000 customer touchpoints across
            India
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <img
            src="./iol-images/Unmatched Scale and Outreach/Downstream-infograph.webp"
            alt="Downstream Stats"
            className="w-full max-w-xl h-auto"
          />
        </div>

        {/* First Horizontal Line */}
        <hr className="my-8 border-t border-gray-300" />

        {/* Largest pipeline network section */}
        <h3 className="text-orange-500 font-bold text-lg text-center">
          Largest pipeline network
        </h3>
        <p className="text-center text-xs text-gray-500 mb-6">Length (Km)</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-blue-900 font-bold text-3xl">5,324</p>
            <p className="text-sm text-gray-600">Crude pipeline</p>
          </div>
          <div>
            <p className="text-blue-900 font-bold text-3xl">13,344</p>
            <p className="text-sm text-gray-600">Product pipeline</p>
          </div>
          <div>
            <p className="text-blue-900 font-bold text-3xl">1,337</p>
            <p className="text-sm text-gray-600">Gas pipeline</p>
          </div>
        </div>

        {/* Leader in market infrastructure section */}
        <div className="mt-10">
          <h3 className="text-orange-500 font-bold text-lg text-center">
            Leader in market infrastructure<sup>1</sup>
          </h3>
          <p className="text-center text-xs text-gray-500 mb-6">
            IndianOil’s Share
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-blue-900 font-bold text-3xl">41.58%</p>
              <p className="text-sm text-gray-600">Retail outlets</p>
            </div>
            <div>
              <p className="text-blue-900 font-bold text-3xl">51%</p>
              <p className="text-sm text-gray-600">LPG Distributorships</p>
            </div>
            <div>
              <p className="text-blue-900 font-bold text-3xl">47.3%</p>
              <p className="text-sm text-gray-600">Aviation fuel stations</p>
            </div>
          </div>
        </div>

        {/* Second Horizontal Line */}
        <hr className="my-4 border-t border-gray-300" />

        {/* Footnote */}
        <p className="text-xs text-gray-500 text-center">
          <sup>*</sup>Petroleum Planning & Analysis Cell
        </p>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <h2 className="text-lg md:text-xl font-bold text-yellow-800">
            Diverse portfolio spanning the entire hydrocarbon value chain
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
            At IndianOil, we are strategically positioning ourselves as a
            diversified energy solutions provider, moving beyond traditional
            upstream, midstream and downstream operations to capture high-growth
            opportunities in petrochemicals, natural gas and alternate energy.
          </p>

          {/* Petrochemicals Section */}
          <div className="mt-6">
            {/* Logo */}
            <div className="w-14 h-14 mb-3">
              <img
                src="./iol-images/Diverse-Portfolio-Spanning/Petrochemicals-icon.webp"
                alt="Petrochemicals Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-green-600 font-bold uppercase text-base">
              Petrochemicals
            </h3>

            <p className="text-orange-500 font-semibold mt-1">
              Accelerating Value Creation Through Strategic Expansion
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl text-sm">
              We have identified petrochemicals as a cornerstone of future
              growth, targeting a dramatic transformation from a
              refining-focused company to an integrated energy and chemicals
              giant.
            </p>

            {/* Capacity */}
            <div className="mt-6">
              <p className="text-3xl font-bold text-blue-900">13.2 MMTPA</p>
              <p className="text-sm text-gray-600">
                Petrochemical capacity expansion target by 2030
              </p>
            </div>

            {/* Blue Box */}
            <div className="mt-8 bg-blue-900 text-white p-6 rounded-lg shadow-md">
              <p className="text-sm leading-relaxed">
                We aim to enhance our Petrochemical Intensity Index (PII) from
                6.1% to 15% by 2030, backed by significant investments in the
                petrochemical sector. Our major projects including the
                Petrochemical complex at Paradip, the Poly Butadiene Rubber
                plant at Panipat and the Textile Project at Bhadrak, Odisha, are
                aimed at creating greater value, meeting robust sectoral demand
                and supporting import substitution in line with the vision of{" "}
                <span className="italic">‘Atmanirbharta’</span>.
              </p>
            </div>

            {/* Paradip Complex */}
            <div className="mt-10">
              <p className="text-orange-500 font-semibold">
                Paradip Petrochemical Complex
              </p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed max-w-3xl">
                The ₹61,077 Crore Paradip petrochemical complex is IndianOil's
                largest-ever investment at a single location, setting the stage
                for truly transformational growth.
              </p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">
                    World-scale Infrastructure:
                  </span>{" "}
                  The complex will feature a 1.5 MMTPA naphtha cracker with
                  downstream units producing Polypropylene (PP), High-Density
                  Polyethylene (HDPE), Linear Low-Density Polyethylene (LLDPE)
                  and Polyvinyl Chloride (PVC)
                </li>
                <li>
                  <span className="font-semibold">Speciality Chemicals:</span>{" "}
                  Expanding into high-value market segments, with dedicated
                  production of Phenol, Isopropyl Alcohol (IPA) and Butadiene.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="mt-10">
              <img
                src="./iol-images/Diverse-Portfolio-Spanning/Diverse-portfolio-img.webp"
                alt="Paradip Petrochemical Complex"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 max-w-6xl mx-auto">
        {/* Natural Gas */}
        <div className="mb-12">
          {/* Natural Gas Logo */}
          <div className="w-14 h-14 mb-3">
            <img
              src="./iol-images/Diverse-Portfolio-Spanning/Natural-gas-icon.webp"
              alt="Natural Gas Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-green-600 font-bold uppercase">Natural Gas</h3>
          <p className="text-orange-500 font-semibold mt-1">
            Building India’s Gas-based Economy Infrastructure
          </p>
          <p className="mt-2 text-gray-700 text-sm">
            We are a leading player in India’s natural gas ecosystem,
            strategically positioned to capitalise on the country’s vision of a
            gas-based economy.
          </p>

          {/* Growth Strategy */}
          <h4 className="mt-4 text-orange-500 font-semibold">
            Growth Strategy and Expansion Plans
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700 list-none">
            <li>
              ↗ Ambitious Growth Target - Triple natural gas sales by 2030,
              supported by expanding pipeline infrastructure and city gas
              distribution networks
            </li>
            <li>
              ↗ Infrastructure Development – Ongoing projects include the
              Hazaribagh–Ranchi Natural Gas Pipeline and the capacity
              augmentation of existing systems
            </li>
            <li>
              ↗ Strategic Procurement - Long-term agreements for over 3 MMTPA of
              LNG procurement with ADNOC, TotalEnergies and renewed contracts
              with QatarEnergy
            </li>
          </ul>

          {/* Stats */}
          <p className="mt-6 text-2xl font-bold text-blue-900">
            India’s 2<sup>nd</sup> Largest Player
          </p>
          <p className="text-gray-600 text-sm">
            in imported natural gas business
          </p>
          <p className="mt-2 text-2xl font-bold text-blue-900">13.18 MMTPA</p>
          <p className="text-gray-600 text-sm">
            Total LNG terminal capacity across multiple strategic locations
          </p>
        </div>

        {/* Alternative Energy */}
        <div className="mb-8">
          {/* Alternative Energy Logo */}
          <div className="w-14 h-14 mb-3">
            <img
              src="./iol-images/Diverse-Portfolio-Spanning/Alternative-energy-icon.webp"
              alt="Alternative Energy Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-green-600 font-bold uppercase">
            Alternative Energy: Leading India’s Clean Energy Transition
          </h3>

          {/* Flex container for text and image */}
          <div className="mt-4 flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                We are leading India’s energy transition through comprehensive
                investments in renewable energy, green hydrogen and sustainable
                technologies, targeting Net-Zero operational emissions by 2046 –
                24 years ahead of India’s national target.
              </p>

              {/* Renewable Energy Expansion */}
              <h4 className="mt-4 font-semibold text-gray-800">
                Renewable Energy Expansion
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 list-none">
                <li>
                  ↗ Current Portfolio: 252.1 MW renewable energy capacity
                  comprising 167.6 MW wind and 84.5 MW solar capacity
                </li>
                <li>
                  ↗ Transformational Target: 31 GW renewable energy capacity by
                  2030
                </li>
                <li>
                  ↗ Terra Clean Subsidiary: Developing 1 GW of renewable energy,
                  with plans to scale up to 5.3 GW in the coming years
                </li>
              </ul>

              {/* Green Hydrogen Leadership */}
              <h4 className="mt-4 font-semibold text-gray-800">
                Green Hydrogen Leadership
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 list-none">
                <li>
                  ↗ Flagship Project: 10,000 tonnes per annum green hydrogen
                  plant at Panipat refinery, scheduled for commissioning by
                  December 2027
                </li>
                <li>
                  ↗ Strategic Vision: Target to convert 50% of current hydrogen
                  consumption to green by 2030, supporting hard-to-decarbonise
                  sectors such as oil refining, steel manufacturing and
                  heavy-duty transport
                </li>
                <li>
                  ↗ Technology Integration: Utilising renewable electricity from
                  solar, wind or hydro sources for electrolysis, gradually
                  replacing fossil-fuel-based hydrogen in refinery operations
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 lg:w-1/3 mt-6 lg:mt-0">
              <img
                src="./iol-images/Diverse-Portfolio-Spanning/Renewable-energy-expansion-img.webp"
                alt="Wind Turbine Renewable Energy"
                className="w-full rounded-lg shadow-md"
              />
              <p className="mt-2 text-xs text-gray-500">
                Turning Wind into Watts — IndianOil’s 167.6 MW Stride in
                Renewables
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-x-8 gap-y-8">
            {/* === ROW A: Robust Financials (left) + Net worth chart (right) === */}
            <div className="col-span-12 lg:col-span-7">
              <h3 className="text-yellow-700 font-bold text-lg">
                Robust Financials
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                With a strong performance track record, IndianOil exemplifies
                financial resilience. Consistent dividend payouts and strategic
                investments in growth and innovation underscore our commitment
                to shareholders’ value, making IndianOil a reliable choice.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 self-start">
              {/* Replace src with your chart */}
              <img
                src="./iol-images/Robust-Financials/Net-worth-graph.webp"
                alt="Net worth"
                className="mt-2 w-full h-24 md:h-28 object-contain"
              />
            </div>

            {/* === ROW B: Two big stats (left block) aligned with two charts (right block) === */}
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-900">
                    ₹99,892.92 Crore
                  </p>
                  <p className="text-gray-600 text-sm">
                    Total economic value created
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-900">
                    7.10%
                  </p>
                  <p className="text-gray-600 text-sm">
                    Return on average capital employed
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-900">
                    ₹33,170 Crore
                  </p>
                  <p className="text-gray-600 text-sm">
                    Operating Cash Flow Strength
                  </p>
                </div>
              </div>
            </div>

            {/* Divider line across */}
            <div className="col-span-12">
              <hr className="border-t border-gray-300" />
            </div>

            {/* === ROW C: Fulfilling India’s Energy Needs + right-hand stats/graph === */}
            <div className="col-span-12">
              <h3 className="text-blue-900 font-bold text-lg">
                Fulfilling India’s Energy Needs
              </h3>
            </div>

            {/* Left copy + donut stat */}
            <div className="col-span-12 lg:col-span-7">
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                India’s economy is expected to maintain a high growth
                trajectory, driving increased demand for energy across sectors,
                which would create growing market opportunities for IndianOil.
              </p>

              <div className="mt-5">
                <p className="text-orange-600 font-semibold text-sm">
                  Projected capacity growth of Companies to meet the oil demand
                  <span className="uppercase"> (MBPD)</span>
                </p>

                <div className="mt-3 flex items-center gap-5">
                  {/* Replace with your donut image */}
                  <img
                    src="./iol-images/Robust-Financials/Robust-financial-yellow-red-graph.webp"
                    alt="Projected capacity donut"
                    className="w-28 h-28 object-contain"
                  />
                  {/* Legend */}
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                      6.8 – 2030
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
                      5.2 – 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right top: petroleum consumption bar; Right bottom: 4th Largest + growth curve */}
            <div className="col-span-12 lg:col-span-5 self-start">
              <img
                src="./iol-images/Robust-Financials/Growing-consumption-graph.webp"
                alt="Petroleum consumption"
                className="mt-1 w-full h-24 md:h-28 object-contain"
              />

              <div className="mt-5">
                <p className="text-4xl font-bold text-blue-900">
                  4<sup>th</sup> Largest
                </p>
                <p className="text-gray-600 text-sm">
                  Economy in the world (As per IMF India has become 4
                  <sup>th</sup> largest economy in 2025)
                </p>
                <img
                  src="./iol-images/Robust-Financials/Black-graph.webp"
                  alt="Growth illustration"
                  className="mt-3 w-full h-32 md:h-36 object-contain"
                />
              </div>
            </div>

            {/* Footnotes */}
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[11px] text-gray-500 mt-4">
                ³ Snapshot of India’s oil & gas data monthly ready Reckoner
                September-2024
              </p>
              <p className="text-[11px] text-gray-500">
                ⁴ IndiaOil Market Report
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16 px-6 md:px-20">
        {/* Innovation Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            High-Velocity Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-6">Robust R&D</p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            With{" "}
            <span className="font-semibold text-indigo-600">
              1,689 active patents
            </span>
            , IndianOil has doubled its patents in about seven years, creating a
            robust foundation for future growth through advanced technologies.
          </p>
          <p className="mt-4 text-2xl font-bold text-indigo-600">
            ₹1,067 Crore
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Leadership in hydrogen and biofuels
          </p>
          <p className="mt-4 text-base md:text-sm text-gray-500">
            IndianOil has set-up India’s
          </p>
          <p className="text-lg font-semibold text-green-600 mt-2">
            First 3G Ethanol Plant
          </p>
        </div>

        {/* Strategic Investments */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Strategic Investments in Emerging Technologies
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Focused on high-impact areas like carbon capture and next-generation
            battery technologies (lithium-ion and aluminum-air), we are
            positioned to lead in alternative energy solutions and electric
            mobility.
          </p>
        </div>

        {/* Green Assets Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-600 mb-2">
              Green Assets
            </h2>
            <p className="text-lg text-gray-700">
              Driving sustainable energy through renewables, biofuels, and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Renewables */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src="/iol-images/Green-Assests/Renewables-graph.webp"
                alt="Renewables"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Renewables
              </h3>
            </div>

            {/* Ethanol */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src="/iol-images/Green-Assests/Ethanol-graph.webp"
                alt="Ethanol"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Ethanol
              </h3>
            </div>

            {/* Compressed Bio Gas */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src="/iol-images/Green-Assests/Compressed-bio-graph.webp"
                alt="Compressed Bio Gas"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Compressed Bio Gas
              </h3>
            </div>
          </div>
          <div className="max-w-5xl mt-12 ">
            <h2 className="text-xl md:text-4xl font-bold text-orange-600 mb-6">
              Outcomes Achieved
            </h2>
            <ul className="space-y-4 text-gray-800 text-base md:text-lg list-disc list-inside">
              <li>
                Commissioned{" "}
                <span className="font-semibold">
                  4,656 EV Charging Stations
                </span>{" "}
                in Financial Year 2025, increasing the total to{" "}
                <span className="font-semibold">
                  13,614 EV Charging Stations
                </span>
                .
              </li>
              <li>
                Launched{" "}
                <span className="font-semibold">
                  37 Battery Swapping Stations
                </span>{" "}
                in Financial Year 2025, bringing the total to{" "}
                <span className="font-semibold">128</span>.
              </li>
              <li>
                Advancing India’s green hydrogen ecosystem with the upcoming{" "}
                <span className="font-semibold">
                  10 KTA green hydrogen plant
                </span>{" "}
                at Panipat.
              </li>
              <li>
                Introduced{" "}
                <span className="font-semibold">
                  India’s First Hydrogen Fuel Cell buses
                </span>
                , marking a milestone in the country's green transportation
                initiatives.
              </li>
            </ul>
          </div>
        </div>
      </section>

     <section className="relative w-full overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0">
    <img
      src="/iol-images/Driving Sustainability and Inclusive Development/Img.webp"
      alt="Driving Sustainability and Inclusive Development"
      className="w-full h-full object-cover lg:object-contain"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 min-h-[80vh] lg:min-h-screen flex flex-col justify-center">
    <div className="grid grid-cols-12 gap-x-6 gap-y-8">
      {/* Left text block */}
      <div className="col-span-12 lg:col-span-6">
        <h3 className="text-lg font-bold text-white">
          Driving Sustainability and Inclusive Development
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white max-w-md">
          IndianOil is steadfast in its commitment to build a sustainable
          future, prioritising environmental preservation and impactful social
          upliftment programmes. By aligning our initiatives with global
          Environmental, Social and Governance (ESG) standards, we contribute
          to India’s energy targets as well as promote positive change in
          communities and ecosystems.
        </p>
      </div>

      {/* Right bordered stat box */}
      <div className="col-span-12 lg:col-span-6 lg:pl-10">
        <div className="border border-white rounded-md p-5 max-w-xs text-white bg-white/10 backdrop-blur-sm mx-auto lg:mx-0">
          <p className="text-xs leading-snug mb-4">
            Aiming for Net-Zero operational emissions by 2046, with a focus on
            green hydrogen, biofuels and renewable energy solutions
          </p>
          <p className="text-3xl font-bold">31 GW</p>
          <p className="text-sm mb-3">Renewable capacity target by 2030</p>
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm">Decarbonisation by 2046</p>
        </div>
      </div>

      {/* Lower left stat */}
      <div className="col-span-12 lg:col-span-6 mt-4 sm:mt-6 text-white">
        <p className="text-3xl font-bold">1.36+ Crore</p>
        <p className="text-sm">
          Beneficiaries reached through CSR programmes during 2024-25
        </p>
      </div>
    </div>
  </div>

  {/* Caption */}
  <div className="relative sm:absolute sm:bottom-4 sm:left-6 text-[10px] text-black text-bold opacity-80 mt-6 sm:mt-0 px-4 sm:px-0">
    A glimpse of Digboi Refinery through the Refinery Ecopark
  </div>
</section>


      <section className="relative w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="./iol-images/Driving Sustainability and Inclusive Development/Sprint_Future-img.webp" // replace with actual image path
              alt="Runner illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Logo & Heading */}

            {/* Intro text */}
            <p className="text-center md:text-left text-lg font-semibold text-orange-600 mt-4">
              The world is evolving fast – and so is IndianOil
            </p>

            {/* Bullet Points */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div>
                <p className="mb-4">
                  <span className="font-bold text-orange-600">
                    1. Strengthen our Core Businesses
                  </span>
                  <br />
                  Continue as India’s largest refiner, boost fuel retail market
                  share, lead institutional businesses, and scale petrochemical
                  capacity including specialty chemicals
                </p>
                <p className="mb-4">
                  <span className="font-bold text-orange-600">
                    2. Propel Cost Optimisation
                  </span>
                  <br />
                  Become best-in-class and cost-efficient in delivering energy
                  products, achieve cost leadership, optimise maintenance costs,
                  and ensure timely completion of projects
                </p>
                <p>
                  <span className="font-bold text-orange-600">
                    3. Reinforce Customer Centricity
                  </span>
                  <br />
                  Be the Company of choice for customers, expanding into new
                  customer segments, and scaling innovative offerings that
                  elevate and excite the customer experience
                </p>
              </div>

              <div>
                <p className="mb-4">
                  <span className="font-bold text-orange-600">
                    4. Integrate Technology and Innovation
                  </span>
                  <br />
                  Drive product innovation, implement digital solutions to drive
                  business value and future-ready technology choices
                </p>
                <p className="mb-4">
                  <span className="font-bold text-orange-600">
                    5. Nurture Leadership and Talent
                  </span>
                  <br />
                  Build high-potential leaders, develop and acquire talent for
                  new businesses
                </p>
                <p>
                  <span className="font-bold text-orange-600">
                    6. Be Transition Ready
                  </span>
                  <br />
                  Accelerate investments in Green Energy Businesses, build new
                  growth engines, and traverse through Net-Zero pathway
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <p className="mt-6 font-bold text-orange-600">
              SPRINT isn’t just a plan, it is a promise
            </p>
            <p className="text-xs italic border-t border-orange-600 pt-2 mt-2">
              To transform, lead with purpose, fuel India’s growth with
              customers at the centre of everything
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
