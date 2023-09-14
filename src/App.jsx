import React from 'react';

import styles from './App.module.scss';
import ToastNotification from './components/ToastNotification/ToastNotification';

const App = () => {
  return (
    <div className={styles.app}>
      <ToastNotification 
        content='Операция прошла успешно freferferf gtrgerherh fregwrtghrwt ghtrwgh fergwerwg grewgwr' 
        place='right-down'
      />
    </div>
  );
}

export default App;