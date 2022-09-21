import EventCard from './EventCard';

const EventsList = ({ events }) => {
  return (
    <ul className='grid grid-cols-1 gap-14 xl:grid-cols-3'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
