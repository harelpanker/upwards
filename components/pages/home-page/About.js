import Image from 'next/future/image';

import aboutImage from '/public/images/pages/homepage/about.png';

const About = () => {
  return (
    <section className='px-5 py-20 text-center xl:text-left'>
      <div className='container max-w-5xl relative z-10 xl:pt-52 flex flex-col gap-10'>
        <div className='xl:absolute flex xl:items-end xl:inset-0 xl:-top-20 xl:left-auto'>
          <Image src={aboutImage} alt='Shimon and Or' height={340} />
        </div>
        <div className='flex flex-col gap-6 max-w-md'>
          <h2 className='text-4xl xl:text-5xl font-bold'>
            On a mission to unlock creativity.
          </h2>

          <p className='opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            cupiditate possimus eligendi quae, aliquid pariatur eveniet deserunt
            accusantium hic eos totam earum dolores amet sit numquam sunt
            dolorem ea ad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
