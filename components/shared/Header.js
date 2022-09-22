import { useState, useEffect, useCallback } from 'react';

import Link from 'next/link';
import Image from 'next/future/image';

import Logo from '/public/images/shared/logo.png';
import NavbarMobile from './NavbarMobile';

const scrollOffset = 100;
const trackScroll = true;

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [hasScrolled, setHasScrolled] = useState(!trackScroll);

  const checkScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > scrollOffset) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    },
    [scrollOffset]
  );

  useEffect(() => {
    // track events only if requested
    if (trackScroll) {
      window.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }
  }, [checkScroll, trackScroll]);

  return (
    <header
      className={`sticky top-0 transi duration-700 bg-slate-50 z-50 ${
        hasScrolled ? 'shadow-md py-4' : 'py-6'
      }`}>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <Link href='/'>
            <a title='logo'>
              <Image alt='Upward logo' src={Logo} height={50} />
            </a>
          </Link>

          <div className='flex lg:hidden'>
            <button
              type='button'
              className='text-slate-900'
              onClick={() => openModal()}>
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

          <div className='hidden lg:flex lg:gap-6'>
            <Link href='/events'>
              <a
                title='Events'
                className='text-base font-medium text-slate-900 transition-all duration-200 hover:text-opacity-70'>
                Events
              </a>
            </Link>

            <div className=' lg:items-center lg:justify-center lg:space-x-10'>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://forms.gle/uPLrbN6XaKSNwX2Y7'
                title='Sign in'
                className='px-6 py-3 text-base font-semibold leading-7 text-slate-900 transition-all duration-300 bg-transparent border border-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white'
                role='button'>
                Join us
              </a>
            </div>
          </div>
        </div>
      </div>
      <NavbarMobile isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;
