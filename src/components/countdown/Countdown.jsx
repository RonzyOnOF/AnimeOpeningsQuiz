import styles from './Countdown.module.css';


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RedirectButton } from '../../components/redirectButton/RedirectButton';

export const Countdown = ( { startingNumber }) => {

    const [count, setCount] = useState(startingNumber);
    const [begin, setBegin] = useState(null);
    


    useEffect(() => {
        setTimeout(() => {
            if (count === 1) {
                setBegin('はじめましょう');
                return;
            }
            setCount(count => count - 1);
        }, 1000)
        console.log('rendered');
    }, [count])

    return (
        <>
            <div className={styles.countdownContainer}>
            <RedirectButton route={'/'} text={'Home'} />
            {begin ?
             <motion.p className={styles.beginText}>{begin}</motion.p>
              :
             <motion.p className={styles.countDownText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
             >
                {count}
             </motion.p> }
            </div>
        </>
    )
}