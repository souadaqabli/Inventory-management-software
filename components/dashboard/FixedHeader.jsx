import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


export default function FixedHeader ({newLink, title}){
    return (
        <div className='flex justify-between items-center py-5 px-4 bg-white'>
           <button className='text-2xl'>{title}</button>
           <div className="flex gap-4 ">
            {/**new */}
           <Link 
            href={newLink}
            className='p-1  px-3  rounded-sm bg-blue-500 flex items-center space-x-2 text-white '>
            <Plus className=' w-4 h-4'/>
            <span>New</span>
            </Link>
            {/* layout */}
            <div className="flex rounded-md overflow-hidden">
                <button className='bg-gray-300 p-2 border-r border-gray-400'>
                <List className='w-4 h-4'/>
                </button>
                <button  className='bg-gray-100 p-2'>
                <LayoutGrid  className='w-4 h-4'/>
                </button>
                </div>
             {/* more */}
             <button className='bg-gray-100 p-2 rounded-md'>
                <MoreHorizontal  className='w-4 h-4'/>
             </button>
              {/**help */}
              <button className='bg-orange-400 p-2 text-white rounded-md'>
                <HelpCircle  className='w-5 h-5'/>
              </button>
             </div>
        </div>
       
    )
}