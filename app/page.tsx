'use client'
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { handleLoginForm } from './loginAction';



const IconTypes = {
  user : "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  email:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  password:"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z",
  check:"m4.5 12.75 6 6 9-13.5"
}

const LoginPage = () => {

  const [state, action] = useFormState(handleLoginForm,null)

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex justify-center items-center rounded-full size-20 bg-red-100 mb-10'>Icon</div>
      <form action={action} className='flex flex-col justify-center gap-5 w-4/6'>
        <div className='flex relative'>
            <SvgIcon iconType={IconTypes.email} />
            <FormInput name='email' type='email' placeholder='Email' />
        </div>
        <div className='flex relative'>
            <SvgIcon iconType={IconTypes.user}/>
            <FormInput name='username' placeholder='Username' />
        </div>
        <div className='flex relative'>
            <SvgIcon iconType={IconTypes.password}/>
            <FormInput errors={state?.error ?? []} type='password' name='password' placeholder='Password' />
        </div>
       <FormButton/>
       { state === 'OK' &&
          <div className='flex relative'>
              <SvgIcon iconType={IconTypes.check}/>
              <div className='w-full pl-10 font-bold bg-green-400 rounded-full h-10 content-center'>Welcome back!</div>
          </div>
       }
      </form>
    </div>
  );
};

export default LoginPage;

const SvgIcon = ({iconType}:{iconType:string}) =>{
  return <div className='absolute left-0 top-1/2 z-10 transform -translate-y-1/2 ml-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d={iconType} />
  </svg>
    </div>
}