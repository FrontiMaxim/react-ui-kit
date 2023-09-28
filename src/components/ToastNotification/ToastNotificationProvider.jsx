import React, { createContext, useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import styles from './ToastNotification.module.scss';
import cn from 'classnames';

import Cross from '../../shared/assets/cross.svg';
import Success from '../../shared/assets/success.svg';
import Error from '../../shared/assets/error.svg';


const ToastNotificationContext = createContext({});

const ToastNotificationProvider = ({ children }) => {

    const [show, setShow] = useState(false);

    const [content, setContent] = useState('');
    const [type, setType] = useState('success');
    const [timeClose, setTimeClose] = useState(0);

    const refIdTimer = useRef({current: 0});
    
    const openToastNotification = (
        content='',
        type='success',
        timeClose=0
    ) => {
        setContent(content);
        setType(type);
        setShow(true);

        if(timeClose) {
            setTimeClose(timeClose);
            refIdTimer.current = setTimeout(closeToastNotification, timeClose);
        }
    }

    const closeToastNotification = (callback = () => {}) => {
        clearTimeout(refIdTimer.current);
        setShow(false);
        callback();
    }
    
    return (
        <div className={styles.notification_container}>
            <ToastNotificationContext.Provider value={{openToastNotification, closeToastNotification}}>
                <AnimatePresence>
                    {
                        show &&
                        <motion.div 
                            className={cn(styles.notification, {
                                [styles.success]: type === 'success',
                                [styles.error]: type === 'error',
                            })}

                            initial={{ x: '400px' }}
                            animate={{ x: 0, transition: { duration: 0.3 }}}
                            exit={{ x: '400px', transition: { duration: 0.3 }}}
                        >  
                            {
                                type === 'success' ?
                                <Success className={styles.type_icon} />
                                :
                                <Error className={styles.type_icon} />
                            }
                            
                            <div className={styles.container_text}>
                                <div className={styles.header}>
                                    {
                                        type === 'success' ? 'Успешно' : 'Ошибка'
                                    }
                                </div>
                                <div className={styles.content}>
                                    {
                                        content
                                    }
                                </div>
                            </div>
                           
                            <Cross 
                                className={styles.cross} 
                                onClick={() => closeToastNotification()}
                            />
                           
                           {
                                timeClose !== 0 &&
                                <motion.div 
                                    initial={{ width: '100%' }}
                                    animate={{ width: '0', transition: { duration: timeClose / 1000 }}}
                                    className={styles.progress} 
                                />
                           }
                        </motion.div> 
                    }
                </AnimatePresence>  
                {
                children
                }
            </ToastNotificationContext.Provider>
        </div>
    )
}

export default ToastNotificationProvider;
export { ToastNotificationContext };