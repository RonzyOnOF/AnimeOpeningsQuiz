import styles from './HomeScreen.module.css';
import yui from '../../images/yuiGuitar-min.png';
import { motion } from 'framer-motion';
import { useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
export const HomeScreen = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const toggleIsLoading = () => {
        setIsLoaded(true);
    }
    
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.homeContainer}>
                <motion.img id={isLoaded ? styles.yui : styles.yuiHidden} onLoad={toggleIsLoading} src={yui}
                    initial={{ translateX: 650 }}
                    animate={{ translateX: 0}}
                    transition={{duration: 0.5, type: 'spring' }}
                />
                <div className={styles.slash} ></div>
                <div className={styles.whiteSlash}></div>
                <motion.div className={isLoaded ? styles.coverText : styles.textHidden}
                    initial={{ translateX: -600 }}
                    animate={{ translateX: 0}}
                    transition={{duration: 0.5, type: 'spring' }}                
                >
                    <h1>Quiz Your Anime Knowledge</h1>
                    <button onClick={() => {navigate('play')}}>Play</button>
                </motion.div>
            </div>
            <Outlet />
        </>
    )
}