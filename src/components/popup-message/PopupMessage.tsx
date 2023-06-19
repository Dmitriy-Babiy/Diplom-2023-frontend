import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PopupMessage.scss';

export default function PopupMessage() {
    return <ToastContainer className='PopupMessage' style={{ width: 'fit-content' }} />;
}
