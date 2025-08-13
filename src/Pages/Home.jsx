import React from 'react'
import Cover from '../Components/Home/Cover'
import AboutHome from '../Components/Home/AboutHome'
import Portfolio from '../Components/Home/Portfolio'
import Message from '../Components/Home/Message'

const Home = () => {
  return (
    <div>
        <Cover/>
        <div className='marginal'> 
            <AboutHome/>
        </div>
            <Portfolio/>
            <Message/>
        
    </div>
  )
}

export default Home