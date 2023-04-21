import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "About Me" text = "I am a BTech 3rd year student currently studying my 6th semester at Indian Institute of Technology, Bhubaneswar "/>
      <Footer />
    </div>
  )
}

export default About