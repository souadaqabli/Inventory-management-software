
import React from 'react'

export  default function  TextInput ({
    Label ,
    name, 
    Isrequired=true , 
    register, 
    type="text" , 
    className="sm:col-span-2",
    errors,
}) {
  return (
    <div className={className}>
    <label
    htmlFor={name}
    className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
    >
    {Label}
    </label>
    <div className="mt-2">
    <input
      {...register(`${name}`, { required: Isrequired })}
      type={type}
      name={name}
      id={name}
      //defaultValue={}
      autoComplete={name}
      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
      placeholder={`Type the ${Label} `}

    />
    {errors[`${name}`] && (
              <span className="text-sm text-red-600 ">
                {Label} is required
              </span>
            )}
</div> 
</div>
  );
}