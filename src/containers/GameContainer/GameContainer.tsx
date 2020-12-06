import React, {useContext, useRef} from 'react'
import Squirrel from 'Components/Squirrel/Squirrel'
import MouseContext from 'Context/Mouse/MouseContext'
import StuffsRandomizerContainer from 'Containers/StuffsRandomizerContainer'

import styles from './GameStyles.module.scss'

const GameContainer: React.FC = () => {
    const { changeHorizontalPosition } = useContext(MouseContext)

    const heroElement = useRef<HTMLImageElement|null>(null)

    const onMouseMovePage = ({ pageX }: React.MouseEvent) => {
        const maxPosition: number = document.body.offsetWidth - (heroElement.current?.offsetWidth || 0)
        const isMaxPosition: boolean = pageX > maxPosition

        if (isMaxPosition) {
            changeHorizontalPosition && changeHorizontalPosition(maxPosition)
        } else {
            changeHorizontalPosition && changeHorizontalPosition(pageX)
        }

    }
    const onMouseTouchPage = ({ targetTouches }: React.TouchEvent) => changeHorizontalPosition
        && changeHorizontalPosition(targetTouches.item(0).pageX)

    return (
        <div
            onMouseMove={onMouseMovePage}
            onTouchMove={onMouseTouchPage}
            onContextMenu={e => e.preventDefault()}
            className={styles.mainGamePage}
        >
            <StuffsRandomizerContainer />
            <Squirrel heroElement={heroElement} />
            <div className={styles.cover}/>
        </div>
    )
}

export default GameContainer
