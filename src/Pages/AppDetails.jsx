import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import iconDownload from '../assets/iconDownloads.png'
import iconRating from '../assets/iconRatings.png'
import iconReview from '../assets/iconReview.png'

const AppDetails = () => {
    const { id } = useParams()
    // console.log(params)

    const { apps, loading, error } = useApps()
    // console.log(apps)
    const app = apps.find(p => String(p.id) === id)
    console.log(app)
    if (loading) return <p>Loading.......</p>
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app
    return (
        <div className=' md:p-8 my-5 md:my-10 mx-auto w-full flex justify-center items-center md:block bg-gray-100'>
            <div className='md:flex gap-4 border-b-1  border-gray-300 pb-8'>
                <div className='bg-white p-2 shadow-xl my-5 md:my-0 '>
                    <img className='rounded-xl h-full w-full object-cover' src={image} alt="" />
                </div>
                <div className='w-full'>
                    <div className=' pb-2.5 mb-4 border-b-1  border-gray-300'>
                        <p className='font-bold text-3xl'>{title}</p>
                        <p className='font-normal text-[1rem] text-gray-500'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>
                    <div className='md:flex gap-16 mb-5 space-y-6 '>
                        <div>
                            <img src={iconDownload} alt="" />
                            <p>Downloads</p>
                            <p className='font-extrabold text-4xl'>{downloads}</p>
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
                    <button className='btn rounded-xl bg-[#00D390] text-white'>Install Now ({size} MB)</button>
                </div>
            </div>

            <div>
                <p  className='font-semibold text-2xl my-5'>Description</p>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    
    );
};

export default AppDetails;