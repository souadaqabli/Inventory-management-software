"use client"
import Header from '@/components/dashboard/header';
import Sidebar from '@/components/dashboard/Sidebar';
import React, { useState } from 'react';

export default function Layout
({children}) {
    const [showSidebar , setShowSidebar] = useState(false);
    return (
        <div className='flex'>
            <Sidebar showSidebar ={showSidebar} setShowSidebar={setShowSidebar}/>
           <main className=' lg:ml-60 ml-0  w-full bg-slate-100 min-h-screen'>
            <Header setShowSidebar={setShowSidebar}/>
            {children}
           </main>
        </div>
    );
}
