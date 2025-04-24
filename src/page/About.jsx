import React from 'react'
import Header from '../components/About/Header'
import Box from '../components/About/Box'
import OurVision from '../components/About/OurVision'
import OurMission from '../components/About/OurMission'
import OurValue from '../components/About/OurValue'
import Blogo from '../components/Home/Blogo'
import Contact from '../components/Home/Contact'

const About = () => {
  return (
    <div>
      <Header />
      <Box />
      <OurVision />
      <OurMission />
      <OurValue />
      <Blogo />
      <Contact />
    </div>
  )
}

export default About