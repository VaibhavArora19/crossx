import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const About = () => {
  const router = useRouter();
  return (
    <section className='min-h-screen bg-[#090909] border-t-[0.5px] border-gray-700 rounded-[100px] '>
      <div className='flex w-[80%] mx-auto mt-20 gap-10'>
        <div className='flex-[0.5]'>
          <div className='h-[550px] rounded-3xl bg-[#7CFEA2] p-10 mb-10 relative overflow-hidden'>
            <p className='text-3xl text-black font-Poppins font-semibold mb-4'>
              Multi chain is fun, eh?{' '}
            </p>
            <p className='text-black font-Poppins text-thin'>
              Tired of managing different address of same contracts over
              multiple chains?
            </p>

            <Image
              src='/about7.svg'
              height={300}
              width={300}
              alt='Create contract'
              className=' mt-3'
            />
          </div>
          <div className='bg-[#121212] h-[300px] rounded-3xl p-10 mb-10  border-[0.5px] border-gray-600'>
            <Image
              src='/about3.svg'
              alt='image'
              height={40}
              width={60}
              className='mb-6'
            />

            <p className='font-semibold font-Poppins text-2xl mb-1 text-white'>
              What you have to do?
            </p>
            <p className='font-thin mb-8 text-white'>
              Just select chains you want to deploy! That's pretty much it 🛸
            </p>

            <p
              onClick={() => {
                router.push('/');
              }}
              className='flex items-center hover:text-[#7CFEA2] cursor-pointer text-white'>
              Deploy here{' '}
              <span>
                <BsArrowRightShort size={25} />
              </span>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[0.5]'>
          <div className='bg-[#121212] h-[300px] rounded-3xl p-8 mb-10  border-[0.5px] border-gray-600'>
            <Image
              src='/about1.svg'
              alt='image'
              height={40}
              width={60}
              className='mb-6'
            />

            <p className='font-semibold font-Poppins text-2xl mb-2 text-white'>
              Use our easy to use CLI to deploy any contract at ease!
            </p>
            <p className='font-thin mb-5 text-white'>
              Use our Deployer to deploy your smartcontracts on not only one but
              multiple chain, that also with
              <strong> only one contract address! </strong>!
            </p>

            <p
              onClick={() => {
                router.push('/');
              }}
              className='flex items-center hover:text-[#7CFEA2] cursor-pointer text-white'>
              Try here{' '}
              <span>
                <BsArrowRightShort size={25} />
              </span>
            </p>
          </div>
          <div className='h-[550px] rounded-3xl bg-[#7CFEA2] p-10 relative'>
            <Image
              src='/about4.svg'
              height={250}
              width={250}
              alt='Create contract'
              className='mt-0 mx-auto mb-10'
            />

            <div className='self-end'>
              <p className='text-3xl text-black font-Poppins font-semibold mb-4 '>
                Select from the wide range of evm chains!{' '}
              </p>
              <p className='text-black font-Poppins text-thin'>
                Our dapp supports almost all the evm chains along with the
                testnet to provide developers an ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='bg-[#121212] h-[300px] rounded-3xl p-10 mb-10  border-[0.5px] border-gray-600 flex flex-col items-center'>
          <Image
            src='/about1.svg'
            alt='image'
            height={40}
            width={60}
            className='mb-10'
          />

          <p className='font-semibold font-Poppins text-2xl mb-1 text-white'>
            Generate single contract address for all the chains you've deployed!
          </p>
          <p className='font-thin mb-8 w-[550px] text-center text-white'>
            Yess you read it right. One address for every fuckin chain out
            there! so why miss the fun? Start deploying today
          </p>

          <p
            onClick={() => {
              router.push('/');
            }}
            className='flex items-center text-white hover:text-[#7CFEA2] cursor-pointer'>
            Try here
            <span>
              <BsArrowRightShort size={25} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
