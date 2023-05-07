import Video from '../../components/video/Video';
import BookingForm from '../../components/booking-form/ConsultationForm';
import Room from '../../components/rooms/Rooms';
import video from '../../assets/video/video.mp4';

type Props = {};

const mockRooms = [
  {
    title: 'Luxury Room',
    price: 100.99,
    image: 'https://i.travelapi.com/hotels/1000000/560000/559700/559629/53430c0c_z.jpg',
    type: 'luxury',
  },
  {
    title: 'Standard Room',
    price: 50.99,
    image: 'https://uploads2.stells.info/storage/jpg/a/b0/ab0fcb318be4f110353940cdbd59f501.jpg',
    type: 'standard',
  },
  {
    title: 'Economy Room',
    price: 20.99,
    image: 'https://avatars.mds.yandex.net/get-altay/1886165/2a0000016dc5344f1c4f0c96315873d9af14/XXL',
    type: 'economy',
  },
];

export default function HomePage({}: Props) {
  return (
    <section>
      <Video title='KRASNOYARSK' video={video} />
      <BookingForm />
      <Room rooms={mockRooms} />
    </section>
  );
}
