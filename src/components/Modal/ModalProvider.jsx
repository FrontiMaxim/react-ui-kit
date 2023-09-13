import React, { createContext, useState } from "react";
import styles from './Modal.module.scss';
import { AnimatePresence, motion } from "framer-motion";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {

    const [show, setShow] = useState(false);
    const [content, setContent] = useState('');

   
    const openModal = (content='') => {
        setContent(content);
        setShow(true);
    }

    const closeModal = (callback = () => {}) => {
        setShow(false);
        callback();
    }
    

    return (
        <ModalContext.Provider value={{openModal, closeModal}}>
            <AnimatePresence>
                {
                    show &&
                    <motion.div
                        className={styles.modal}
                        id='modal'

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 }}}
                        exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 }}}
                        
                        onClick={ (e) => e.target.id === 'modal' && closeModal() }
                    >

                        <motion.div 
                            className={styles.content}

                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.2} }}
                            exit={{ y: 100, opacity: 0, transition: { duration: 0.3 }}}
                            
                        >
                        {
                            content
                        }
                        </motion.div>
                    
                    </motion.div>
                }
            </AnimatePresence>  
            {
                children
            }
        </ModalContext.Provider>
    )
}

export default ModalProvider;
export { ModalContext };