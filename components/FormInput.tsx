import React, { InputHTMLAttributes, ReactNode } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconComponent?:ReactNode
    name:string
    placeholder:string
    errors?: string[];
}

const className = 'w-full h-10 pl-10 border rounded-full outline-none ring-1 ring-gray-200 focus:ring-gray-200 focus:ring-offset-2 invalid:ring-red-400 invalid:ring-offset-2'

const FormInput = ({name,placeholder, iconComponent,errors, ...rest}:FormInputProps) => {
    return (
        <div className='w-full relative'>
            <div className='absolute top-5'>{iconComponent}</div>
            <input className={className} {...rest} required name={name} placeholder={placeholder}></input>
            {errors?.map((error, index) => (
                <span key={index} className="text-red-300 font-extralight text-xs">
                    {error}
                </span>
            ))}
        </div>
    );
};

export default FormInput;
