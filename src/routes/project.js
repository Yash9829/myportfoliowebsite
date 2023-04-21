import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "Projects" text = "Projects that I have done and currently doing" line1 = "1. Currently Working on a MERN stack project you can find that on my git hub" line2 = "2. I have built a sorting algorithm visualizer using HTML, CSS, JavaScript"/>
      <Footer />
    </div>
  )
}

export default Project;