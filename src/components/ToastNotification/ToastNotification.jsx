import React from 'react';
import styles from './ToastNotification.module.scss';
import cn from 'classnames';
import Cross from '../../shared/assets/cross.svg';

const ToastNotification = ({
    type = 'success', 
    content = '', 
    place = 'right-up', 
}) => {
  return (
    <div className={cn(styles.notification, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.right_up]: place === 'right-up',
        [styles.right_down]: place === 'right-down',
    })}>
        <div className={styles.content}>
            {
                content
            }
        </div>
        <Cross className={styles.cross} />
    </div>
  )
}

export default ToastNotification;