
import AdjustmentForm from '@/components/dashboard/AdjustmentForm';
import { getData } from '@/lib/getData';

import React  from 'react';
export default async function NewAdjustment() {
    const itemsData =  getData("items")
    const warehousesData = getData("warehouse")


const [items, warehouses] = await Promise.all([itemsData, warehousesData])
    return (
        <AdjustmentForm items={items} warehouse={warehouses}/>
    )

}