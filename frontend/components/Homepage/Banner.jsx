import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className='h-[80vh] font-Poppins bg-[#7CFEA2] my-40 rounded-t-[90px] flex '>
      <div className='max-w-[570px] mx-auto my-40 flex-[0.6]'>
        <p className='text-black font-bold text-6xl mb-5 leading-[70px]'>
          Deploy Contracts on Multiple chain with{' '}
          <span className='text-[#15341e]'>CLI.</span>
        </p>

        <p className='text-black text-lg'>
          Deploy your smartcontracts on any evm chain and generate single
          address for every chain out there! Sounds exciting right?
        </p>

        <p className='text-black text-lg mt-10'>Lets Get Started :)</p>
      </div>

      <div className='flex-[0.5] relative overflow-hidden'>
        <Image
          src='/circle.svg'
          height={800}
          width={800}
          alt='circle'
          className='absolute -top-28 -right-20 animate-spin-slow animate-spin-extraSlow '
        />

        <Image
          src='/logo.png'
          height={800}
          width={800}
          className='absolute z-10 left-[10%] top-10'
        />
      </div>
    </section>
  );
};

export default Banner;
