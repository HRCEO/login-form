import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string
    placeholder:string
    errors?: string[];
}

const className = 'w-full h-10 pl-10 border rounded-full outline-none ring-1 ring-gray-200 focus:ring-gray-200 focus:ring-offset-2 invalid:ring-red-400 invalid:ring-offset-2'

const FormInput = ({name,placeholder, errors, ...rest}:FormInputProps) => {
    return (
        <div className='w-full relative'>
            <input className={className} {...rest} required name={name} placeholder={placeholder}></input>
            <div className='absolute'>
            {errors?.map((error, index) => (
                <span key={index} className="text-red-200 font-medium">
                    {error}
                </span>
            ))}
            </div>
        </div>
    );
};

export default FormInput;