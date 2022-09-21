import Link from 'next/link';
import Image from 'next/future/image';

import Logo from '/public/images/shared/logo.png';

const Footer = () => {
  return (
    <footer className='bg-slate-100 px-5 pt-10 pb-5'>
      <div className='container max-w-7xl flex gap-10 flex-col pb-5 xl:flex-row justify-between items-center'>
        <Link href='/'>
          <a className='flex rounded outline-none focus:ring-1 focus:ring-slate-900 focus:ring-offset-2'>
            <Image alt='upward logo' src={Logo} height={50} />
          </a>
        </Link>

        <ul className='flex gap-6'>
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
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://forms.gle/uPLrbN6XaKSNwX2Y7'
              title='Sign in'
              className='text-base font-medium text-slate-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-slate-900 focus:ring-offset-2'
              role='button'>
              Join us
            </a>
          </li>
        </ul>
      </div>

      <div className='container max-w-7xl flex justify-center items-center pt-5 border-t border-slate-300'>
        © {new Date().getFullYear()} Upwards Inc.
      </div>
    </footer>
  );
};

export default Footer;
