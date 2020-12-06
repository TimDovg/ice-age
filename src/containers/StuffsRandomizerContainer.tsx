import React, {useEffect, useRef, useState} from 'react'
import Stuff from 'Components/Stuff/Stuff'
import badFish from 'Images/badfish.png'
import nut from 'Images/nut.png'
import {getRandomNumber} from 'Utils/utils'

const StuffsRandomizerContainer: React.FC = () => {
    const [stuffs, setStuffs] = useState<Array<React.ReactElement>>([])

    const STUFFS_CONFIG = useRef({
        STUFFS: [badFish, nut],
        STUFFS_QUANTITY_LEFT: 6
    })

    const pushStuff = () => {
        const MAX_SPEED_MS = 500
        const SPEED = getRandomNumber(MAX_SPEED_MS)

        const timeout = setTimeout(() => {
            STUFFS_CONFIG.current.STUFFS_QUANTITY_LEFT--
            setStuffs(stuffs => [ ...stuffs, <Stuff key={SPEED} stuffs={STUFFS_CONFIG.current.STUFFS} /> ])

            if (STUFFS_CONFIG.current.STUFFS_QUANTITY_LEFT) {
                pushStuff()
            }

            clearTimeout(timeout)
        }, SPEED)
    }

    useEffect(() => {
        pushStuff()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {stuffs}
        </>
    )
}

export default StuffsRandomizerContainer
