import { useAppSelector } from '../../redux/hooks';
import Tabs from '../tabs/Tabs';
import ProfileUser from './profile-user/ProfileUser';

interface IProfileProps {}

export default function Profile(props: IProfileProps) {
    return (
        <div className='w-full min-h-[600px] flex'>
            <Tabs />
        </div>
    );
}
