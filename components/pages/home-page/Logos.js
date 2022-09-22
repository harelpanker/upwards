import Image from 'next/future/image';

const Logos = ({ logos }) => {
  return (
    <section className='py-10 sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-slate-800 sm:text-4xl sm:leading-tight'>
            Trusted by world class companies
          </h2>
        </div>

        <ul className='grid max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16'>
          {logos.map((logo) => (
            <li key={logo.id} className='flex justify-center'>
              <Image
                className='object-contain h-12 grayscale'
                width={logo.logo.width}
                height={logo.logo.height}
                src={logo.logo.url}
                alt={logo.companyName}
              />
            </li>
          ))}
        </ul>

        <p className='mt-10 text-base text-center text-slate-500 md:mt-20'>
          and, 1000+ more companies
        </p>
      </div>
    </section>
  );
};

export default Logos;
