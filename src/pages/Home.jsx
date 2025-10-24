import React from 'react'
import Hero from '../component/Hero';
import Specialisation from '../component/Specialisation';
import Specialist from '../component/Specialist';
import Carousel  from '../component/Carousel';
import Patient from '../component/Patient';
import Blog from '../component/Blog';
import News from '../component/News';
import Faq from '../component/Faq';
import Appsection from '../component/Appsection';
import Footer from '../component/Footer';


const Home = () => {
    return (<>

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

    </>)
}

export default Home