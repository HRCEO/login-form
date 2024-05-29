import Link from 'next/link';
import React from 'react';

const RootPage = () => {
    return (
        <div className='flex flex-col items-center gap-4 w-2/5 h-full py-10'>
            <div className='flex h-full items-center text-white'>Root Page</div>
            <Link className='flex bg-orange-400 rounded-lg font-normal text-white justify-center items-center p-4 w-full' href={'/log-in'}>Login</Link>
        </div>
    );
};

export default RootPage;
