import { LuEdit } from 'react-icons/lu';
import { RiDeleteBin2Line } from 'react-icons/ri';
import StarRatings from 'react-star-ratings';
import img from '../../assets/img/img';
import { SERVER_URL } from '../../axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ApiDeleteComment, deleteComment } from '../../redux/slice/RoomsSlice';

interface ICommentsProps {
    userId: string;
    roomId: string;
    commentId: string;
    avatar: string | null;
    firstName: string;
    lastName: string;
    rating: number;
    createdAt: string;
    text: string;
}

export default function Comment(props: ICommentsProps) {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.session.user);

    const date = new Date(props.createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}.${
        month < 10 ? '0' + month : month
    }.${year}`;

    const handleDeleteComment = () => {
        dispatch(ApiDeleteComment({ commentId: props.commentId, roomID: props.roomId }));
        dispatch(deleteComment({ commentId: props.commentId }));
    };

    return (
        <div className='mt-5 animate-opacity'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img
                        className='mr-3 h-10 w-10 rounded-full bg-background-color-components'
                        src={props.avatar ? SERVER_URL + props.avatar : img.defaultProfile}
                        alt='defaultProfile'
                    />
                    <div>
                        <div className='flex items-end'>
                            <div className='mr-2 text-sm'>{`${props.firstName} ${props.lastName}`}</div>
                            <StarRatings
                                starRatedColor='#CFDC40'
                                starEmptyColor='#fff'
                                rating={props.rating}
                                starDimension='12px'
                                starSpacing='0px'
                            />
                        </div>
                        <span className='text-xs text-white-50'>{formattedDate}</span>
                    </div>
                </div>
                {user?.id == props.userId && (
                    <div className='flex gap-2'>
                        <LuEdit className='h-5 w-5 cursor-pointer transition-all hover:text-blue-400 active:scale-90' />
                        <RiDeleteBin2Line
                            onClick={handleDeleteComment}
                            className='h-5 w-5 cursor-pointer transition-all hover:text-red-400 active:scale-90'
                        />
                    </div>
                )}
            </div>
            <p className='text-sm ml-[52px]'>{props.text}</p>
        </div>
        
    );
}
