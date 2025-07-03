import React from 'react';
import img from '../assets/authImage.png'
import { Outlet } from 'react-router';
import ProfastLogo from '../Components/ProfastLogo';

const AuthLayout = () => {
    return (
        <div className='flex min-h-screen'>
            <div className=' flex-1 flex flex-col items-center justify-center'>
                <div className=''>
                    <ProfastLogo></ProfastLogo>
                </div> 
                <div className='w-full max-w-md p-6'>
                    <h2 className='text-3xl font-bold text-center mb-10'>Welcome to Profast</h2>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className=' bg-[#FAFDF0] flex-1 flex items-center justify-center'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default AuthLayout;