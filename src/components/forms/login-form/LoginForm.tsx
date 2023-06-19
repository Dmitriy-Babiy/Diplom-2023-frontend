import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { PATHNAMES } from '../../../consts';
import { useAppDispatch } from '../../../redux/hooks';
import { Login } from '../../../redux/slice/SessionSlice';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';

type IAuthorizationFormProps = {};

export default function LoginForm({}: IAuthorizationFormProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email*'),
            password: Yup.string().required('Password*'),
        }),
        onSubmit: (values) => {
            dispatch(Login(values));
        },
    });

    const inputStyle =
        'w-full rounded border-[1px] border-solid border-input-border-color bg-transparent px-5 py-3 text-sm text-white focus:border-green-color focus:ring-1 focus:ring-green-color';

    return (
        <form onSubmit={formik.handleSubmit} className='flex justify-center shadow-md'>
            <div className='flex flex-col gap-7 rounded-lg border-[1px] border-solid border-input-border-color bg-background-color-components p-16'>
                <span className='text-center text-5xl font-semibold'>{'Sign in to\naccount'}</span>
                <span className='text-center'>{'Please enter your email and password.'}</span>
                <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    errorMessage={formik.touched.email ? formik.errors.email : undefined}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className={inputStyle}
                />
                <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    errorMessage={formik.touched.password ? formik.errors.password : undefined}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className={inputStyle}
                />
                <Button
                    disabled={!(formik.isValid && formik.dirty)}
                    btnType={!(formik.isValid && formik.dirty) ? 'disabled' : 'active'}
                    className='mt-4 text-xl tracking-wide'
                    title='Sign in'
                    type='submit'
                    size='medium'
                    rounded
                />
                <p className='text-center'>
                    {'Your first time at here? '}
                    <a
                        onClick={() => navigate(PATHNAMES.registration)}
                        className='cursor-pointer text-blue-400 underline-offset-4 hover:underline'
                    >
                        Create an account
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}
