import React from 'react';
import { Link } from 'react-router';
import iconDownload from '../assets/iconDownloads.png'
import iconRating from '../assets/iconRatings.png'

const TrendingAppsCard = ({ app }) => {
    const { title, image, ratingAvg, downloads,id } = app
    const formatDownloads = (num)=>{
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num;
    }
    return (
        
        <Link to={`/AppDetails/${id}`}><div className=' p-4 bg-white shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2 '>
            <img className='w-full object-cover rounded-xl' src={image} alt="" />
            <p className='text-xl font-medium m-2'>{title}</p>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-2 bg-[#F1F5E8] px-2 py-1 text-[#00D390] rounded-xs'>
                    <img className='size-3.5' src={iconDownload} alt="" />
                    <p>{formatDownloads(downloads)}</p>
                </div>
                <div className='flex justify-center items-center gap-2 px-2 py-1 bg-[#FFF0E1] text-[#FF8811] rounded-xs'>
                    <img className='size-3.5' src={iconRating} alt="" />
                    <p>{ratingAvg}</p>
                </div>


            </div>
        </div></Link>
    );
};

export default TrendingAppsCard;