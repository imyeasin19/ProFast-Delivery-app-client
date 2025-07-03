import React from 'react';
import img from '../../assets/location-merchant.png'

const Marchent = () => {
    return (
        <div data-aos="flip-right" className='px-4 md:px-20'>
            <div className=" bg-[#03373D] p-4 md:p-10 bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-2xl mx-auto">
            <div className="hero-content flex flex-col md:flex-row-reverse items-center">
                <img
                    src={img}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-extrabold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-gray-400">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn btn-primary text-black rounded-full p-6">Become a Marchent</button>
                    <button className="ml-4 btn btn-outline text-primary rounded-full p-6">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Marchent;