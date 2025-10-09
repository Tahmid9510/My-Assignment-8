import React, { useEffect, useState } from 'react';
import iconDownload from '../assets/iconDownloads.png'
import iconRating from '../assets/iconRatings.png'
import { ToastContainer, toast } from 'react-toastify';

const InstalledApps = () => {
    const formatDownloads = (num)=>{
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num;
    }

    const [installedApps, setInstalledApp] = useState([])
    const [sortOrder, setSetOrder] = useState('none')
    useEffect(() => {
        const installedList = JSON.parse(localStorage.getItem('InstalledApps'))
        if (installedList) setInstalledApp(installedList)
    }, [])

    const sortedItem = (() => {
        if (sortOrder === "size-asc") {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === "size-desc") {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return installedApps
        }
    })()

    const handleRemove = id => {
        const excitingList = JSON.parse(localStorage.getItem('InstalledApps'))
        let updatedList = excitingList.filter(p => p.id !== id)
        setInstalledApp(updatedList)
        localStorage.setItem('InstalledApps', JSON.stringify(updatedList))
        toast("This App Uninstalled Successfully")
    }

    return (
        <div className='my-10 px-6 bg-gray-100'>
            <div className='text-center'>
                <p className='font-bold text-5xl'>Your Installed Apps</p>
                <p className='font-normal text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-2xl'>{sortedItem.length} Apps Found </p>
                </div>
                <div className="">
                    <label className='form-control w-full '>
                        <select className='select select-bordered' value={sortOrder} onChange={e => setSetOrder(e.target.value)}>
                            <option value="none">Sort by Download</option>
                            <option value="size-asc">Low-&gt;High</option>
                            <option value="size-desc">High-&gt;Low</option>
                        </select>
                    </label>
                </div>
            </div>
            <div>

                {sortedItem.map(a => (
                    <div className='bg-white  w-full my-3'>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <div className='p-2'><img className='size-24 rounded-xl' src={a.image} alt="" /></div>
                                <div className='space-y-3 md:mt-5 mt-1'>
                                    <p className='font-medium'>{a.title}</p>
                                    <div className='flex gap-5'>
                                        <div className='flex items-center'>
                                            <img className='size-4' src={iconDownload} alt="" />
                                            <p className='text-[#00D390]'>{formatDownloads(a.downloads)}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <img className='size-4' src={iconRating} alt="" />
                                            <p className='text-[#FF8811]'>{a.ratingAvg}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='text-gray-600'>{a.size} MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleRemove(a.id)} className='btn bg-[#00D390] text-white'>Uninstall</button>
                            </div>
                        </div>

                    </div>
                ))

                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default InstalledApps;