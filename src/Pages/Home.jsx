import React from 'react';
import GooglePlayImg from '../assets/Gplay.png'
import AppsStoreImg from '../assets/Astore.png'
import HeroImg from '../assets/hero.png'
import { Link } from 'react-router';
import { HiH1 } from 'react-icons/hi2';
import TrendingAppsCard from '../Components/TrendingAppsCard';
import useApps from '../hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    const { apps, loading } = useApps()
    const SliceApps=apps.slice(0, 8)
    
    // console.log(AppsData);
    return (
        <div className='bg-gray-100'>
            <section className='Banner my-10'>
                <div className='text-center'>
                    <p className='font-bold text-5xl my-1.5'>We Build</p>
                    <p className='font-bold text-5xl mb-3'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</p>
                    <p className='text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-center items-center gap-2.5 my-5'>
                    <a href="https://play.google.com/store/games?hl=en&pli=1"><button className='btn'> <img src={GooglePlayImg} alt="" />Google Play</button></a>
                    <a href="https://www.apple.com/app-store/"><button className='btn'><img src={AppsStoreImg} alt="" />App Store</button></a>
                </div>
                <div className='flex justify-center mt-7 mb-0'>
                    <img className='w-[690px]' src={HeroImg} alt="" />
                </div>
                <div className='py-14 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border mt-0 text-white'>
                    <div className='text-center font-semibold text-4xl'><p>Trusted by Millions, Built for You</p></div>
                    <div className='md:flex justify-around'>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <p className='text-gray-200 text-[0.7rem]'>Total Downloads</p>
                            <p className='font-extrabold text-6xl'>29.6M</p>
                            <p className='text-gray-200 text-[0.7rem]'>21% more than last month</p>
                        </div>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <p className='text-gray-200 text-[0.7rem]'>Total Reviews</p>
                            <p className='font-extrabold text-6xl'>906K</p>
                            <p className='text-gray-200 text-[0.7rem]'>46% more than last month</p>
                        </div>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <p className='text-gray-200 text-[0.7rem]'>Active Apps</p>
                            <p className='font-extrabold text-6xl'>132+</p>
                            <p className='text-gray-200 text-[0.7rem]'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </section>


            <section className='Trending'>
                <div className='text-center space-y-4'>
                    <p className='font-bold text-5xl'>Trending Apps</p>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='Trending-card px-5 '>
                    {
                        loading?<LoadingSpinner></LoadingSpinner>:<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto my-9'>
                        {
                            SliceApps.map(app => (
                                <TrendingAppsCard key={app.id} app={app}></TrendingAppsCard>
                            ))
                        }
                    </div>
                    }
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto my-9'>
                        {
                            SliceApps.map(app => (
                                <TrendingAppsCard key={app.id} app={app}></TrendingAppsCard>
                            ))
                        }
                    </div> */}
                </div>
            </section>

            <div className='flex justify-center items-center my-10'>

                <Link to='/Apps'><button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button></Link>
            </div>

        </div>
    );
};

export default Home;