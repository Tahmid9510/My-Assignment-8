import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='m-5 flex justify-center items-center'><img src={errorImg} alt="" /></div>
                <div className='text-center space-y-8'>
                    <p className='font-semibold text-5xl'>Oops, page not found!</p>
                    <p className='text-gray-500 text-xl'>The page you are looking for is not available.</p>
                    <Link to='/Apps'><button className='btn mb-10  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;