'use client'
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { SvgIcon } from '@/components/SvgIcon';
import { IconTypes } from '@/lib/constant';
import { handleCreateAccountForm } from '@/service/serverAction/createAccountAction';
import React from 'react';
import { useFormState } from 'react-dom';

const CreateAccountPage = () => {
    const [state, action] = useFormState(handleCreateAccountForm,null)

  return (
    <div className='flex flex-col items-center w-4/6'>
      <div className='flex justify-center items-center rounded-full size-20 bg-red-100 mb-10'>Icon</div>
      <form action={action} className='flex flex-col justify-center gap-5 w-full'>
          <FormInput iconComponent={<SvgIcon iconType={IconTypes.email}/>} errors={state?.fieldErrors.email ?? []} name='email' type='email' placeholder='Email' />
          <FormInput iconComponent={<SvgIcon iconType={IconTypes.user}/>} errors={state?.fieldErrors.username ?? []} name='username' placeholder='Username' />
          <FormInput iconComponent={<SvgIcon iconType={IconTypes.password}/>} errors={state?.fieldErrors.password ?? []} type='password' name='password' placeholder='Password' /> 
          <FormInput iconComponent={<SvgIcon iconType={IconTypes.password}/>} errors={state?.fieldErrors.confirmPassword ?? []} type='password' name='confirmPassword' placeholder='Confirm Password' /> 
          <FormButton text='Submit'/>
      </form>
    
    </div>
  );
   
};

export default CreateAccountPage;