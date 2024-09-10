"use client"

import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/dashboard/Forminput/SubmitButton';

import TextInput from '@/components/dashboard/Forminput/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';

import React , { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Newbrand({initialData={} , isUpdate=false}) {
    const router= useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues:initialData,
      })
      async function onSubmit(data){
        console.log(data);
        if(isUpdate){
        //update Request
        makePutRequest(
            setLoading, 
            `api/brands/${initialData.id}` ,
            data,
            "Brand",
            redirect,
            reset
        )
        }else{
            makePostRequest(setLoading, "api/brands" ,data,"Brand",reset);
        }
      }
      const [loading , setLoading ]= useState(false)
      function redirect(){
        router.push("/inventory-dashboard/inventory/brands")
      }
    return (
    <div>
            {/**Header */}
            <FormHeader title={isUpdate?"Update Brand" :"New Brand"} href="/inventory-dashboard/inventory/brands "/>
            {/**Form */}
        <form 
            onSubmit ={handleSubmit(onSubmit)} 
            className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
            {/* Title */}
        <TextInput 
        Label="Brand Title" 
        name="title"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        
        <SubmitButton isLoading={loading} title ={isUpdate?"Updated Brand" :"New Brand"}/> 
        </form>
    </div>
    )

}