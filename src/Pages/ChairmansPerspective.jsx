import React from "react";

export default function ChairmansPerspective() {
  return (
    <>
      {/* First Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1D64] via-[#2B2C8A] to-[#00A0A8] z-0"></div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="flex justify-center">
            <img
              src="/iol-images/From the Chairman's Desk/From The Chairmans Desk.webp"
              alt="Chairman"
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Text on the right */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              From the Chairman’s Desk
            </h2>

            <div className="space-y-4">
              {/* Quote start */}
              <img
                src="/iol-images/Leading with Exemplary Governance/Quote1.webp"
                alt="Quote Start"
                className="w-6 mx-auto lg:mx-0 invert"
              />

              <p className="text-lg md:text-xl leading-relaxed text-white font-bold">
                IndianOil concluded 2024–25 with record highs in product sales,
                refining and pipelines operations, while accelerating its shift
                to green energy. With bold investments, new-age fuels and
                Project SPRINT in motion, the Company is reshaping itself into a
                future-ready, diversified energy leader.
              </p>

              {/* Quote end */}
              <img
                src="/iol-images/Leading with Exemplary Governance/Quote2.webp"
                alt="Quote End"
                className="w-6 mx-auto lg:mx-0 invert mt-2"
              />
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-lg">Shri A S Sahney</p>
              <p className="text-sm text-white/80">Chairman, IndianOil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full min-h-screen bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Dear Shareholders */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#00A08A] mb-6">
              Dear Shareholders,
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 text-base leading-relaxed">
              <p>
                In the backdrop of an eventful financial year 2024-2025 marked
                by dynamic global shifts, economic recalibrations and
                transitions in the energy sector, IndianOil has continued to
                perform well and meet the energy needs of the nation with
                resolve and steadfastness. It is a pleasure to bring to you
                IndianOil’s Integrated Annual Report for 2024-2025 and thank you
                for your unwavering support in our journey during another
                fruitful year.
                <br />
                <br />
                As India’s flagship energy major, IndianOil continues to serve
                as the backbone of the nation’s energy security architecture.
                From meeting fuel needs of remote hamlets to energizing
                high-growth industrial corridors, we have remained central to
                the nation’s progress. Even as the global energy terrain grew
                increasingly complex over the last fiscal—with crude oil prices
                fluctuating in the range of $75 to $95 per barrel, refining
                margins facing pressure and energy transition
                accelerating—IndianOil held firm. However, the combination of
                fluctuating crude oil prices, narrowing cracks in key
              </p>

              <p>
                fuel products and increased market volatility impacted
                profitability during the year. Yet, our commitment to energize
                every life we touch remained resolute, guiding our efforts
                across every touchpoint.
                <br />
                <br />
                Our efforts have garnered recognition on both national and
                global platforms. Your Company has been ranked 127th in the
                prestigious Fortune Global 500 list of 2025. We were ranked the
                top Indian oil & gas company on the Dow Jones Sustainability
                Indices (DJSI), named among Clarivate’s Top 100 Global
                Innovators 2024—a first for any Indian energy company—and
                recognised as India’s Most Respected Oil & Gas Company by
                Business World. We have also been ranked as the top Oil & Gas
                (PSU) Brand in the country as per Brand Finance in 2024 as well
                as the two preceding years. These accolades reflect not only
                operational excellence but the enduring trust and resilience of
                the IndianOil brand.
              </p>
            </div>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Let me now share an overview of our performance in 2024–25—a year
            that set the foundation for a new era in IndianOil’s journey.
          </p>
          {/* Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Mono Ethylene Glycol (Meg) Unit At Paradip Refinery.webp"
              alt="Paradip Refinery"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Powering Progress */}
          <div>
            <h3 className="text-lg font-semibold text-[#E14E24] mb-4">
              Powering Progress, Strengthening Foundations
            </h3>
            <p className="text-gray-800 leading-relaxed">
              2024–25 was not just another chapter in IndianOil’s journey—it was
              a landmark year of scale, synergy and strategic evolution. For the
              first time ever, your Company’s product sales crossed the 100
              Million Metric Tonne mark, reaffirming IndianOil’s unmatched reach
              across India’s energy ecosystem. We also moved a record 100 MMT
              hydrocarbons through our vast pipeline network and our Group
              Refining throughput reached a record 82.02 MMT clocking a capacity
              utilisation of over 100% with Distillate yield hitting an all-
              time high of 80.6%, Fuel & Loss falling to a five-year best of
              8.8%, a testament to operational discipline and efficiency.
              <br />
              <br />
              In the pipelines segment, 261 Km of new network was commissioned,
              expanding our underground energy highways to over 20,000 Km. While
              crude oil and product pipeline throughput touched record levels,
              gas pipelines registered over 25% year-on-year surge.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section - New Image & Text */}
      <section className="w-full min-h-screen bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* First Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Main-line-lowering-img.webp"
              alt="Mainline Lowering Vijayawada"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Paragraphs - stacked vertically */}
          <div className="text-gray-800 text-base leading-relaxed space-y-8">
            {/* First block */}
            <p>
              Your Company’s petrochemical segment also reached new heights,
              with production of 3.23 MMT and sales (including exports) of 3.24
              MMT—both highest ever. New and improved polymer grades were
              introduced for packaging, automotive and appliance applications,
              supported by 16 OEM approvals from leading brands such as
              Crompton, P&G and Panasonic. The commissioning of a 90 KTA Normal
              Butyl Alcohol plant at Gujarat and record exports to Nepal further
              strengthened this vertical. Our recycled polymer brand,
              CYCLOPLAST, achieved its best-ever annual sales of 220 MT.
              <br />
              <br />
              In the upstream sector, your Company manages a diversified
              portfolio of 25 oil and gas assets—14 in India and 11 overseas,
              with 9 fields currently in production. The production rose to 4.45
              MMT of oil equivalent, with growth fuelled by the start of CBM gas
              production in Jharkhand and enhanced output from overseas assets
              in Canada. New hydrocarbon discoveries in Abu Dhabi’s Onshore
              Block 1, the lifting of Force Majeure in Libya, acquisition of
              Mercator Petroleum in the Cambay Basin and continued dividend
              income from stakes in UAE and Russian assets added further
              strength.
            </p>

            {/* Fuelling India Everyday */}
            <div>
              <h3 className="text-lg font-semibold text-[#E14E24] mb-4">
                Fuelling India Everyday
              </h3>
              <p>
                2024–25 was a year of unparalleled reach, innovation and impact
                for your Company—fuelling the nation while deeply engaging with
                every customer. Once again, your Company broke new ground,
                registering record sales of 84.96 MMT of Petroleum Products
                (excluding LNG) domestically, capturing 41.52% market share
                through 63,000+ touchpoints across the country.
                <br />
                <br />
                A massive network expansion saw 2,823 new Retail Outlets, 350
                CNG stations and 40 CBG stations come online, taking the total
                to 40,221 ROs, 2,437 CNG outlets and 125 CBG centres, ensuring
                that no area remains off-grid. This commitment to customer
                convenience was matched with sustainability as 4,227 additional
                outlets were solarised during the year, bringing the total to
                35,874 (89.2% of the network) and generating over 222.42 GWh of
                power. Electric mobility infrastructure also grew significantly,
                with the commissioning of 4,526 fast and 130 slow EV
                chargers—raising the total to 13,614 stations and 37
                battery-swapping facilities, reinforcing IndianOil’s leadership
                in low-carbon transport solutions. To transform fuel stations
                into traveller-friendly spaces, your Company commissioned 28 Way
                Side Amenities during 2024-25 taking the total to 68 as on
                31.03.2025. The Company plans to develop 35 such sites during
                2025-26.
                <br />
                <br />
                Your Company progressed decisively under the national Ethanol
                Blending Programme, achieving 17.2% blending in 2024–25. As a
                next step, E20 petrol was rolled out nationally in December
                2024. Biodiesel blending also hit a record 0.52%, highest
                amongst all OMC’s reinforcing IndianOil’s commitment to cleaner
                fuel options.
              </p>
            </div>
          </div>

          {/* Second Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Indianoil Company-img.webp"
              alt="IndianOil Retail Outlet"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Fourth Section - New Image & Text */}
      <section className="w-full min-h-screen bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Paragraphs & First Image */}
          <div className="text-gray-800 text-base leading-relaxed space-y-8">
            <p>
              Your Company enriched its LPG portfolio to enhance user value and
              convenience. Sales reached 15.40 MMT (including exports), growing
              8.6%, with market share of 45.23% in domestic LPG and around 37.5
              Lakh new PMUY activations. Beyond bulk LPG sales hitting 594 TMT,
              your Company achieved record figures with niche variants like
              XtraTej , Chhotu , NANOCUT and launched customer- first
              innovations like XtraBoost (nano-additized AutoLPG, offers up to
              3% higher fuel efficiency, 4.5% more power and faster
              acceleration, Your Company enriched its LPG portfolio to enhance
              user value and convenience. Sales reached 15.40 MMT (including
              exports), growing 8.6%, with market share of 45.23% in domestic
              LPG and around 37.5 Lakh new PMUY activations. Beyond bulk LPG
              sales hitting 594 TMT, your Company achieved record figures with
              niche variants like XtraTej , Chhotu , NANOCUT and launched
              customer- first innovations like XtraBoost (nano-additized
              AutoLPG, offers up to 3% higher fuel efficiency, 4.5% more power
              and faster acceleration,
            </p>

            {/* First Image */}
            <div>
              <img
                src="public/iol-images/From the Chairman's Desk/Indianoil Refuelling Defence-img.webp"
                alt="IndianOil Refuelling Defence Aircraft at Trivandrum AFS"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p>
              In aviation fuel, your Company retained leadership with sale of
              5.07 MMT ATF and 54.53% market share, commissioning Aviation Fuel
              Stations in Srinagar and Rewa to take the total to 130. All the
              120 eligible Aviation Fuel Stations earned GreenCo certification,
              with nine attaining Gold status. IndianOil’s global footprint grew
              through exports of AVGAS 100 LL to Indonesia and Bangladesh.
              Support roles in emergency relief during the Wayanad landslide and
              Uttarakhand floods also underscored the IndianOil’s operational
              depth.
            </p>

            <p>
              On the automotive lubricants front, the SERVO continued its
              dominance with record sales of 780 TMT, now present across 45
              countries. This year saw the introduction of a full suite of
              EV-specific lubricants. Your Company launched STORM and STORM X,
              India’s first FIM Category 2 racing fuels and made waves as the
              ‘Official Fuel Partner’ for these racing events for three years,
              till 2026, placing India on the global motorsport map.
            </p>

            <p>
              The natural gas business also scaled new heights with 9.45 MMTPA
              in sales—a 20% increase—accompanied by a 69% rise in spot LNG
              volumes and 186 TMT of Small Scale LNG sales. Expanding its CGD
              footprint, your Company now serves 49 geographical areas across
              115 districts, covering approximately 21% of the country’s
              population and 12% of its geographical area. Strengthening India’s
              gas security, your Company executed a 15-year supply contract with
              ADNOC from Ruwais (1 MMTPA) in addition to finalising long-term
              LNG agreements achieved last year: a 10-year deal with
              TotalEnergies (0.8 MMTPA), a 14-year pact with Abu Dhabi Gas
              Liquefaction (1.2 MMTPA),
            </p>
          </div>

          {/* Driving Innovation Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#E14E24] mb-4">
              Driving Innovation, Delivering Value
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              At IndianOil, research and innovation are not abstract pursuits,
              they are powerful enablers of operational excellence, strategic
              differentiation and long-term shareholder value. 2024–25 was a
              landmark year for your Company’s R&D, not only for the scale of
              progress but for its tangible impact on business.
              <br />
              <br />
              During the year, IndianOil was granted 129 new patents, with 73
              new filings, taking the effective patent portfolio to 1,689 and
              the cumulative filings to 1,809, a testament to the depth and
              relevance of our innovation pipeline.
              <br />
              <br />
              The impact of these innovations was felt across the value chain.
              From refining and petrochemicals to clean fuels and pipelines, the
              focus remained sharply aligned with operational efficiency,
              safety, import substitution and sustainability. IndianOil’s
              in-house catalyst technology was deployed successfully across
              multiple refineries, including the IV-IZOMaxCat® at Bongaigaon and
              the i-ZN22® catalyst at Paradip, which outperformed commercial
              benchmarks in polypropylene production. Over 3,800 MT of in-house
              catalyst was supplied during the year, reducing dependence on
              imports and supporting cost-efficient refining operations.
            </p>
          </div>

          {/* Second Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Ev Charging Station-img.webp"
              alt="EV Charging Station at IndianOil’s Heritage Retail Outlet in Anjar, Gujarat"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="w-full min-h-screen bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Text Block */}
          <div className="text-gray-800 text-base leading-relaxed space-y-8">
            <p>
              Your Company’s R&D also played a pivotal role in enhancing
              mobility solutions. It introduced advanced EV lubricants, secured
              58 new OEM approvals and released over 169 new lubricant
              formulations, fortifying IndianOil’s leadership in the evolving
              automotive landscape. Innovations like Propane Plus® and
              XtraBoost®—developed through in-house nanotechnology research have
              benefitted the customers with higher fuel efficiency, lower
              emissions and enhanced performance.
            </p>

            <p>
              In pipeline operations, IndianOil’s R&D made critical
              contributions to asset integrity and safety. The INDScan® iPIG
              tools facilitated the inspection of over 4,500 Km of pipeline
              during the year, enabling predictive maintenance and operational
              continuity. Meanwhile, XtraFlo®, a drag reducing agent developed
              for captive use, has gained industry traction for its ability to
              enhance flow rates while reducing energy consumption.
            </p>

            <p>
              To support India’s green transition, R&D efforts focused on green
              hydrogen, fuel cell technology, 2G ethanol, Sustainable Aviation
              Fuel (SAF) and Carbon Capture, Utilisation & Storage (CCUS). We
              developed the eCO2Sorb, a patented carbon capture solution that
              uses enzymes to enhance efficiency and reduce costs. This
              innovative tech has been successfully demonstrated and is now
              being tested at pilot scale, driving innovation to combat climate
              change. IndianOil also continued work on biofuels, engineered
              yeast and needle coke for electric vehicle batteries, technologies
              that will power India’s energy future while offering new revenue
              streams and margin potential.
            </p>

            <p>
              With an eye on the long term, your Company is setting up a New
              Energy Centre in Faridabad, dedicated to research in alternative
              and renewable energy, corrosion science, synthetic biology and
              nanotechnology. This will complement the existing R&D Centre and
              amplify IndianOil’s transformation into an integrated energy
              company.
            </p>

            {/* First Image */}
            <div>
              <img
                src="public/iol-images/From the Chairman's Desk/Ongoing Research-img.webp"
                alt="Ongoing Research at IndianOil R&D Centre"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* New Age Fuels Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#E14E24] mb-4">
              New Age Fuels: Building a Future-Ready Portfolio
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              Your Company is strategically transitioning from a conventional
              oil and gas entity into a diversified, integrated energy company,
              in step with the evolving global energy landscape. This shift is
              anchored in the development of new-age fuel solutions that will
              define the future of mobility and industry.
            </p>
          </div>

          {/* Second Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Aerial View Of Cbg -img.webp"
              alt="Aerial View of CBG Plant at Gorakhpur"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Final Paragraphs */}
          <div className="text-gray-800 text-base leading-relaxed space-y-6">
            <p>
              A major step in this direction is the plan to establish India’s
              first commercial-scale Sustainable Aviation Fuel (SAF) plant at
              Panipat, with a proposed production capacity of 86.8 TMT per
              annum. This facility will deploy Alcohol-to-Jet (ATJ) technology,
              utilising ethanol to produce low-emission, circular aviation fuel.
              Complementing this, a co-processing SAF unit at Panipat Refinery
              is also under development to produce 735 KTPA of SAF-blended ATF,
              supporting decarbonisation efforts in the aviation sector. In
              parallel, Your Company is exploring multiple SAF pathways, i.e.,
              HEFA, ATJ and sugar-based routes through strategic alliances and
              has partnered with IATA to support the creation of a SAF Registry
              to ensure transparent carbon tracking. Your Company is also
              progressing in the Used Cooking Oil (UCO)-to-SAF pathway,
              commissioning a co-processing facility at Panipat for blended ATF
              and exploring sugar-derived SAF and Green Isoprene. Together,
              these pioneering initiatives not only support India’s
              environmental goals but also secure long-term stakeholder value in
              a carbon- conscious economy.
            </p>
          </div>
        </div>
      </section>

      {/* Sixth Section */}
      <section className="w-full min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* First Paragraphs */}
          <div className="text-gray-800 text-base leading-relaxed space-y-6">
            <p>
              The sale of Compressed Biogas (CBG) reached 8.9 TMT, supported by
              44 commissioned plants under the SATAT scheme. A flagship 100 TPD
              cattle dung-to-CBG plant was commissioned in Gwalior and a 200 TPD
              unit in Gorakhpur is now operational under the ‘IndiGreen’ brand.
            </p>

            <p>
              A cornerstone of this transition is IndianOil’s leadership in
              hydrogen. The Company is setting up India’s largest green hydrogen
              plant of 10 KTA capacity at Panipat. Work is underway to develop
              end-to- end hydrogen infrastructure, including electrolysers
              powered by renewable energy, hydrogen mobility pilots and
              collaborations for fuel cell integration. Your Company is actively
              contributing to the National Green Hydrogen Mission and is
              well-positioned to lead India’s hydrogen economy in the years
              ahead.
            </p>

            <p>
              To institutionalise all the diversification initiatives, Your
              Company has set up a dedicated M&A cell focused on non-traditional
              growth sectors including renewable energy, city gas distribution
              (CGD), battery storage, chemicals and vessel acquisition.
            </p>
          </div>

          {/* Solar Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Solar-powered-img.webp"
              alt="Solar Powered Indane Bottling Plant, Leh"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Renewable Energy Paragraphs */}
          <div className="text-gray-800 text-base leading-relaxed space-y-6">
            <p>
              The renewable energy footprint of your Company now stands at 252.1
              MW, comprising 167.6 MW of wind and 84.5 MW of solar capacity,
              generating 365.72 GWh during the year, which will be a cornerstone
              in achieving our operational Net-Zero ambition. To accelerate this
              transition, your company has incorporated Terra Clean Limited
              (TCL), a wholly owned green energy arm tasked with shaping the
              future of IndianOil’s renewable portfolio. TCL is kicking off with
              1 GW of Renewable Energy projects, with a clear roadmap to scale
              up to 5.3 GW in the coming years. This is not just an investment
              in capacity, it is a commitment to sustainable growth at scale. To
              strengthen this momentum, your company is actively pursuing
              strategic alliances with top-tier solar developers and power
              transmission partners, unlocking new opportunities and synergies
              in the clean energy space.
            </p>

            <p>
              These initiatives are backed by robust sustainability practices.
              Your Company has planted over Seven Lakh trees under the Green
              Credit Programme and initiated the Mangrove 2.0 project in West
              Bengal, one of India’s largest corporate biodiversity initiatives.
              Over ₹56 Crore has been invested in ecological restoration.
              Wastewater reuse now stands at 89% across refineries,
              significantly reducing freshwater withdrawal. Over 5,000 Km of
              pipeline length and over 370 operational sites have been certified
              under GreenCo and Green Building norms.
            </p>
          </div>

          {/* Final Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Chairman With Iocians-img.webp"
              alt="Chairman with IOCians at Paradip Refinery"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Closing Paragraph */}
          <div className="text-gray-800 text-base leading-relaxed">
            <p>
              To achieve its Net-Zero operational emissions goal by 2046, your
              Company has charted a comprehensive roadmap with a planned
              investment of ₹2.5 Lakh Crore. As an environmentally conscious
              organization, your Company systematically measures, manages and
              reports its emissions. The Company’s Scope 1 & 2 emissions for
              2024-25 amount to ~22.53 MMTCO2e. The Company is pursuing a
              multifaceted strategy to reduce its carbon footprint, focusing on
              key areas such as green hydrogen, CBG, renewable energy, energy
              efficiency, tree plantation, carbon capture utilization & storage
              etc.
            </p>
          </div>
        </div>
      </section>

      {/* Seventh Section */}
      <section className="w-full min-h-screen bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* First Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Charting the Road Ahead */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                Charting the Road Ahead: Expansions, Projects & Strategic
                Alliances
              </h2>
              <p className="text-gray-800 leading-relaxed">
                As your Company navigates a rapidly evolving energy ecosystem,
                it remains firmly focused on future-readiness—anchored in
                expansion, integration and strategic alliances that are designed
                to secure long- term value for stakeholders.
              </p>
              <p className="text-gray-800 leading-relaxed">
                To reinforce our core refining strength, we are progressing with
                major capacity augmentation projects. Panipat Refinery Expansion
                to 25 MMTPA, accompanied by a petrochemical integration plan, is
                on track for phased commissioning in 2025–26. Likewise, the
                Gujarat Refinery expansion to 18 MMTPA, integrating a
                Polypropylene unit and a Catalytic Dewaxing Unit (CDWU), will
                enhance value addition in line with domestic demand. At Barauni,
                the expansion to 9 MMTPA is under advanced stages of
                implementation. These upgrades will not only enhance refining
                capabilities but also sharpen our petrochemical footprint,
                reinforcing Forward integration and import substitution.
              </p>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src="public/iol-images/From the Chairman's Desk/Lube Blending-img.webp"
                alt="Lube Blending Plant at Asaoti, Haryana"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Pipeline Projects */}
          <div className="text-gray-800 leading-relaxed space-y-4">
            <p>
              In the pipelines domain, 15 new pipeline projects worth over
              ₹23,000 Crore are under execution, covering crude oil, product,
              gas and dedicated feedstock pipelines for refineries and
              petrochemical units. These include the new Mundra–Panipat Crude
              Oil Pipeline and the Kandla–Gorakhpur LPG Pipeline, among others.
              The new lines will strengthen logistical efficiency, enable
              multi-product flows and future-proof the backbone of India’s fuel
              supply chain.
            </p>
            <p>
              Your Company has also strengthened its regional and international
              collaborations. Two landmark B2B Framework Agreements with Nepal
              Oil Corporation will facilitate cross-border infrastructure
              including extension of the Motihari–Amlekhgunj pipeline to Chitwan
              and a new pipeline from Siliguri to Jhapa apart from greenfield
              Petroleum terminals at Chitwan & Jhapa in Nepal. In the lubricants
              domain, a JV has been formed in Nepal by IndianOil (Mauritius)
              Limited (a Subsidiary) to set up SERVO blending facilities, our
              first manufacturing presence in Nepal. In Bangladesh, we secured
              long- term contracts to supply 140 TMT of petroleum products,
              further cementing IndianOil as a trusted energy partner in the
              subcontinent.
            </p>

            <p>
              With every expansion and alliance, your Company is laying the
              foundation for an agile, diversified and future-ready IndianOil.
            </p>
          </div>

          {/* Capital Deployment Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-orange-600">
              Capital Deployment & Asset Optimisation
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Your Company invested ₹40,374 Crore in projects during 2024–25,
              comprising ₹39,195 Crore on a standalone basis and ₹1,179 Crore
              towards equity in Group Companies. This represented over one-
              fourth of the total CAPEX incurred by PSUs under the Ministry of
              Petroleum & Natural Gas.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Currently, IndianOil is executing more than 160 projects (each
              over ₹5 Crore) with a cumulative outlay exceeding ₹2.6 Lakh Crore.
              These projects span across standalone operations and group
              entities, underscoring a long-term vision to strengthen leadership
              across emerging and core sectors.
            </p>
            <p className="text-gray-800 leading-relaxed">
              To balance the accelerating global energy transition with the
              country’s growing auto fuel demand, your Company has committed
              investments of over ₹1.66 Lakh Crore (approx.) in the next five
              years. These will focus on petrochemicals, natural gas and
              renewable energy, supporting diversification and future readiness.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Recognising the scale of this investment ambition, IndianOil is
              also exploring innovative financing options beyond internal
              accruals and debt. The Company has raised upfront capital through
              initiatives like leasing of dark optical fibre cables and
              securitisation of Service Station License Fees—unlocking value and
              improving cash flow efficiency while maintaining long-term
              sustainability
            </p>

            <p>
              Operating as a Global Treasury Centre, your company’s wholly owned
              subsidiary formed in 2023 at GIFT City, IOC Global Capital
              Management IFSC Limited (IGCMIL) has achieved a landmark feat by
              executing financial transactions worth over USD 500 Million with
              IndianOil’s group entities. With the aim of “Onshoring the
              Offshore Foreign Assets”, IndianOil is leveraging IGCMIL), to
              manage and hold its overseas investments
            </p>
          </div>

          {/* People First Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-orange-600">
              People First: Empowering Our Workforce
            </h2>
            <p className="text-gray-800 leading-relaxed">
              At IndianOil, our people are central to everything we do. During
              2024–25, we undertook meaningful steps to strengthen employee
              welfare, future-proof our talent and uphold dignity across all
              levels of the workforce.
            </p>
            <p className="text-gray-800 leading-relaxed">
              To build future-ready capabilities, IndianOil launched several
              learning initiatives. ‘Nav Urja Nirman’ is shaping leaders in the
              renewables space, while ‘Sopaan’ uses theatre-based training for
              new managers. ‘Eklavya’ encourages self-driven learning via MOOC
              platforms.
            </p>
            <p className="text-gray-800 leading-relaxed">
              IndianOil’s strength also lies in its over 5 Lakh contractual
              personnel, who are the face of the brand across India delivering
              fuel, reaching LPG to homes and serving customers on the ground.
              Their tireless service embodies the IndianOil ethos. The Company
              remains committed to their welfare, ensuring full compliance with
              statutory provisions and instituting social security and
              quality-of-life initiatives.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Whether full-time or contractual, every member of the IndianOil
              family is integral to our growth. As we embrace a transformative
              future, this people-first philosophy ensures our human capital
              remains our greatest strength—and our most enduring advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section className="w-full min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* IOCians Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Iocians - The Energy Of Indianoil-img.webp"
              alt="IOCians - The Energy of IndianOil"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Driving Meaningful Social Impact */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                Driving Meaningful Social Impact
              </h2>
              <p className="text-gray-800 leading-relaxed">
                True to its ethos of “Nation-First,” Your Company continued to
                create meaningful social impact through focused interventions in
                healthcare, education, nutrition, sustainability and community
                empowerment. In 2024–25, IndianOil has spent ₹583 Crore on CSR
                activities, reaffirming its commitment to inclusive and
                equitable national development.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Under the National Tuberculosis Elimination Programme, Your
                Company significantly enhanced diagnostic access across eight
                states benefiting over One Lakh individuals with advanced
                diagnostic tools and nutritional support. In partnership with
                the Government of Karnataka and IISc, IndianOil launched a
                two-year Sickle Cell Anaemia screening initiative “Project
                Chandana” that tested 1.95 Lakh individuals, identifying over
                9,900 positive cases and ensured that specialised healthcare
                reached tribal and underserved regions.
              </p>
              <p className="text-gray-800 leading-relaxed">
                IndianOil also strengthened India’s cancer care ecosystem
                through partnerships with leading institutions such as Tata
                Medical Center and Sir Ganga Ram Hospital. The support extended
                to advanced oncology infrastructure benefiting over one lakh
                patients annually. Simultaneously, the Company supported the
                Pradhan Mantri National Dialysis Programme by deploying 169
                dialysis machines across eight states, facilitating treatment
                for over 50,000 patients.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <img
                src="public/iol-images/From the Chairman's Desk/Indianoil Nutrigardens-img.webp"
                alt="IndianOil Nutrigardens CSR initiative"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-800 leading-relaxed">
              Your Company remained steadfast in supporting children and
              Divyangjan. Project ‘Badhte Kadam’ enabled the treatment and
              rehabilitation of 1,500 children with clubfoot across Assam,
              Odisha and Delhi NCR. Additionally, certified training and
              employment- linked skilling initiatives were extended to empower
              Divyangjan with sustainable livelihoods.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Recognising the urgency of neonatal cardiac care, IndianOil funded
              a dedicated Cardiac ICU at JNMCH Aligarh, enabling over 300 free
              surgeries each year. To advance food and nutritional security,
              Nutri- Gardens were established in 50 government schools and
              extended to over 3,750 rural households, promoting healthy dietary
              practices and community-level sustainability.
            </p>
          </div>

          {/* Sports & Social Reintegration */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-orange-600">
              Building Champions: Sports & Social Reintegration
            </h2>

            {/* Full-width Image */}
            <div>
              <img
                src="public/iol-images/From the Chairman's Desk/Indianoil Sports Scholar-img.webp"
                alt="IndianOil Sports Scholar Aditi Gopichand receiving Arjuna Award 2024"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Text below image */}
            <div>
              <p className="text-gray-800 leading-relaxed">
                These initiatives exemplify IndianOil’s belief that its national
                presence must not only fuel mobility and industry but also
                uplift lives. Through sustained, high-impact CSR efforts, Your
                Company continues to be a trusted partner in India’s inclusive
                development journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ninth Section */}
      <section className="w-full bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Sports Achievements */}
          <div className="space-y-4">
            <p className="text-gray-800 leading-relaxed">
              Your Company has long embraced the transformative power of sports,
              not only as a vehicle for national pride but as a catalyst for
              inclusion, resilience and personal triumph. In 2024–25,
              IndianOil’s commitment to nurturing sporting excellence found
              renewed momentum through pathbreaking initiatives and outstanding
              achievements by our athletes.
            </p>
            <p className="text-gray-800 leading-relaxed">
              IndianOil’s sportspersons made the nation and the Company proud by
              winning 239 medals across premier domestic and international
              championships, including 85 on the global stage. Among these
              laurels were medals at the Asian Games, World Athletics U20
              Championship, Commonwealth Championships, World Weightlifting
              Championship, Asian Wrestling Championship, World University
              Games, World Badminton Senior Championships and World Para
              Athletics Championship. These achievements reaffirm IndianOil’s
              stature as a cradle of sporting talent.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Among the standout achievements, Sheetal Devi, the world’s first
              armless archer and an IndianOil-supported para-athlete, emerged as
              a symbol of resilience and inspiration. Her accolades include
              multiple international medals and recognition by BBC as one of the
              most influential women in the world—a tribute not just to her
              talent, but to the inclusive sporting ecosystem fostered by
              IndianOil.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Our initiatives also bore fruit on the global stage with Project
              Shakti athlete Jyoti Chauhan donning India’s colours at the Paris
              Olympics, marking a proud milestone in IndianOil’s mission to
              nurture young women athletes from underprivileged backgrounds.
              Project Shakti continues to empower talented young women athletes
              by providing access to world-class coaching, infrastructureand
              exposure, reinforcing our belief in sports as a tool for social
              transformation.
            </p>
            <p className="text-gray-800 leading-relaxed">
              2024–25 also saw the impactful launch of IndianOil DivyaShakti,
              supporting 100 promising para-athletes—half of them women—
              furthering our focus on diversity and inclusion. Initiatives like
              Parivartan and Nai Disha expanded their reach to 220 correctional
              homes, using sports as a tool for transformation, rehabilitation
              and hope.
            </p>
            <p className="text-gray-800 leading-relaxed">
              These initiatives are not just about medals, they are about
              building futures, breaking barriers and energising a generation.
              At IndianOil, sports is more than a pursuit—it is a purpose.
            </p>
          </div>

          {/* People / Hockey Players Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Chairman And Functional-img.webp"
              alt="Chairman and Functional Directors with IndianOil Women Hockey Players who won the Asian Championship"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Project SPRINT Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                Fuelling the Future with Purpose: Project SPRINT
              </h2>
              <p className="text-gray-800 leading-relaxed">
                In a world shaped by evolving energy realities, IndianOil is
                advancing with clarity and conviction. Anchored in our core
                values and national responsibility, we are reimagining our
                future through Project SPRINT—a company-wide transformation
                initiative launched on 1st April 2025 to strengthen IndianOil’s
                leadership in a rapidly transitioning energy landscape.
              </p>
              <p className="text-gray-800 leading-relaxed">
                SPRINT focuses on six strategic pillars: Strengthening our Core,
                Propelling Cost Optimisation, Reinforcing Customer-Centricity,
                Integrating Technology and Innovation, Nurturing Talent and
                Leadership and Becoming Transition-Ready. These pillars are
                anchored in a simple yet powerful framework of the 3 Cs—Core,
                Cost, Customer—and 3 Ts—Technology, Talent, Transition.
              </p>
              <p className="text-gray-800 leading-relaxed">
                SPRINT is not merely an exercise in change management. It is a
                structured, future-facing response to the demands of today’s
                dynamic environment and it is set to reshape IndianOil over the
                next 2–3 years.
              </p>
              <p className="text-gray-800 leading-relaxed">
                As we scale capacities, digitise operations, deepen customer
                engagement and lead India’s energy transition, SPRINT will
                remain our compass—guiding us with purpose, powered by people
                and committed to delivering long-term value for all
                stakeholders.
              </p>
              <p className="text-gray-800 leading-relaxed">
                In a future defined by sustainability, technology and global
                collaboration, we move ahead with humility—and with the
                confidence that IndianOil is on the right path.
              </p>
              <p className="text-gray-800 leading-relaxed">
                I once again thank all shareholders as your trust remains our
                greatest asset, fuelling our ambition and inspiring us to uphold
                the highest standards.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Together, let us continue to energise India—not just for today,
                but for generations to come.
              </p>
              <p className="text-orange-600 font-semibold">
                Sd/-
                <br />A S Sahney
                <br />
                Chairman
              </p>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src="public/iol-images/From the Chairman's Desk/Sprint-logo-img.webp"
                alt="Project SPRINT - A Transformational Project"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tenth Section */}
      <section className="w-full bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          {/* Main Image */}
          <div>
            <img
              src="public/iol-images/From the Chairman's Desk/Serving-every-mile.webp"
              alt="Serving Every Mile, Every Day for a Nation Always on the Move"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Bullet Points */}
          {/* Bullet Points */}
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-2 leading-relaxed text-left mx-auto max-w-3xl">
              <li className="[&::marker]:text-orange-600">
                IndianOil owns and operates 10 group Refineries with a refining
                capacity of 80.75 MMTPA
              </li>
              <li className="[&::marker]:text-orange-600">
                Total pipeline length operated by IndianOil is over 20,000 Km
              </li>
              <li className="[&::marker]:text-orange-600">
                Pipelines throughput of over 100 Million Metric Tonnes per annum
              </li>
              <li className="[&::marker]:text-orange-600">
                Operates over 14,000 Electric Vehicle Charging Stations
              </li>
              <li className="[&::marker]:text-orange-600">
                Product sales of over 100 Million Metric Tonnes per annum
              </li>
              <li className="[&::marker]:text-orange-600">
                Fuelling journeys across the nation with over 40,000 Retail
                Outlets
              </li>
              <li className="[&::marker]:text-orange-600">
                Over 15 Crore kitchens across India trust Indane LPG
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Last Section - Integrated Report */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {/* Background Image */}
        <img
          src="public/iol-images/From the Chairman's Desk/Integrated-reported-img.webp"
          alt="IndianOil Integrated Report"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-end h-full px-6 md:px-16">
          <div className="max-w-xl text-right text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Integrated Report
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              As IndianOil sprints ahead in its journey of value creation, it
              follows an integrated approach, which includes strong governance
              standards, risk management and mitigation, stakeholder engagement
              to identify and address key material issues and above all
              judicious capital allocation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
