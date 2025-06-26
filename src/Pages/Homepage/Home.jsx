import React from 'react';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import ClientLogos from './ClientLogos';
import ServiceHighlights from './ServiceHighlights';


const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <ClientLogos></ClientLogos>
            <ServiceHighlights></ServiceHighlights>
        </div>
    );
};

export default Home;