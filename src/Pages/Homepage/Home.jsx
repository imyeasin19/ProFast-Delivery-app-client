import React from 'react';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import ClientLogos from './ClientLogos';
import ServiceHighlights from './ServiceHighlights';
import Marchent from './Marchent';


const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <ClientLogos></ClientLogos>
            <ServiceHighlights></ServiceHighlights>
            <Marchent></Marchent>
        </div>
    );
};

export default Home;