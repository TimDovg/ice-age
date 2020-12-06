import React, {useContext} from 'react'
import Squirrel from 'Components/Squirrel/Squirrel'
import MouseContext from 'Context/Mouse/MouseContext'

import styles from './GameStyles.module.scss'

const Game: React.FC = () => {
    const { changeHorizontalPosition } = useContext(MouseContext)

    const onMouseMovePage = ({ pageX }: React.MouseEvent) => changeHorizontalPosition && changeHorizontalPosition(pageX)

    return (
        <div onMouseMove={onMouseMovePage} className={styles.mainGamePage}>
            <Squirrel />
        </div>
    )
}

export default Game
