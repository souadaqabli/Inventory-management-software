"use client";
import Link from 'next/link';
import React from 'react';

export default function OptionCard({optionData}) {
    const {title, desc, link , linkTitle , enabled, icon:Icon}= optionData;
    return (


        <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
                    <h2 className='text-xl font-semibold'>{title}</h2>
                    <div className=''>
                        <Icon strokeWidth=".5px" className='w-32 h-32'/>
                    </div>
                    <p className="line-clamp-1">{desc}</p>
                    {enabled?(
                        <Link
                        href={link} 
                        className='py-2  px-3 inline-flex rounded-sm bg-blue-500 items-center space-x-2 text-white '>
                        
                        {linkTitle}
                        </Link>
                    ):(
                        <button className='py-2  px-3  rounded-sm bg-blue-500 inline-flex items-center space-x-2 text-white '>
                        Enable
                    </button> 
                    )}
                    
        </div>
    )
}








