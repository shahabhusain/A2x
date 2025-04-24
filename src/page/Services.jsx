import React from 'react'
import Header from '../components/Services/Header'
import Serving from '../components/Services/Serving'
import Blogo from '../components/Home/Blogo'
import Contact from '../components/Home/Contact'

const Services = () => {
  return (
    <div>
        <Header />
        <Serving />
          <div className=' mt-[52rem]'>
          <Blogo />
          </div>
        <Contact />
    </div>
  )
}

export default Services