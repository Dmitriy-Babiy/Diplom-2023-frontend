import { useEffect, useState } from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiShower } from 'react-icons/bi';
import { IoMdTv } from 'react-icons/io';
import { TbGlassFull } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import icons from '../../assets/icons/icons';
import Comment from '../../components/comments/Comments';
import CommentForm from '../../components/forms/comment-form/CommentForm';
import Loader from '../../components/loader/Loader';
import Slider from '../../components/slider/Slider';
import Button from '../../components/ui/button/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getActiveRoom } from '../../redux/slice/RoomsSlice';

import 'react-datepicker/dist/react-datepicker.css';

interface IRoomPageProps {}

export default function RoomPage(props: IRoomPageProps) {
    const [averageRating, setAverageRating] = useState(0);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const activeRoom = useAppSelector((state) => state.rooms.activeRoom);
    const isLoading = useAppSelector((state) => state.rooms.isLoadingActiveRoom);

    useEffect(() => {
        if (id) {
            dispatch(getActiveRoom(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (activeRoom && activeRoom.comments.length > 0) {
            const totalRating = activeRoom.comments.reduce((total, obj) => total + obj.rating, 0);
            setAverageRating(totalRating / activeRoom.comments.length);
        }
    }, [activeRoom]);

    return isLoading ? (
        <Loader isLoading={isLoading} />
    ) : (
        activeRoom && (
            <div className='m-auto flex w-[1000px] flex-1 animate-opacity flex-col items-center pt-[96px]'>
                <div className='pt-20'>
                    <div className='relative flex'>
                        <div className='z-10 ml-5 h-[350px] w-[450px] bg-slate-100'>
                            <Slider images={activeRoom.images} />
                        </div>
                        <div className='absolute top-5 h-[350px] w-[450px] bg-background-color-components shadow-md'></div>

                        <div className='ml-[30px] flex w-[500px] flex-col'>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='flex cursor-pointer gap-3'>
                                        <span className='text-2xl font-light leading-6'>
                                            {activeRoom.title}
                                        </span>
                                        <img src={icons.noLike} alt='' />
                                    </div>
                                    <div className='flex items-end'>
                                        <StarRatings
                                            starRatedColor='#CFDC40'
                                            starEmptyColor='#fff'
                                            rating={averageRating}
                                            starDimension='16px'
                                            starSpacing='2px'
                                        />
                                        <span className='ml-2 text-sm font-light text-white-50'>
                                            {`${averageRating.toFixed(1)} (${
                                                activeRoom.comments.length
                                            })`}
                                        </span>
                                    </div>
                                </div>
                                <span className='text-xl text-project-green-200'>
                                    {activeRoom.price.toFixed(2)}$
                                </span>
                            </div>
                            <p className='mt-3 text-sm font-light'>{activeRoom.description}</p>
                            <div className='flex flex-1 items-end justify-between'>
                                <div className='flex gap-4'>
                                    <AiOutlineWifi className='h-8 w-8' />
                                    <IoMdTv className='h-8 w-8' />
                                    <TbGlassFull className='h-8 w-8' />
                                    <BiShower className='h-8 w-8' />
                                </div>

                                <span className='text-sm font-light text-white-60'>
                                    1 night, {activeRoom.numberOfPersons} person
                                </span>
                                <Button
                                    title='Book now'
                                    className='font-light'
                                    size='medium'
                                    rounded
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <CommentForm />

                <div className='mb-5 w-full'>
                    {activeRoom.comments.length > 0 ? (
                        [...activeRoom.comments]
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt).getTime() -
                                    new Date(a.createdAt).getTime()
                            )
                            .map((comment) => (
                                <Comment
                                    key={comment._id}
                                    roomId={activeRoom._id}
                                    commentId={comment._id}
                                    userId={comment.user._id}
                                    createdAt={comment.createdAt}
                                    firstName={comment.user.firstName}
                                    lastName={comment.user.lastName}
                                    rating={comment.rating}
                                    text={comment.text}
                                    avatar={comment.user.avatar ? comment.user.avatar : null}
                                />
                            ))
                    ) : (
                        <p className='mt-5 flex justify-center font-light text-white-60'>
                            You can write the first comment!
                        </p>
                    )}
                </div>
            </div>
        )
    );
}
