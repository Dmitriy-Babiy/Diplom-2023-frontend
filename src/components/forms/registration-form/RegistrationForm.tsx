import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { PATHNAMES } from '../../../consts';
import { useAppDispatch } from '../../../redux/hooks';
import { Registration } from '../../../redux/slice/SessionSlice';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';

interface IRegistrationFormProps {}

export default function RegistrationForm1({}: IRegistrationFormProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(1, 'Short first name')
                .max(30, 'Long first name')
                .required('First name*'),
            lastName: Yup.string()
                .min(1, 'Short last name')
                .max(30, 'Long last name')
                .required('Last name*'),
            email: Yup.string().email('Invalid email address').required('Email*'),
            password: Yup.string().min(5, 'Short password').required('Password*'),
        }),
        onSubmit: (values) => {
            dispatch(Registration(values));
        },
    });

    const inputStyle =
        'w-full rounded border-[1px] border-solid border-input-border-color bg-transparent px-5 py-3 text-sm text-white focus:border-green-color focus:ring-1 focus:ring-green-color';

    return (
        <form onSubmit={formik.handleSubmit} className='flex justify-center shadow-md'>
            <div className='flex flex-col gap-7 rounded-lg border-[1px] border-solid border-input-border-color bg-background-color-components p-16'>
                <span className='text-center text-5xl font-semibold'>Create account</span>
                <span className='whitespace-pre-wrap text-center'>
                    {'Welcome! Enter your details and\nstart booking right now.'}
                </span>
                <Input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First name'
                    errorMessage={formik.touched.firstName ? formik.errors.firstName : undefined}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    className={inputStyle}
                />
                <Input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last name'
                    errorMessage={formik.touched.lastName ? formik.errors.lastName : undefined}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    className={inputStyle}
                />
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
                    title='Create account'
                    type='submit'
                    size='medium'
                    rounded
                />
                <p className='text-center'>
                    {'Do you have an account? '}
                    <a
                        onClick={() => navigate(PATHNAMES.login)}
                        className='cursor-pointer text-blue-400 underline-offset-4 hover:underline'
                    >
                        Go back
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}
