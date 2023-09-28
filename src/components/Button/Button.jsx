import React from 'react';
import styles from './Button.module.scss';

const Button = ({ value = ' ', onClick = () => {}, isDisabled = false }) => {
  return (
    <button 
      className={styles.button} 
      onClick={() => onClick()}
      disabled={isDisabled}
    >
        {
            value
        }
    </button>
  )
}

export default Button;