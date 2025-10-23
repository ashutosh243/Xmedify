import React from 'react'
import Navbar from './component/Navbar';
import Header from './component/Header';
import Hero from './component/Hero';
import Specialisation from './component/Specialisation';
import Specialist from './component/Specialist';
import Carousel  from './component/carousel';
import Patient from './component/Patient';
import Blog from './component/Blog';
import News from './component/News';
import Faq from './component/Faq';
import Appsection from './component/Appsection';
import Footer from './component/Footer';

const App=()=> {

  return(<>
      <div className="container-fluid">
        <Header></Header>
        <Navbar></Navbar>
        <Hero></Hero> 
        <Carousel></Carousel>
        <Specialisation></Specialisation>
        <Specialist></Specialist>
        <Patient></Patient>
        <Blog></Blog>
        <News></News>
        <Faq></Faq>
        <Appsection></Appsection>
        <Footer></Footer>
      </div>
  </>)
}
export default App;