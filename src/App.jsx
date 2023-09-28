import React from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';

const App = () => {
  return (
    <div className={styles.app}>
      <Button 
        value='Кнопка'
        isDisabled={false}
      />
    </div>
  );
}

export default App;