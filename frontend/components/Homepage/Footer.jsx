import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full text-white px-20  pb-10'>
      <h2 className='text-3xl font-semibold mb-10'>CrossX.</h2>
      <p className='text-gray-400 mb-4'>
        CrossX is currrently built for Axelarthon and should be used at your own
        risk. We take security seriously and our contracts have been thoroughly
        tested and formally verified but bugs may still exist.
      </p>

      <p className=' text-gray-400 mb-12 font-Poppins'>
        Design is inspired by Synap!
      </p>

      <div className='flex justify-between font-light text-white items-center'>
        <p className='text-sm'>&#169; 2023 CrossX.</p>
      </div>
    </div>
  );
};

export default Footer;
