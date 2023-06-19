import clsx from 'clsx';
import { useFormik } from 'formik';
import { MdClear } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../redux/hooks';
import { ApiAddComment } from '../../../redux/slice/RoomsSlice';
import Button from '../../ui/button/Button';

export default function CommentForm() {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            text: '',
            rating: 5,
        },
        validationSchema: Yup.object({
            text: Yup.string().required('Write comment!'),
        }),
        onSubmit: (values, { resetForm }) => {
            if (id !== undefined) {
                dispatch(
                    ApiAddComment({
                        text: formik.values.text,
                        rating: formik.values.rating,
                        roomId: id,
                    })
                );
            }
            resetForm();
        },
    });

    const handleClear = (event: any) => {
        event.preventDefault();
        formik.setFieldValue('text', '');
        formik.setFieldTouched('text', false);
    };

    return (
        <form
            onSubmit={formik.handleSubmit}
            className='mt-20 w-full resize-none rounded-md border border-solid border-white-10 p-4'
        >
            <textarea
                id='text'
                rows={5}
                onFocus={() => formik.setFieldTouched('text', false)}
                className='w-full resize-none bg-transparent font-light placeholder:text-white-30'
                placeholder='Please, write a comment about the room...'
                value={formik.values.text}
                onBlur={() => {
                    formik.setFieldError('text', undefined);
                }}
                onChange={formik.handleChange}
            />
            <div className='h-[1px] w-full bg-white-10'></div>
            <div className='mt-4 flex items-center justify-between'>
                <StarRatings
                    rating={formik.values.rating}
                    starDimension='16px'
                    starSpacing='2px'
                    starHoverColor='#CFDC40'
                    starRatedColor='#CFDC40'
                    starEmptyColor='#fff'
                    changeRating={(rating) => {
                        formik.setFieldValue('rating', rating);
                    }}
                />

                {formik.touched.text && !formik.isValid && (
                    <div className='font-light text-red-400'>{formik.errors.text}</div>
                )}

                <div className='flex items-center'>
                    {formik.values.text.length > 0 && (
                        <Button
                            btnType='default'
                            className={clsx('mr-5 animate-opacity', {
                                'text-red-400': formik.touched.text && !formik.isValid,
                            })}
                            children={<MdClear className='h-5 w-5 text-white active:scale-90' />}
                            onClick={(event: any) => handleClear(event)}
                        />
                    )}
                    <Button title='Publish' btnType='black' size='medium' type='submit' rounded />
                </div>
            </div>
        </form>
    );
}
