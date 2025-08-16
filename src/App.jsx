import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';
import LeadershipTeam from './Pages/LeadershipTeam';
import BoardProfile from './Pages/BoardProfile';
import RiskManagement from './Pages/RiskManagement';
import StakeholderEngagement from './Pages/StakeholderEngagement';
import MaterialityAssessment from './Pages/MaterialityAssessment';
import VCM from './Pages/VCM';
import Fueling from './Pages/Fueling';
import Footer from './Components/Footer';
import FinancialCap from './Pages/FinancialCap';
import SRCap from './Pages/SRCap';
import Intellectualcap from './Pages/Intellectualcap';
import HumanCap from './Pages/HumanCap';
import Awards from './Pages/Awards';
import BOD from './Pages/BOD';
import SeniorExecutives from './Pages/SeniorExecutives';
import MainOffices from './Pages/MainOffices';
import Auditors from './Pages/Auditors';
import GroupCompanies from './Pages/GroupCompanies';
import Performance from './Pages/Performance';
import AboutUs2 from './Pages/AboutUs2';
import OurBusinesses from './Pages/OurBusinesses';
import CompetitiveEdge from './Pages/CompetitiveEdge';
import ChairmansPerspective from './Pages/ChairmansPerspective';
import NaturalCap from './Pages/NaturalCap';
import Governance from './Pages/Governance';
import ManufacturedCap from './Pages/ManufacturedCap';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <NavMenu />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/about-us' element={<AboutUs2 />} />
              <Route path='/our-businesses' element={<OurBusinesses />} />
              <Route path='/competitive-edge' element={<CompetitiveEdge />} />
              <Route path='/from-the-chairman-s-desk' element={<ChairmansPerspective />} />
              <Route path='/governance' element={<Governance />} />
              <Route path='/leadership-team' element={<LeadershipTeam />} />
              <Route path='/board-profile' element={<BoardProfile />} />
              <Route path='/risk-management' element={<RiskManagement />} />
              <Route path='/stakeholder-engagement' element={<StakeholderEngagement />} />
              <Route path='/materiality-assessment' element={<MaterialityAssessment />} />
              <Route path='/indianoil-s-value-creation-model' element={<VCM />} />
              <Route path='/fuelling-sustainable-growth' element={<Fueling />} />
              {/* <Route path='/manufactured-capital' element={<ManufacturedCap />} /> */}
              <Route path='/manufactured-capital' element={<ManufacturedCap />} />
              <Route path='/financial-capital' element={<FinancialCap />} />
              <Route path='/social-relationship-capital' element={<SRCap />} />
              <Route path='/intellectual-capital' element={<Intellectualcap />} />
              <Route path='/human-capital' element={<HumanCap />} />
              <Route path='/natural-capital' element={<NaturalCap />} />
              <Route path='/awards-and-accolades' element={<Awards />} />
              <Route path='/board-of-directors' element={<BOD />} />
              <Route path='/list-of-senior-executives' element={<SeniorExecutives />} />
              <Route path='/main-offices-major-units' element={<MainOffices />} />
              <Route path='/auditors-bankers-rta-etc' element={<Auditors />} />
              <Route path='/group-companies' element={<GroupCompanies />} />
              <Route path='/performance-at-a-glance' element={<Performance />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
