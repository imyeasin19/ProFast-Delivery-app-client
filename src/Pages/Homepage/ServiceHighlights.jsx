import React from 'react';
import img1 from '../../assets/live-tracking.png';
import img2 from '../../assets/safe-delivery.png';

const highlights = [
    {
        title: 'Live Parcel Tracking',
        description:
            'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
        image: img1, 
    },
    {
        title: '100% Safe Delivery',
        description:
            'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
        image: img2, 
    },
    {
        title: '24/7 Call Center Support',
        description:
            'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
        image: img2, 
    },
];

const ServiceHighlights = () => {
    return (
        <section className="my-10 border-y border-dashed py-12 px-4 md:px-20">
            <div className="space-y-8">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-40 h-40 object-contain"
                        />
                        <div className="border-l-2 border-dashed border-gray-300 pl-6">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceHighlights;