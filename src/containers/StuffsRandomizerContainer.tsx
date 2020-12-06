import React, {useContext, useEffect, useRef, useState} from 'react'
import Stuff from 'Components/Stuff/Stuff'
import badFish from 'Images/badfish.png'
import nut from 'Images/nut.png'
import {getRandomNumber} from 'Utils/utils'
import UserContext from 'Context/User/UserContext'

const StuffsRandomizerContainer: React.FC = () => {
    const [stuffs, setStuffs] = useState<Array<React.ReactElement>>([])
    const { addUserScorePoints, minusLife } = useContext(UserContext)

    const onCatchBadFishHandler = () => minusLife && minusLife()
    const onCatchNutHandler = () => addUserScorePoints && addUserScorePoints()

    const STUFFS_CONFIG = useRef({
        STUFFS: [
            {
                src: badFish,
                handler: onCatchBadFishHandler
            },
            {
                src: nut,
                handler: onCatchNutHandler
            }
        ],
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
