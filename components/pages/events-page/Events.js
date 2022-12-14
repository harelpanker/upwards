import EventsList from '../../shared/EventsList';

const EventsSection = ({ events }) => {
  return (
    <section className='px-5 pb-20'>
      <div className='container flex flex-col gap-14 items-center'>
        <EventsList events={events} />
      </div>
    </section>
  );
};

export default EventsSection;
