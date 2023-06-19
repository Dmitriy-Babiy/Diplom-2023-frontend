import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PopupMessage from '../popup-message/PopupMessage';

export default function WrapperOutlet() {
    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <Outlet />
            <Footer />
            <PopupMessage />
        </div>
    );
}
