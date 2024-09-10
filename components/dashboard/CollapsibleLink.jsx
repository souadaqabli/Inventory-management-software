import { CirclePlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function  CollapsibleLink ({href , title, setShowSidebar}) {
  return (
    <Link
    className='flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2 rounded-md space-x-3' 
    href={href}
    onClick={()=> setShowSidebar(false)}>
    <span className='text-sm'>{title}</span>
    <CirclePlus className='w-4 h-4' />
</Link>
  );

  
}