
import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header"
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import { useLocation } from 'react-router-dom';

const ProjectPage = () => {
    const params = useLocation();
    console.log(params.pathname)
  return (
    <>
    <Header />
    {/* <Hero /> */}
    <Projects />
    <Footer />
    </>
  )
}

export default ProjectPage