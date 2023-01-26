import React from 'react'
import BestSellersSection from '../../Components/HomePageComponents/BestSellersSection/BestSellersSection'
import Header from '../../Components/HomePageComponents/Header/Header'
import LatestNewsSection from '../../Components/HomePageComponents/LatestNewsSection/LatestNewsSection'
import TrendingProductSection from '../../Components/HomePageComponents/TrendingProductSection/TrendingProductSection'
import UpTo50Section from '../../Components/HomePageComponents/UpTo50Section/UpTo50Section'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function HomePage() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
  </HelmetProvider>
        <Navbar/>
        <Header/>
        <TrendingProductSection/>
        <UpTo50Section/>
        <BestSellersSection/>
        <LatestNewsSection/>
        <Footer/>
    </>
  )
}

export default HomePage