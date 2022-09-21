import React from 'react';

function CTA() {
  return (
    <section className='px-5 py-16 xl:py-48'>
      <div className='container text-center max-w-md xl:max-w-4xl'>
        <h2 className='font-bold text-2xl xl:text-4xl'>
          If you are intrested meeting new people in the communite feel free to
          join us
        </h2>
        <div className='relative inline-flex mt-10 group'>
          <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
          <a
            href='https://forms.gle/uPLrbN6XaKSNwX2Y7'
            title='Join our next meetup'
            rel='noopener noreferrer'
            target='_blank'
            className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900'
            role='button'>
            Join our next meetup
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
