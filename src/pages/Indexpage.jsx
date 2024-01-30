import React from 'react'
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from "../Components/Header"
import Hero from '../Components/Hero';
import Process from '../Components/Process';
import Projects from '../Components/Projects';
import Services from "../Components/Services"

const Indexpage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Process />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Indexpage