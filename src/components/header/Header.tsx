import Headroom from 'react-headroom';
import { NavLink, useNavigate } from 'react-router-dom';
import img from '../../assets/img/img';
import { SERVER_URL } from '../../axios';
import { PATHNAMES } from '../../consts';
import { useAppSelector } from '../../redux/hooks';
import Button from '../ui/button/Button';

const Navigations = [
    { title: 'HOME', path: PATHNAMES.home },
    { title: 'ABOUT US', path: PATHNAMES.about },
    { title: 'CONTACTS', path: PATHNAMES.contacts },
];

export default function Header() {
    const navigate = useNavigate();
    const avatar = useAppSelector((state) => state.session.user?.avatar);
    const isAuthenticated = useAppSelector((state) => state.session.isAuthenticated);

    return (
        <Headroom tag='header' className='absolute z-20 w-full'>
            <div className='flex h-[96px] items-center justify-between bg-background-color-components px-12 py-5 shadow-md'>
                <a
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='flex cursor-pointer items-center'
                >
                    <img width={40} height={40} src={img.logo} alt='' />
                </a>
                <ul>
                    {Navigations.map((navigation) => (
                        <NavLink
                            className='ml-10 transition-colors first:ml-0 hover:text-link-color-hover [&.active]:text-link-color-active'
                            key={navigation.path}
                            to={navigation.path}
                        >
                            {navigation.title}
                        </NavLink>
                    ))}
                </ul>

                {isAuthenticated ? (
                    <Button
                        icon={avatar ? SERVER_URL + avatar : img.defaultProfile}
                        iconSize={40}
                        swapIcon
                        className='h-fit overflow-hidden rounded-full bg-project-green-100 px-0 py-0 ring-4 ring-project-green-100'
                        onClick={() => navigate(PATHNAMES.account)}
                    />
                ) : (
                    <Button
                        title='Sign In'
                        size='large'
                        swapIcon
                        rounded
                        onClick={() => navigate(PATHNAMES.login)}
                    />
                )}
            </div>
        </Headroom>
    );
}
