"use client"
import SelectInput from '@/components/dashboard/Forminput/SelectInput';
import SubmitButton from '@/components/dashboard/Forminput/SubmitButton';
import TextareaInput from '@/components/dashboard/Forminput/TextareaInput';
import TextInput from '@/components/dashboard/Forminput/TextInput';
import { makePostRequest } from '@/lib/apiRequest';


import React , { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TransferInventoryForm({items, warehouses}) {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      async function onSubmit(data){
        console.log(data);
        makePostRequest(setLoading, "api/adjustments/transfer" ,data,"Stock Transfer",reset)
      }
      const [loading , setLoading ]= useState(false)
    return (
        <form 
        onSubmit ={handleSubmit(onSubmit)} 
        className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
        {/* Title */}

    <TextInput 
    Label="Reference Number" 
    name="referenceNumber"  
    register={register}   
    errors={errors} 
    className='w-full'
    />
    <TextInput 
    Label="Enter Quantity of Stock to Transfer" 
    name="transferStockQty"  
    register={register}   
    errors={errors} 
    type= "number"
    className='w-full'
    />
     <SelectInput  
    name='itemId'
    label='Select the item that will be added to the stock'
    register={register}
    options={items}
    className='w-full'
    />
    <SelectInput  
    name='givingWarehouseId'
    label='Select the Warehouse that will give the stock'
    register={register}
    options={warehouses}
    className='w-full'
    />
    <SelectInput  
    name='recievingWarehouseId'
    label='Select the Warehouse that will recieve the stock'
    register={register}
    options={warehouses}
    className='w-full'
    />
    <TextareaInput 
    label="Adjustments Notes" 
    name="notes"  
    register={register}   
    errors={errors}
    className='w-full'
    />

    <SubmitButton isLoading={loading} title ="Adjustments"/> 
    </form>
    )

}