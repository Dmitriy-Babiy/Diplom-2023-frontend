import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={Store}>
        <AppRouter />
    </Provider>
);
