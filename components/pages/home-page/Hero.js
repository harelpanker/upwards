import Image from 'next/future/image';
import placeholder from '/public/images/pages/homepage/placeholder.png';

const Hero = () => {
  return (
    <div className='overflow-x-hidden bg-slate-50'>
      <section className='relative py-12 sm:py-16 lg:pt-20 xl:pb-0'>
        <div className='relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='inline-flex px-4 py-2 text-xs xl:text-base text-slate-900 border border-slate-200 rounded-full font-pj'>
              Made by Developers, for Developers
            </p>
            <h1 className='mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj'>
              We Are Upwards an meetup community
            </h1>
            <p className='max-w-md mx-auto mt-6 text-base leading-7 text-slate-600 font-inter'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

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
        </div>
        <div className='mt-16 md:mt-20'>
          <Image
            priority
            className='object-cover object-top w-full h-auto mx-auto scale-150 xl:scale-100'
            src={placeholder}
            alt=''
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
