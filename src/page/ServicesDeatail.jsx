import React from 'react'
import Header from '../components/ServicesDetail/Header'
import Benefit from '../components/ServicesDetail/Benefit'
import Help from '../components/ServicesDetail/Help'
import Services from '../components/ServicesDetail/Services'
import Blogo from '../components/Home/Blogo'
import Contact from '../components/Home/Contact'

const ServicesDeatail = () => {
  return (
    <div>
        <Header />
        <Benefit />
        <Help />
        <Services />
        <Blogo />
        <Contact />
    </div>
  )
}

export default ServicesDeatail