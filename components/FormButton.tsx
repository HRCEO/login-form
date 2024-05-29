"use client"
import React from 'react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps { 
    text:string
}

const FormButton = ({text}:FormButtonProps) => {
    const {pending} = useFormStatus()
    return (
     <button disabled={pending} className='mt-3 h-10 border rounded-full w-full outline-none ring-1 ring-gray-200 font-bold bg-gray-100'>{pending ?'Loading...' : text}</button>
    );
};

export default FormButton;