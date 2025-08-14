import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';
import Footer from './Components/Footer';
import ManufacturedCap from './Pages/manufacturedCap';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <NavMenu/>
          <div className="pt-20"> 
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/manufactured-capital' element={<ManufacturedCap />} />
            </Routes>
          </div>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
