import RoomCard, { roomCardProps } from '../room-card/RoomCard';

interface roomsProps {
  rooms: roomCardProps[];
}

export default function Rooms({ rooms }: roomsProps) {
  return (
    <section className='roomsWrapper'>
      {rooms.map((room) => (
        <RoomCard
          key={room.title}
          title={room.title}
          price={room.price}
          image={room.image}
          type={room.type}
        />
      ))}
    </section>
  );
}
