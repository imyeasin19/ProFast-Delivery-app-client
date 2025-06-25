import React from 'react';
import Banner from './Banner';
import ServicesSection from './ServicesSection';
import ClientLogos from './ClientLogos';


const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <ClientLogos></ClientLogos>
        </div>
    );
};

export default Home;