import Image from 'next/future/image';

const Logos = ({ companies }) => {
  return (
    <section className='py-10 sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-2xl font-bold text-slate-800 sm:text-4xl sm:leading-tight'>
            Trusted by world class companies
          </h2>
        </div>

        <ul className='grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16'>
          {companies.map((company) => (
            <li key={company.id}>
              <Image
                className='object-contain w-full h-12 mx-auto grayscale'
                width={company.logo.width}
                height={company.logo.height}
                src={company.logo.url}
                alt={company.companyName}
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
