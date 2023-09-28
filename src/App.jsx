import React, { useContext } from 'react';
import styles from './App.module.scss';
import { ToastNotificationContext } from './components/ToastNotification/ToastNotificationProvider';
import { ModalContext } from './components/Modal/ModalProvider';
import Button from './components/Button/Button';

const App = () => {

  const { openToastNotification, closeToastNotification } = useContext(ToastNotificationContext);
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <div className={styles.app}>
      
      <Button 
        value=' Открыть уведомление'
        onClick={() => openToastNotification('Операция прошла успешно', 'success', 5000)}
      />
      
      <Button 
        value='Закрыть уведомление'
        onClick={() => closeToastNotification()} 
      />
        
      <Button 
        value='Открыть модальное окно'
        onClick={() => openModal('Привет :)')}
      />  
      
    </div>
  );
}

export default App;