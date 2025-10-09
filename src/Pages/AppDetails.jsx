import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import iconDownload from '../assets/iconDownloads.png'
import iconRating from '../assets/iconRatings.png'
import iconReview from '../assets/iconReview.png'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import ErrorNotFoundAppsPage from './ErrorNotFoundAppsPage';
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {

    const [isInstalled, setIsInstalled] = useState(false);
    const { id } = useParams()
    // console.log(params)

    const { apps, loading, } = useApps()
    // console.log(apps)

    const formatDownloads = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num;
    }

    const app = apps.find(p => String(p.id) === id)
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('InstalledApps')) || [];
        const alreadyInstalled = installedApps.some(a => a.id === app?.id);
        setIsInstalled(alreadyInstalled);
    }, [app]);


    // console.log(app)
    if (loading) return <p>Loading.......</p>
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {}
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('InstalledApps')) || [];
        const updatedList = [...installedApps, app];
        localStorage.setItem('InstalledApps', JSON.stringify(updatedList));
        setIsInstalled(true);
        toast("App Installed")
    };

    if (!app) return <ErrorNotFoundAppsPage></ErrorNotFoundAppsPage>
    return (
        <div className=' md:p-8 p-4 my-5 md:my-10 mx-auto w-full  bg-gray-100'>
            <div className='md:flex gap-4 border-b-1  border-gray-300 pb-8'>
                <div className='bg-white p-2 shadow-xl my-5 md:my-0 '>
                    <img className='rounded-xl h-full w-full object-cover' src={image} alt="" />
                </div>
                <div className='w-full mx-auto ml-3'>
                    <div className=' pb-2.5 mb-4 border-b-1  border-gray-300'>
                        <p className='font-bold text-3xl'>{title}</p>
                        <p className='font-normal text-[1rem] text-gray-500'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>
                    <div className='md:flex gap-16 mb-5 space-y-6 '>
                        <div>
                            <img src={iconDownload} alt="" />
                            <p>Downloads</p>
                            <p className='font-extrabold text-4xl'>{formatDownloads(downloads)}</p>
                        </div>
                        <div>
                            <img src={iconRating} alt="" />
                            <p>Average Rating</p>
                            <p className='font-extrabold text-4xl'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={iconReview} alt="" />
                            <p>Total Review</p>
                            <p className='font-extrabold text-4xl'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={()=>{handleInstall()}}
                        disabled={isInstalled} className='btn rounded-xl bg-[#00D390] text-white'>{isInstalled ? "Installed" : `Install Now (${size} MB)`}</button>
                </div>
            </div>
            {/* Ratings Chart Section */}
            <div className="Chart">
                <div className="font-semibold text-2xl my-5">
                    <p>Ratings Chart</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={ratings} layout="vertical">
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF8811" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <p className='font-semibold text-2xl my-5'>Description</p>
                <p className='text-gray-500'>{description}</p>
            </div>
            <ToastContainer />
        </div>

    );
};

export default AppDetails;