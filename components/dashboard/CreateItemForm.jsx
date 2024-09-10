"use client"
import FormHeader from '@/components/dashboard/FormHeader';
import ImageInput from '@/components/dashboard/Forminput/imageinput';
import SelectInput from '@/components/dashboard/Forminput/SelectInput';
import SubmitButton from '@/components/dashboard/Forminput/SubmitButton';
import TextareaInput from '@/components/dashboard/Forminput/TextareaInput';
import TextInput from '@/components/dashboard/Forminput/TextInput';
import { makePostRequest } from '@/lib/apiRequest';


import { Pencil, Plus, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React , { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CreateItemForm({categories, units ,brands , warehouses, suppliers}) {
    const [imageUrl, setImageUrl] = useState("")
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      async function onSubmit(data){
        data.imageUrl= imageUrl;
        console.log(data);
        makePostRequest(setLoading, "api/items" ,data,"Item",reset)
         
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
    Label="Item Title" 
    name="title"  
    register={register}   
    errors={errors} 
    className='w-full'
    />

    <SelectInput  
    name='categoryId'
    label='Select the  Item category'
    register={register}
    options={categories}
    className='w-full'
    />
   
    <TextInput 
    Label="Item SKU" 
    name="Sku"  
    register={register}   
    errors={errors} 
    className='w-full'
    />
    <TextInput 
    Label="Item Barcode" 
    name="Barcode"  
    register={register}   
    errors={errors} 
    //Isrequired='false'
    className='w-full'
    />
    <TextInput 
    Label="Item Quantity" 
    name="Quantity"  
    register={register}   
    errors={errors} 
    className='w-full'
    />
    <SelectInput  
    name='UnitId'
    label='Select the  Item Unit '
    register={register}
    options={units}
    className='w-full'
    />
    <SelectInput  
    name='BrandId'
    label='Select the  Item Brand '
    register={register}
    options={brands}
    className='w-full'
    />
    <TextInput 
    Label="Re-Order Point" 
    name="reorderpoint"  
    register={register}   
    errors={errors} 
    //type='number'
    className='w-full'
    />
    <TextInput 
    Label="Selling Price" 
    name="sellingprice"  
    register={register}   
    errors={errors} 
    type='number'
    className='w-full'
    />
    <TextInput 
    Label="Buying Price" 
    name="buyingprice"  
    register={register}   
    errors={errors} 
    type='number'
    className='w-full'
    />
    <SelectInput  
    name='supplierId'
    label='Select the Item supplier '
    register={register}
    options={suppliers}
    className='w-full'
    />
    <SelectInput  
    name='warehouseId'
    label='Select the  Item warehouse '
    register={register}
    options={warehouses}
    className='w-full'
    />
    <TextInput 
    Label="Item Weight in Kgs" 
    name="weight"  
    register={register}   
    errors={errors} 
    type='number'
    className='w-full'
    />
    <TextInput 
    Label="Item Dimensions in cm(20 x 30 x 100)" 
    name="dimensions"  
    register={register}   
    errors={errors} 
    className="w-full"
    />
     <TextInput 
    Label=" Item Tax Rate in %" 
    name="taxRate"  
    type ='number'
    register={register}   
    errors={errors} 
    className="w-full"
    />
    <TextareaInput 
    label="Item Description" 
    name="description"  
    register={register}   
    errors={errors}
    
    />
    <TextareaInput 
    label="Item Notes" 
    name="notes"  
    register={register}   
    errors={errors}
    />
    <ImageInput Label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
    
    <SubmitButton isLoading={loading} title ="Item"/> 
    </form>
    )

}