import { useNavigate } from 'react-router-dom';
import img from '../../../assets/img/img';
import { SERVER_URL } from '../../../axios';
import { PATHNAMES } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Logout } from '../../../redux/slice/SessionSlice';
import PortalImageEditor from '../../portals/PortalImageEditor';
import Button from '../../ui/button/Button';

export default function ProfileUser() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const avatar = useAppSelector((state) => state.session.user?.avatar);
    const user = useAppSelector((state) => state.session.user);

    const logout = () => {
        if (confirm('Your sure want to leave?')) {
            dispatch(Logout());
            navigate(PATHNAMES.login);
        }
    };

    return (
        <div className='relative flex animate-opacity flex-col items-center justify-center'>
            <img
                className='h-52 w-52 rounded-full bg-background-color-components'
                src={avatar ? SERVER_URL + avatar : img.defaultProfile}
                alt='defaultProfile'
            />

            <div className='mt-3 text-center'>
                <p className='text-2xl font-semibold'>{`${user?.firstName} ${user?.lastName}`}</p>
                <p className='text-xl font-light'>{`${user?.email}`}</p>
            </div>

            <Button
                className='mt-3 w-full text-project-red-100'
                btnType='close'
                onClick={logout}
                title='Exit'
                size='medium'
                rounded
                outline
            />

            <PortalImageEditor />
        </div>
    );
}
