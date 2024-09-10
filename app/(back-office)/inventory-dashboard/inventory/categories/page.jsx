import DataTable from '@/components/dashboard/DataTable';
import FixedHeader from '@/components/dashboard/FixedHeader';
import { getData } from '@/lib/getData';

import React from 'react';

export default  async function Categories() {
    const categories = await getData("categories")
    
    const columns = ["title","description"]
    return (
        <div>
            {/**Header */}
            <FixedHeader title="Categories" newLink="/inventory-dashboard/inventory/categories/new"/>
            {/**table */}
            <div className='my-4 p-8'>
                <DataTable data={categories} columns={columns}/>
            </div>
            
        
    </div>
    )

}

