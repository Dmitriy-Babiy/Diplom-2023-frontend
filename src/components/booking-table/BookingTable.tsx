import clsx from 'clsx';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHNAMES } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { DeleteBooking, GetAllBookingsUser, deleteBooking } from '../../redux/slice/BookingsSlice';
import Loader from '../loader/Loader';
import Button from '../ui/button/Button';

function BookingTable() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.session.user);
    const isLoading = useAppSelector((state) => state.bookings.isLoading);
    const bookings = useAppSelector((state) => state.bookings.bookings);

    useEffect(() => {
        if (user && bookings.length == 0) {
            dispatch(GetAllBookingsUser(user?.id));
        }
    }, []);

    const handleCancelBooking = (bookingId: string) => {
        if (confirm('Your sure want to cancel booking?')) {
            dispatch(DeleteBooking(bookingId));
            dispatch(deleteBooking({ bookingId: bookingId }));
        }
    };

    return isLoading ? (
        <Loader typeLoader='PulseLoader' isLoading={isLoading} fullScreen={false} />
    ) : bookings.length > 0 ? (
        <div className='animate-opacity overflow-hidden rounded-md border-x border-t border-white-10 text-left'>
            <table className='border-collapse text-sm'>
                <thead>
                    <tr className='font-medium text-white'>
                        <th className='p-5'>Room</th>
                        <th className='p-5'>Check in date</th>
                        <th className='p-5'>Check out date</th>
                        <th className='p-5'>Price</th>
                        <th className='p-5'>Status</th>
                        <th className='p-5'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((item, index) => (
                        <tr key={index} className='border-y border-white-10'>
                            <td className='p-5 '>
                                <NavLink
                                    className='cursor-pointer text-blue-400 underline-offset-4 hover:underline'
                                    to={`${PATHNAMES.room}/${item.room._id}`}
                                >
                                    {item.room.title}
                                </NavLink>
                            </td>
                            <td className='p-5'>
                                {new Date(item.checkInDate).toLocaleDateString()}
                            </td>
                            <td className='p-5'>
                                {new Date(item.checkOutDate).toLocaleDateString()}
                            </td>
                            <td className='p-5'>{item.price.toFixed(2)}$</td>
                            <td
                                className={clsx(
                                    'p-5',
                                    item.isPayment
                                        ? 'text-project-green-100'
                                        : 'text-project-red-100'
                                )}
                            >
                                {item.isPayment ? 'payment' : 'waiting payment'}
                            </td>
                            <td className='flex gap-4 p-5'>
                                <Button
                                    className='px-2 py-1'
                                    title='Pay'
                                    sizeTitle={14}
                                    rounded
                                    btnType={item.isPayment ? 'disabled' : 'active'}
                                    disabled={item.isPayment}
                                />
                                <Button
                                    onClick={() => handleCancelBooking(item._id)}
                                    btnType='close'
                                    className='px-2 py-1'
                                    title='Cancel'
                                    sizeTitle={14}
                                    rounded
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <div className='animate-opacity text-sm'>You don't have any bookings.</div>
    );
}

export default React.memo(BookingTable);
