import React from 'react';
import EventsList from '../../pages/events-page/Events';

const Events = ({ events }) => {
  return (
    <section className='px-5 py-20 xl:py-32'>
      <div className='container flex flex-col gap-14 items-center'>
        <EventsList events={events} />
      </div>
    </section>
  );
};

export default Events;
