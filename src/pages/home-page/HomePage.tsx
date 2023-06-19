import Skeleton from 'react-loading-skeleton';
import { ConsultationForm } from '../../components/forms';
import RoomCard from '../../components/room-card/RoomCard';
import Video from '../../components/video/Video';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { getRooms } from '../../redux/slice/RoomsSlice';

type Props = {};

export default function HomePage({}: Props) {
    const rooms = useAppSelector((state) => state.rooms.rooms);
    const isLoading = useAppSelector((state) => state.rooms.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRooms());
    }, []);

    return (
        <section className='animate-opacity'>
            <Video title='KRASNOYARSK'/>
            <ConsultationForm />
            {isLoading ? (
                <div className='mx-auto grid max-w-max grid-cols-3 gap-7 py-12'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            baseColor='#1a1a1a'
                            height={350}
                            width={350}
                            highlightColor='#252525'
                        />
                    ))}
                </div>
            ) : (
                rooms && (
                    <div className='mx-auto grid max-w-max grid-cols-3 gap-7 py-12'>
                        {rooms.map((room, index) => (
                            <RoomCard key={room._id} {...room} />
                        ))}
                    </div>
                )
            )}
        </section>
    );
}
