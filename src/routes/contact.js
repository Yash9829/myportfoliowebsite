import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="For any Queries"
        text="fill the below form"
      />
      <Footer />
    </div>
  )
}

export default Contact