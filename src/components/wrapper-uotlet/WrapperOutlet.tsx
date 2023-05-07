import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function WrapperOutlet() {
  return (
    <div className='flex h-screen  flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
