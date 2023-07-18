import styles from './RedirectButton.module.css';

import { useNavigate } from 'react-router-dom';

export const RedirectButton = ({ route, text }) => {

    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(`${route}`)
    }

    return (
        <>
            <button className={styles.redirectButton} onClick={() => {
                navigateTo(route);
            }}
            >
            {text}
            </button>
        </>
    )
}