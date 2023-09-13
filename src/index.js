import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ModalProvider from './components/Modal/ModalProvider';

const root = createRoot(document.getElementById('root')); 
root.render(
    <ModalProvider>
        <App/>
    </ModalProvider>
);