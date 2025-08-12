import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavMenu from './Components/NavMenu';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <NavMenu/>
          <div className="pt-20"> 
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
