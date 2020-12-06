import React, {useContext} from 'react'
import MouseContext from 'Context/Mouse/MouseContext'

import styles from './SquirrelStyles.module.scss'

const Squirrel: React.FC = () => {
    const { mouseState } = useContext(MouseContext)

    return (
        <div className={styles.squirrel} style={{ left: mouseState?.horizontalPosition }}>
            Squirrel
        </div>
    )
}

export default Squirrel
