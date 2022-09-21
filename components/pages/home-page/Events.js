import React from 'react';
import EventsList from '../../shared/EventsList';

const Events = ({ events }) => {
  const reduceArray = events.slice(0, 3);

  return (
    <section className='px-5 py-20 xl:py-32'>
      <div className='container flex flex-col gap-14 items-center'>
        <h2 className='text-4xl xl:text-5xl font-bold text-center'>
          Our events
        </h2>
        <EventsList events={reduceArray} />
      </div>
    </section>
  );
};

export default Events;
