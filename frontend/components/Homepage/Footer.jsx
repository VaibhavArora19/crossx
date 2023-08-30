import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full text-white px-20 mt-[150px] py-10'>
      <h2 className='text-3xl font-semibold mb-10'>Flowweb.</h2>
      <p className='text-gray-400 mb-4'>
        Flowweb is currrently built for Flow Hackathon S2 and should be used at
        your own risk. We take security seriously and our contracts have been
        thoroughly tested and formally verified but bugs may still exist.
      </p>

      <p className=' text-gray-400 mb-12 font-Poppins'>
        Design is inspired by Synap!
      </p>

      <div className='flex justify-between font-light text-white items-center'>
        <p className='text-sm'>&#169; 2023 Flowweb.</p>
        <ul className='flex gap-8 items-center text-white'>
          <li
            onClick={() => {
              router.push('/');
            }}
            className='cursor-pointer hover:scale-105'>
            Home
          </li>
          <li
            onClick={() => {
              router.push('/explorer');
            }}
            className='cursor-pointer hover:scale-105'>
            Explorer
          </li>
          <li
            onClick={() => {
              router.push('/deploy');
            }}
            className='cursor-pointer hover:scale-105'>
            Deploy
          </li>
          <li
            onClick={() => {
              router.push('/create');
            }}
            className='cursor-pointer hover:scale-105'>
            Create
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
