import React, {useContext} from 'react'
import UserContext from 'Context/User/UserContext'

import styles from './GameOverStyles.module.scss'

const GameOver: React.FC = () => {
    const { userState } = useContext(UserContext)

    return (
        <div className={styles.gameOver}>
            <div className={styles.info}>
                <p className="text-danger">GAME OVER</p>
                <p>Points: <span className="text-warning font-weight-bold">{userState?.scorePoints}</span></p>
            </div>
        </div>
    )
}

export default GameOver
