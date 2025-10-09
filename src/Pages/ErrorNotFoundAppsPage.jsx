import React from 'react';
import notFoundImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const ErrorNotFoundAppsPage = () => {
    return (
         <>
            <div>
                <div className='m-5 flex justify-center items-center'><img src={notFoundImg} alt="" /></div>
                <div className='text-center space-y-8'>
                    <p className='font-semibold text-5xl'>OPPS!! APP NOT FOUND</p>
                    <p className='text-gray-500 text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to='/'><button className='btn mb-10  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button></Link>
                </div>
            </div>

        </>
    );
};

export default ErrorNotFoundAppsPage;