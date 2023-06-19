import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { SERVER_URL } from '../../axios';
import { PATHNAMES } from '../../consts';
import { IRoom } from '../../models/IRooms';
import Button from '../ui/button/Button';

export default function RoomCard(props: IRoom) {
    const navigate = useNavigate();
    const titleImage = props.images[0];
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        if (props.comments.length > 0) {
            const totalRating = props.comments.reduce((total, obj) => total + obj.rating, 0);
            const average = totalRating / props.comments.length;
            setAverageRating(average);
        }
    }, [props.comments]);

    const handleNavigate = () => {
        navigate(`${PATHNAMES.room}/${props._id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='flex h-[350px] w-[350px] flex-col overflow-hidden rounded-md bg-background-color-components shadow-md'>
            <div>
                <img
                    className='h-[200px] w-[350px] object-cover'
                    src={SERVER_URL + titleImage}
                    alt='titleImage'
                />
            </div>
            <div className='flex flex-1 flex-col justify-between px-5 pb-5 pt-2'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-xl font-light'>{props.title}</span>
                        <div className='flex items-end'>
                            <StarRatings
                                rating={averageRating}
                                starDimension='16px'
                                starSpacing='2px'
                                starRatedColor='#CFDC40'
                                starEmptyColor='#fff'
                            />
                            <span className='ml-2 text-sm font-light text-white-50'>
                                {averageRating.toFixed(1)}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='flex items-center text-xl text-project-green-200'>
                            {`${props.price.toFixed(2)}$`}
                        </span>
                    </div>
                </div>

                <div className='flex items-center justify-between '>
                    <p className='text-xs font-light text-white-60'>
                        1 Night, {props.numberOfPersons} Persons
                    </p>
                    <Button
                        size='medium'
                        onClick={() => handleNavigate()}
                        title='More detailed'
                        className='rounded-md'
                    />
                </div>
            </div>
        </div>
    );
}
