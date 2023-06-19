import Profile from '../../components/profile/profile';
import { useAppSelector } from '../../redux/hooks';

interface IAuthorizationFormProps {}

export default function AccountPage({}: IAuthorizationFormProps) {
    return (
        <section className='flex flex-1 animate-opacity px-20 pb-20 pt-[96px]'>
            <Profile />
        </section>
    );
}
