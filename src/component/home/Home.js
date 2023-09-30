import React from 'react'
import Banner from '../banner/Banner'
import Navbar from '../navbar/Navbar'
import Body from '../body/Body'
import How from '../how/How'
import Browse from '../browse/Browse'
import Last from '../last/Last'
import Footer from '../footer/Footer'
import HOme from '../home/Home.css'

const Home = () => {
  return (
    <div className='hom'>
        <Banner />
        <Navbar />
        <Body />
        <How />
        <Browse />
        <Last />
        <Footer />
    </div>
  )
}

export default Home