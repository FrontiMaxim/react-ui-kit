import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ModalProvider from './components/Modal/ModalProvider';
import ToastNotificationProvider from './components/ToastNotification/ToastNotificationProvider';

const root = createRoot(document.getElementById('root')); 
root.render(
    <ToastNotificationProvider>
        <ModalProvider>
            <App/>
        </ModalProvider>
    </ToastNotificationProvider>
);