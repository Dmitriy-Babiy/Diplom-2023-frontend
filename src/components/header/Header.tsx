import { NavLink, useNavigate } from 'react-router-dom';
import icons from '../../assets/icons/icons';
import Button from '../ui/button/Button';
import PATHNAMES from '../../consts/pathnames';

const Navigations = [
  { title: 'Home', path: PATHNAMES.home },
  { title: 'About', path: PATHNAMES.about },
  { title: 'Contacts', path: PATHNAMES.contacts },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className='flex justify-between px-12 py-5'>
        <div className='flex items-center'>
          <img src={icons.logo} alt='' />
          <span className='ml-3'>SIB HOTEL</span>
        </div>

        <div className='flex items-center'>
          <ul className='mr-12'>
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

          <Button
            title='Sing In'
            size='medium'
            icon={icons.user}
            onClick={() => navigate(PATHNAMES.authorization)}
          />
        </div>
      </header>
    </>
  );
}
