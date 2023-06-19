import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { PATHNAMES } from '../../consts';
import { IRoom } from '../../models/IRooms';
import Button from '../ui/button/Button';

interface IReservedRoomCardProps {
    payment?: boolean;
    room?: IRoom;
    checkInDate?: Date;
    checkOutDate?: Date;
    price?: number;
}

export default function ReservedRoomCard(props: IReservedRoomCardProps) {
    const navigate = useNavigate();

    return (
        <div className='flex w-[1000px] items-center justify-between rounded-lg border border-solid border-white-10 p-3'>
            <div>
                <ul className=''>
                    <li>
                        <span className=''>Payment: </span>
                        <span
                            className={clsx(
                                'font-light',
                                props.payment ? 'text-project-green-100' : 'text-project-red-100'
                            )}
                        >
                            {props.payment ? 'Yes' : 'No'}
                        </span>
                    </li>
                    <li>
                        <span>Room: </span>
                        <a
                            onClick={() => navigate(PATHNAMES.registration)}
                            className='cursor-pointer font-light text-blue-400 underline-offset-4 hover:underline'
                        >
                            {props.room?.title}Title room
                        </a>
                    </li>
                    <li>Dates booking: 22.06.2023 - 22.03.2023</li>
                    <li>Price booking: 230.99$</li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <Button title='Pay' size='small' rounded />
                <Button
                    className='text-project-red-100'
                    title='Delete'
                    size='small'
                    btnType='close'
                    outline
                    rounded
                />
            </div>
        </div>
    );
}
