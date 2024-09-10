import DataTable from '@/components/dashboard/DataTable';
import FixedHeader from '@/components/dashboard/FixedHeader';
import { getData } from '@/lib/getData';


import React from 'react';

export default  async function Warehouse() {
    const warehouses = await getData("warehouse")
    
    const columns = ["title", "location", "description"]
    return (
        <div>
            {/**Header */}
            <FixedHeader title="warehouse" newLink="/inventory-dashboard/inventory/warehouse/new"/>
            {/**table */}
            <div className='my-4 p-8'>
                <DataTable data={warehouses} columns={columns}/>
            </div>
            
        
    </div>
    )

}

