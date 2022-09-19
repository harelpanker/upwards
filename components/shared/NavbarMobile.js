import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import Link from 'next/link';
import Image from 'next/future/image';

import Logo from '/public/images/shared/logo.png';

const NavbarMobile = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-slate-50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='absolute z-50 w-full h-full p-5 flex flex-col gap-10'>
                <div className='flex justify-between'>
                  <Link href='/'>
                    <a>
                      <Image src={Logo} height={50} alt='upwards' />
                    </a>
                  </Link>

                  <button
                    onClick={() => closeModal()}
                    type='button'
                    className='text-slate-900'>
                    <svg
                      className='w-7 h-7'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                  </button>
                </div>

                <nav>
                  <ul className='flex flex-col gap-6'>
                    <li>
                      <Link href='/events'>
                        <a
                          title='Events'
                          className='text-base font-medium text-slate-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-slate-900 focus:ring-offset-2'>
                          Events
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div className=' lg:items-center lg:justify-center lg:space-x-10'>
                        <a
                          rel='noopener noreferrer'
                          target='_blank'
                          href='https://forms.gle/uPLrbN6XaKSNwX2Y7'
                          title='Sign in'
                          className='px-5 py-2 text-base font-semibold leading-7 text-slate-900 transition-all duration-200 bg-transparent border border-slate-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white'
                          role='button'>
                          Join us
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NavbarMobile;
