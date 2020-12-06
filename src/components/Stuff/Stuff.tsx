import React, {useEffect, useRef, useState} from 'react'
import {getRandomElement, getRandomNumber} from 'Utils/utils'

import styles from './StuffStyles.module.scss'

type StuffProps = {
    stuffs: Array<string>
}

const Stuff: React.FC<StuffProps> = ({ stuffs }) => {
    const [randomElement, setRandomElement] = useState('')
    const [verticalPosition, setVerticalPosition] = useState<number>(0)
    const [horizontalPosition, setHorizontalPosition] = useState<number>(0)

    const stuffElement = useRef<HTMLImageElement|null>(null)
    const verticalPositionState = useRef<number>(verticalPosition)

    const setNewPosition = () => {
        const stuffHeight: number = stuffElement.current?.offsetHeight || 0
        const maxHeight: number = document.body.offsetHeight - stuffHeight - 15
        const isReset: boolean = verticalPositionState.current > maxHeight

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
