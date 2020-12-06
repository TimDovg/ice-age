import React, {useContext, useEffect, useRef, useState} from 'react'
import {getRandomElement, getRandomNumber} from 'Utils/utils'

import styles from './StuffStyles.module.scss'
import SquirrelContext from 'Context/Squirrel/SquirrelContext'
import UserContext from 'Context/User/UserContext'

type StuffProps = {
    stuffs: Array<string>
}

const Stuff: React.FC<StuffProps> = ({ stuffs }) => {
    const [randomElement, setRandomElement] = useState('')
    const [verticalPosition, setVerticalPosition] = useState<number>(0)
    const [horizontalPosition, setHorizontalPosition] = useState<number>(0)
    const { squirrelState } = useContext(SquirrelContext)
    const { addUserScorePoints } = useContext(UserContext)

    const stuffElement = useRef<HTMLImageElement|null>(null)
    const verticalPositionState = useRef<number>(verticalPosition)

    const isCaught = () => {
        const stuffHeight: number = verticalPositionState.current + (stuffElement.current?.offsetHeight || 0)
        const maxHeight: number = document.body.offsetHeight - (squirrelState?.squirrelElement?.offsetHeight || 0)
        const isSquirrelHeightZone: boolean = stuffHeight > maxHeight
        const stuffWidthStart: number = stuffElement.current?.offsetLeft || 0
        const stuffWidthEnd: number = stuffWidthStart + (stuffElement.current?.offsetWidth || 0)
        const squirrelWidthStart: number = squirrelState?.squirrelElement?.offsetLeft || 0
        const squirrelWidthEnd: number = (squirrelState?.squirrelElement?.offsetLeft || 0)
            + (squirrelState?.squirrelElement?.offsetWidth || 0)
        const isStuffStartOnSquirrel: boolean = stuffWidthStart > squirrelWidthStart && stuffWidthStart < squirrelWidthEnd
        const isStuffEndOnSquirrel: boolean = stuffWidthEnd > squirrelWidthStart && stuffWidthEnd < squirrelWidthEnd
        const isCaught: boolean = isSquirrelHeightZone && (isStuffStartOnSquirrel || isStuffEndOnSquirrel)

        if (isCaught) {
            addUserScorePoints && addUserScorePoints()
        }

        return isCaught
    }

    const setNewPosition = () => {
        const stuffHeight: number = stuffElement.current?.offsetHeight || 0
        const maxHeight: number = document.body.offsetHeight - stuffHeight - 15
        const isReset: boolean = verticalPositionState.current > maxHeight || isCaught()

        if (isReset) {
            verticalPositionState.current = 0
            setVerticalPosition(0)
            recalculateHorizontalPosition()
            setRandomElement(getRandomElement(stuffs))
        } else {
            setVerticalPosition(position => {
                const step = 15
                const newPosition = position + step

                verticalPositionState.current = newPosition

                return newPosition
            })
        }
    }

    const recalculateHorizontalPosition = () => {
        const fullWindowWidth: number = document.body.offsetWidth
        const stuffWidth: number = stuffElement.current?.offsetWidth || 0

        setHorizontalPosition(getRandomNumber(fullWindowWidth - Number(stuffWidth)))
    }

    useEffect(() => {
        setInterval(setNewPosition, 30)
        recalculateHorizontalPosition()
        setRandomElement(getRandomElement(stuffs))
        // eslint-disable-next-line
    }, [])

    return (
        <img
            ref={stuffElement}
            className={styles.stuff}
            style={{ left: horizontalPosition, top: verticalPosition }}
            src={randomElement}
            alt={'Stuff item'}
        />
    )
}

export default Stuff
