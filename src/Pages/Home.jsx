import React from 'react'
import Cover from '../Components/Home/Cover'
import AboutHome from '../Components/Home/AboutHome'
import Portfolio from '../Components/Home/Portfolio'
import Message from '../Components/Home/Message'
import Leadership from '../Components/Home/Leadership'
import CapSlider from '../Components/Home/Capslider'

const Home = () => {
    return (
        <div>
            <Cover />
            <div className='marginal'>
                <AboutHome />
            </div>
            <Portfolio />
            <Message />
            <div className='marginal'>
            <Leadership />
            <CapSlider/>
            </div>
        </div>
    )
}

export default Home