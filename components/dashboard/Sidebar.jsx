"use client"
import { BaggageClaim, Cable, ChartNoAxesColumnIncreasing, ChevronLeft, CirclePlus, Folder, Home, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink';
import CollapsibleDropdownLink from './CollapsibleDropdownLink';
  

export default function Sidebar ({showSidebar, setShowSidebar}) {
    console.log(showSidebar)
    const inventoryLinks =[
        
        {
            title:"All",
            href: "/inventory-dashboard/inventory",

        },
        {
            title:"Items",
            href: "/inventory-dashboard/inventory/items",

        },
        {
            title:"Categories",
            href: "/inventory-dashboard/inventory/categories",

        },
        {
            title:"Brands",
            href: "/inventory-dashboard/inventory/brands",

        },
        {
            title:"Units",
            href: "/inventory-dashboard/inventory/units",

        },
        {
            title:"Warehouse",
            href: "/inventory-dashboard/inventory/warehouse",

        },
        {
            title:"Inventory Adjustments",
            href: "/inventory-dashboard/inventory/adjustments",

        },
        {
            title:"Supplier",
            href: "/inventory-dashboard/inventory/supplier",

        }
    ];
    const salesLinks =[
        {
            title:"Customers",
            href: "#",

        },
        {
            title:"Sales Order",
            href: "#",

        },
        {
            title:"Packages",
            href: "#",

        },
        {
            title:"Shipments",
            href: "#",

        },
        {
            title:"Invoices",
            href: "#",

        },
        {
            title:"Sales Receipts",
            href: "#",

        },
        {
            title:"Payments Received",
            href: "#",

        },
        {
            title:"Sales Returns",
            href: "#",

        },
        {
            title:"Credit Notes",
            href: "#",

        }
    ]
    return (
        <div className={`${showSidebar? "w-56 min-h-screen bg-slate-800 text-slate-50 fixed lg:block z-50":"w-56 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"}`}>
               {/* Top part  */}
               <div className='flex flex-col'>
                {/* logo  */}
                <div className="flex justify-between">
                <Link href="#" 
                className='bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full'>
                    <ShoppingCart/>
                    <span className=' text-xl font-semibold'>Inventory</span>
                </Link>
                <button className=' bg-slate-950 px-4 py-3 lg:hidden' onClick={()=>setShowSidebar(false)}>
                    <X className = "h-6 w-6 text-white"/>
                </button>
                </div>
               {/* links */}
               <nav className='flex flex-col gap-3 px-3 py-6'>
                <Link  href="#" className='flex items-center space-x-2 bg-blue-500 text-slate-50 p-2 rounded-md'>
                    <Home className='w-4 h-4'/>
                    <span>Home</span>
                </Link>
                <CollapsibleDropdownLink 
                items={inventoryLinks}
                title= "Inventory"
                icon={BaggageClaim}
                setShowSidebar={setShowSidebar}/>

                <CollapsibleDropdownLink 
                items={salesLinks}
                title= "Sales"
                icon={ShoppingBasket}/>

                <button className='flex items-center space-x-2 p-2'>
                    <ShoppingBag className='w-4 h-4'/>
                    <span>Purchases</span>
                </button>

                <Link  href="#" className='flex items-center space-x-2 p-2'>
                    <Cable className='w-4 h-4'/>
                    <span>Integrations</span>
                </Link>
                
                <Link  href="#" className='flex items-center space-x-2 p-2'>
                    <ChartNoAxesColumnIncreasing className='w-4 h-4'/>
                    <span>Reports</span>
                </Link>

                <Link  href="#" className='flex items-center space-x-2 p-2'>
                    <Folder className='w-4 h-4'/>
                    <span>Documents</span>
                </Link>
               </nav>
               </div>
               





               {/* Bottom part  */} 
               <div className='flex flex-col justify-end items-center'>
               <div className=' bg-slate-950 flex space-x-2 items-center py-3 px-2'>
                    <ChevronLeft/>
                    
                </div>

               </div>
               {/* subscription card */}
               {/* footer icon */}
         </div>
    )
}













