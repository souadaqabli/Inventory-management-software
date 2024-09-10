import DataTable from '@/components/dashboard/DataTable';
import FixedHeader from '@/components/dashboard/FixedHeader';
import { getData } from '@/lib/getData';


import React from 'react';

export default  async function Adjustments() {
    const addAdjustmentsData =  getData("adjustments/add")
    const transferAdjustmentsData =  getData("adjustments/transfer")
    const [addAdjustments, transferAdjustments] = await Promise.all([addAdjustmentsData,transferAdjustmentsData ])
    const addcolumns = ["referenceNumber","addStockQty","notes"]
    const transfercolumns = ["referenceNumber","transferStockQty","notes"]
    return (
        <div>
            {/**Header */}
            <FixedHeader title="Adjustments" newLink="/inventory-dashboard/inventory/adjustments/new"/>
            {/**table */}
            <div className='my-4 p-8'>
                <h2 className='py-4 text-xl font-semibold'>Stock Increment Adjustments</h2>
                <DataTable data={addAdjustments} columns={addcolumns}/>
            </div>
            <div className='my-4 p-8'>
                <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustments</h2>
                <DataTable data={transferAdjustments} columns={transfercolumns}/>
            </div>
            
        
    </div>
    )

}

