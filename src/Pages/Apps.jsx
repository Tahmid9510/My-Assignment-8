import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import TrendingAppsCard from '../Components/TrendingAppsCard';

const Apps = () => {
    const { apps } = useApps()


    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps
    // console.log(search)
    // console.log(searchedApps)



    return (
        <div>
            <div className='text-center px-7 my-10 mb-4'>
                <p className='font-bold text-5xl my-4'>Our All Applications</p>
                <p className='font-normal text-xl my-4 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between '>
                    <p className='font-semibold text-2xl'>({searchedApps.length})Apps Found</p>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='Trending-card px-5 '>
                {searchedApps.length === 0 ? (
                    <div className='text-center text-gray-500 text-6xl font-semibold my-20'>
                        No App Found
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto my-9'>
                        {
                            searchedApps.map(app => (
                                <TrendingAppsCard key={app.id} app={app}></TrendingAppsCard>
                            ))
                        }
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Apps;