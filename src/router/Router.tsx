import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WrapperOutlet from '../components/wrapper-uotlet/WrapperOutlet';
import HomePage from '../pages/home-page/HomePage';
import PATHNAMES from '../consts/pathnames';
import RegistrationPage from '../pages/registration-page/RegistrationPage';
import AuthorizationPage from '../pages/authorization-page/AuthorizationPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={PATHNAMES.home} element={<WrapperOutlet />}>
          <Route index element={<HomePage />} />
          <Route path={PATHNAMES.about} element={'AboutUs'} />
          <Route path={PATHNAMES.contacts} element={'Contacts'} />
          <Route path={PATHNAMES.registration} element={<RegistrationPage />} />
          <Route path={PATHNAMES.authorization} element={<AuthorizationPage />} />
          <Route path={PATHNAMES.error} element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
