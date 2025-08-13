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

function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <NavMenu/>
          <div className="pt-20"> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/leadership-team' element={<LeadershipTeam />} />
              <Route path='/board-profile' element={<BoardProfile />} />
              <Route path='/risk-management' element={<RiskManagement />} />
              <Route path='/stakeholder-engagement' element={<StakeholderEngagement />} />
              <Route path='/materiality-assessment' element={<MaterialityAssessment />} />
              <Route path='/indianoil-s-value-creation-model' element={<VCM />} />
              <Route path='/fuelling-sustainable-growth' element={<Fueling />} />
            </Routes>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
