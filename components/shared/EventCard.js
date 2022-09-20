import Image from 'next/future/image';

const EventCard = ({ event }) => {
  return (
    <li className='p-4 border border-opacity-20 border-slate-900 rounded flex flex-col gap-4 max-w-[420px]'>
      {/* {console.log(event)} */}
      <Image
        className='rounded w-full max-h-[220px] object-cover'
        src={event.banner.url}
        width={event.banner.width}
        height={event.banner.height}
        alt={event.title}
      />
      <div className='flex flex-col gap-16 justify-between grow'>
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-2xl'>{event.title}</h3>
          <p className='text-sm'>{event.description}</p>
        </div>
        <ul className='flex items-center gap-5 grayscale'>
          {event.companies.map((copmpany) => (
            <li key={copmpany.id} className='max-w-[70px]'>
              {
                <Image
                  src={copmpany.logo.url}
                  height={copmpany.logo.height}
                  width={copmpany.logo.width}
                />
              }
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
// companies [id, logo {height,url,width}]
// dateFreeText
// id
// startDate
// title
export default EventCard;
