import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-20 mx-auto font-Poppins bg-black'>
      <p
        className='text-3xl font-semibold font-Poppins text-white
      '>
        FW.
      </p>

      <button className='bg-white py-2  px-10 text-black rounded-full hover:bg-[#7CFEA2] '>
        View package
      </button>
    </div>
  );
};

export default Navbar;
