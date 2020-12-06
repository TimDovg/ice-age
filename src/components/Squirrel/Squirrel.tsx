import React, {useContext, useEffect, useRef} from 'react'
import MouseContext from 'Context/Mouse/MouseContext'
import hero from 'Images/hero.png'
import SquirrelContext from 'Context/Squirrel/SquirrelContext'

import styles from './SquirrelStyles.module.scss'

const Squirrel: React.FC = () => {
    const { mouseState } = useContext(MouseContext)
    const { setSquirrelElement } = useContext(SquirrelContext)

    const heroElementRef = useRef(null)

    useEffect(() => {
        setSquirrelElement && setSquirrelElement(heroElementRef.current)
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
