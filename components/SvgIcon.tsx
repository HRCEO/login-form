import React from 'react';

const SvgIcon = ({iconType}:{iconType:string}) =>{
    return <div className='absolute left-0 top-1/2 z-10 transform -translate-y-1/2 ml-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d={iconType} />
  </svg>
    </div>
};

export default SvgIcon;
