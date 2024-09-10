"use client"

import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/dashboard/Forminput/SubmitButton';
import TextareaInput from '@/components/dashboard/Forminput/TextareaInput';
import TextInput from '@/components/dashboard/Forminput/TextInput';
import {  makePostRequest } from '@/lib/apiRequest';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function NewSupplier() {
    const selectOptions =[
        { 
            label: "Main",
            value:"main"
        },
        {
            label: "Branch",
            value:"branch"
        }
    ]
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      async function onSubmit(data){
        console.log(data);
        makePostRequest(setLoading, "api/suppliers" ,data,"Supplier",reset)
        
      }
      const [loading , setLoading ]= useState(false)
    return (
    <div>
            {/**Header */}
            <FormHeader title="New Supplier" href="/inventory-dashboard/inventory/supplier"/>
            {/**Form */}
        <form 
            onSubmit ={handleSubmit(onSubmit)} 
            className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
            {/* Title */}
        <TextInput 
        Label="Supplier name" 
        name="title"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Supplier Phone" 
        name="phone"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Supplier Email" 
        name="email"  
        register={register}  
        type='email' 
        errors={errors}
        className='w-full' 
        />
        <TextInput 
        Label="Supplier Adresse" 
        name="adresse"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Supplier Contact Person" 
        name="contactPerson"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Supplier Code" 
        name="supplierCode"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Supplier TID" 
        name="taxID"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextareaInput 
        label="Supplier Payment terms" 
        name="paymentTerms"  
        register={register}   
        errors={errors}
        className='w-full'
        />
        <TextareaInput 
        label="Notes" 
        name="notes"  
        register={register}   
        errors={errors}
        className='w-full'
        />
        <SubmitButton isLoading={loading} title ="supplier"/> 
        </form>
    </div>
    )

}