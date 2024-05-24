'use client'
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import React from 'react';
import { useFormState } from 'react-dom';
import { handleLoginForm } from './loginAction';
import SvgIcon from '@/components/SvgIcon';
import { IconTypes } from '@/lib/constant';

const LoginPage = () => {
  const [state, action] = useFormState(handleLoginForm,null)

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex justify-center items-center rounded-full size-20 bg-red-100 mb-10'>Icon</div>
      <form action={action} className='flex flex-col justify-center gap-5 w-4/6'>
    
        <FormInput iconComponent={<SvgIcon iconType={IconTypes.user}/>} name='username' placeholder='Username' />
        <FormInput iconComponent={<SvgIcon iconType={IconTypes.password}/>} errors={state?.error ?? []} type='password' name='password' placeholder='Password'/>
        <FormButton/>
        {state === 'OK' &&
          <div className='flex relative'>
              <SvgIcon iconType={IconTypes.check}/>
              <div className='w-full pl-10 font-bold bg-green-400 rounded-full h-10 content-center'>Welcome back!</div>
          </div>}
      </form>
    </div>
  );
};

export default LoginPage;

