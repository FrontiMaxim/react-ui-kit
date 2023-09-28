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
      
      <button onClick={() => openToastNotification('Операция прошла успешно', 'success', 5000)}>
        Открыть уведомление
      </button>
      <button onClick={() => closeToastNotification()}>
        Закрыть уведомление
      </button>

      <button onClick={() => openModal('Привет :)')}>
        Открыть модальное окно
      </button>
      <button onClick={() => closeModal()}>
        Закрыть модальное окно
      </button>
      <Button 
        value='Кнопка'
        isDisabled={false}
      />
    </div>
  );
}

export default App;