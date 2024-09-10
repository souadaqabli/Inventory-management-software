import DataTable from '@/components/dashboard/DataTable';
import FixedHeader from '@/components/dashboard/FixedHeader';
import { getData } from '@/lib/getData';


import React from 'react';

export default  async function Items() {
    const items = await getData("items")
    
    const columns = ["title", "sellingPrice", "buyingPrice"]
    return (
        <div>
            {/**Header */}
            <FixedHeader title="items" newLink="/inventory-dashboard/inventory/items/new"/>
            {/**table */}
            <div className='my-4 p-8'>
                <DataTable data={items} columns={columns}/>
            </div>
            
        
    </div>
    )

}

