import React from 'react';
import logo from '../assets/logo.png'

const ProfastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="" />
            <p className='-ml-3 font-extrabold text-3xl'>Profast</p>
        </div>
    );
};

export default ProfastLogo;