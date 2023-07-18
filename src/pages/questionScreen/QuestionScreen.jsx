import styles from './QuestionScreen.module.css';

import { Countdown } from '../../components/countdown/Countdown';

export const QuestionScreen = () => {

    return (
        <>
            <Countdown startingNumber={3}/>
        </>
    )
}