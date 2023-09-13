import React from 'react';
import styles from './Button.module.scss';

const Button = ({ value = ' ', onClick = () => {} }) => {
  return (
    <a className={styles.button} onClick={() => onClick()}>
        {
            value
        }
    </a>
  )
}

export default Button;