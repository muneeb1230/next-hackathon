
import Banner from '@/components/Banner'
import TopCategories from '@/components/Categories'
import Explore from '@/components/Explore'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurProduct from '@/components/OurProduct'
import Partners from '@/components/Partner'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Partners/>
      <Feature/>
      <TopCategories/>
      <Explore/>
      <OurProduct/>
      <Footer/>
      
    </div>
  )
}

export default page