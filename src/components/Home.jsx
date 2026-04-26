import React from 'react'
import Hero from './Hero'
import Features from './/Features-details'
import About from './About'
import Service from './Service-details'
import Sabout from './Sabout.jsx'
import Choosesection from './Choosesection.jsx'
import Teamsection from './Teamsection'
import Projects from './Projects.jsx'
import Clients from './Clients'
import Blog from './Blog.jsx'
import Delivering from './Delivering.jsx'




const App = () => {
  return (
    <>
        <div class="page-wrapper">
    <Hero/>
    <Features/>
    <About/>
    <Service/>
    <Sabout/>
    <Choosesection/>
    <Teamsection/>
    <Projects/>
    <Clients/>
    <Blog/>
    <Delivering/>

    </div>

    </>

  )
}

export default App