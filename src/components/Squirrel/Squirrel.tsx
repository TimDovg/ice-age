import React, {useContext, useEffect, useRef} from 'react'
import MouseContext from 'Context/Mouse/MouseContext'
import hero from 'Images/hero.png'

import styles from './SquirrelStyles.module.scss'

type SquirrelType = {
    heroElement: {
        current: HTMLImageElement|null
    }
}

const Squirrel: React.FC<SquirrelType> = ({ heroElement }) => {
    const { mouseState } = useContext(MouseContext)

    const heroElementRef = useRef(null)

    useEffect(() => {
        heroElement.current = heroElementRef.current
        // eslint-disable-next-line
    },[])

    return (
        <img
            ref={heroElementRef}
            src={hero}
            className={styles.squirrel}
            style={{ left: mouseState?.horizontalPosition }}
            alt={'Hero'}
        />
    )
}

export default Squirrel
