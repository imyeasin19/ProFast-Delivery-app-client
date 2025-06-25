import React from 'react';
import Marquee from 'react-fast-marquee';

import logo1 from '../../assets/brands/amazon.png'
import logo2 from '../../assets/brands/amazon_vector.png'
import logo3 from '../../assets/brands/casio.png'
import logo4 from '../../assets/brands/moonstar.png'
import logo5 from '../../assets/brands/randstad.png'
import logo6 from '../../assets/brands/start-people 1.png'
import logo7 from '../../assets/brands/start.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogos = () => {
    return (
        <section className="bg-gray-100 rounded-2xl py-10">
            <h2 className="text-2xl font-bold text-center mb-8">Our Trusted Clients</h2>

            <Marquee
                direction="left"
                speed={50}
                pauseOnHover={true}
                gradient={false}
            >
                {logos.map((logo, index) => (
                    <div key={index} className="mx-8 flex items-center">
                        <img
                            src={logo}
                            alt={`Client ${index + 1}`}
                            className="object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ClientLogos;