"use client";
import FixedHeader from '@/components/dashboard/FixedHeader';
import OptionCard from '@/components/dashboard/OptionCard';
import { Boxes, Dices, Diff, Factory, LayoutGrid, LayoutPanelTop,  Scale,  Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Inventory() {
    const OptionCards =[
        {
            title : "Items",
            desc: "Create standalone items and services that you buy and sell",
            link:"/inventory-dashboard/inventory/items/new",
            linkTitle:"New Item",
            enabled:true,
            icon: LayoutGrid,
        },
        {
            title : "Categories",
            desc: "Bundle different items together and sell them as kits",
            link:"/inventory-dashboard/inventory/categories/new",
            linkTitle:"New Category",
            enabled:true,
            icon: LayoutPanelTop,
        },
        {
            title : "Brands",
            desc: "Tweak item prices for specific contacts or transactions",
            link:"/inventory-dashboard/inventory/brands/new",
            linkTitle:"New Brand",
            enabled: true,
            icon: Dices,
        },
        {
            title : "Warehouse",
            desc: "Tweak item prices for specific contacts or transactions",
            link:"/inventory-dashboard/inventory/warehouse/new",
            linkTitle:"New warehouse",
            enabled: true,
            icon: Warehouse,
        },
        {
            title : "Units",
            desc: "Tweak item prices for specific contacts or transactions",
            link:"/inventory-dashboard/inventory/units/new",
            linkTitle:"New Unit",
            enabled: true,
            icon: Scale,
        },
        {
            title : "Suppliers",
            desc: "Tweak item prices for specific contacts or transactions",
            link:"/inventory-dashboard/inventory/supplier/new",
            linkTitle:"New Supplier",
            enabled: true,
            icon: Factory,
        },
        {
            title : "Inventory Adjustments",
            desc: "Transfer Stock from the main warehouse",
            link:"/inventory-dashboard/inventory/adjustments/new",
            linkTitle:"New Adjustments",
            enabled: true,
            icon: Diff,
        },

    ];

    return (
        <div>
            <FixedHeader newLink="/inventory-dashboard/inventory/items/new"/>
            <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 m-6 py-8 px-16 gap-6">
                {
                  OptionCards.map((card ,i)=>{
                    return(
                        <OptionCard key={i}
                        optionData={card}/>
                    )
                  })  
                }
                
            </div>
        </div>
    );
}
