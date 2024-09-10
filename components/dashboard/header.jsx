import React from 'react';
import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react';
import SearchInput from './Searchinput'; // Ensure the correct import path
import Image from 'next/image';

export default function Header({setShowSidebar}) {
    
    return (
        <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>
            <button className='lg:hidden' onClick ={()=>setShowSidebar(true)}>
                <AlignJustify className='w-6 h-6'/>
            </button>
            <div className='flex gap-3'>
                {/* Recent activities */}
                <button className='hidden lg:block'>
                    <History className='w-6 h-6' />
                </button>
                {/* Search */}
                <SearchInput />
            </div>
            <div className='items-center gap-3 hidden sm:flex'>

                {/* Plus icon */}
                <div className='pr-2 border-r border-gray-300'>
                <button className='p-1 rounded bg-blue-600'>
                    <Plus className='text-slate-50 w-4 h-4'/>
                </button>
                </div>
                <div className='flex border-r border-gray-300 space-x-2'>
                <button className='p-1 rounded-lg hover:bg-slate-200 ' >
                    <Users className='text-slate-900 w-4 h-4'/>
                </button>
                <button className='p-1 rounded-lg hover:bg-slate-200 ' >
                    <Bell className='text-slate-900 w-4 h-4'/>
                </button>
                <button className='p-1 rounded-lg hover:bg-slate-200 ' >
                    <Settings className='text-slate-900 w-4 h-4'/>
                </button>
                </div>
                {/*  */}
                <div className='flex gap-3'>
                    <button className='flex items-center'>
                        <span>Garat</span>
                    <ChevronDown className='w-4 h-4'/>
                    </button>
                    <button>
                        <Image  
                        src="/user image.jpg"
                        alt="user image" 
                        width={96} 
                        height={96} 
                        className=' w-8 h-8 rounded-full border border-slate-800'/>
                    </button>
                    <button>
                    <LayoutGrid className='w-6 h-6 text-slate-700'/>
                    </button>
                </div>
            </div>
            <button className='lg:hidden'>
                        <Image  
                        src="/user image.jpg"
                        alt="user image" 
                        width={96} 
                        height={96} 
                        className=' w-8 h-8 rounded-full border border-slate-800'/>
            </button>
                {/*  */}
                {/* Additional elements can go here */}

            
        </div>
    );
}
