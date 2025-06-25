import React from 'react';
import { FaTruck, FaGlobe, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndo } from 'react-icons/fa';

const services = [
    {
        title: "Express & Standard Delivery",
        description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: <FaTruck className="text-3xl text-green-500" />,
    },
    {
        title: "Nationwide Delivery",
        description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: <FaGlobe className="text-3xl text-green-500" />,
    },
    {
        title: "Fulfillment Solution",
        description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: <FaWarehouse className="text-3xl text-green-500" />,
    },
    {
        title: "Cash on Home Delivery",
        description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description: "Customized corporate services which includes warehouse and inventory management support.",
        icon: <FaBuilding className="text-3xl text-green-500" />,
    },
    {
        title: "Parcel Return",
        description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: <FaUndo className="text-3xl text-green-500" />,
    },
];


const ServicesSection = () => {
    return (
        <section className="bg-[#073B3A] rounded-2xl my-10 py-12 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
                <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className='rounded-xl p-6 text-center bg-white text-black hover:scale-105 transition-all hover:bg-lime-100'
                        >
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                            <p className="text-gray-700 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;