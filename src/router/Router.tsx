import { useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import WrapperOutlet from '../components/outlet';
import { PATHNAMES } from '../consts';
import { AccountPage, HomePage, LoginPage, RegistrationPage, RoomPage } from '../pages';
import AboutPage from '../pages/about-page/AboutPage';
import ContactsPage from '../pages/contacts-page/ContactsPage';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { checkAuth } from '../redux/slice/SessionSlice';

export default function AppRouter() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.session.isLoading);
    const isAuthenticated = useAppSelector((state) => state.session.isAuthenticated);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth());
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader isLoading={isLoading} />
            ) : (
                <Router>
                    <Routes>
                        <Route path={PATHNAMES.home} element={<WrapperOutlet />}>
                            <Route index element={<HomePage />} />
                            <Route path={PATHNAMES.contacts} element={<ContactsPage />} />
                            <Route path={PATHNAMES.about} element={<AboutPage />} />
                            <Route path={`${PATHNAMES.room}/:id`} element={<RoomPage />} />
                            <Route path={PATHNAMES.login} element={isAuthenticated ? <HomePage /> : <LoginPage />} />
                            <Route path={PATHNAMES.registration} element={isAuthenticated ? <HomePage /> : <RegistrationPage />} />
                            <Route path={PATHNAMES.account} element={!isAuthenticated ? <LoginPage /> : <AccountPage />} />
                            <Route path={PATHNAMES.error} element={<Navigate to='/' replace />} />
                        </Route>
                    </Routes>
                </Router>
            )}
        </>
    );
}
