import ReactDOM from 'react-dom/client';
import AppProvider from './AppProvider';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <AppProvider />
  </Provider>
);
