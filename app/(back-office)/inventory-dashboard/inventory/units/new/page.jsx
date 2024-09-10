"use client"

import FormHeader from '@/components/dashboard/FormHeader';
import SubmitButton from '@/components/dashboard/Forminput/SubmitButton';
import TextareaInput from '@/components/dashboard/Forminput/TextareaInput';
import TextInput from '@/components/dashboard/Forminput/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { Plus, X } from 'lucide-react';
import Link from 'next/link';
import React , { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewUnit() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      async function onSubmit(data){
        console.log(data);
        makePostRequest(setLoading, "api/units" ,data,"Unit",reset)
      }
      const [loading , setLoading ]= useState(false)
    return (
    <div>
            {/**Header */}
            <FormHeader title="New Unit" href="/inventory-dashboard/inventory/units"/>
            {/**Form */}
        <form 
            onSubmit ={handleSubmit(onSubmit)} 
            className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6"></div>
            {/* Title */}
        <TextInput 
        Label="Unit Title" 
        name="title"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <TextInput 
        Label="Unit abbreviation" 
        name="abbreviation"  
        register={register}   
        errors={errors} 
        className='w-full'
        />
        <SubmitButton isLoading={loading} title ="Unit"/> 
        </form>
    </div>
    )

}