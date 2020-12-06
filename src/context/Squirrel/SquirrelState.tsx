import React, {useReducer} from 'react'
import SquirrelContext from 'Context/Squirrel/SquirrelContext'
import SquirrelReducer from 'Context/Squirrel/SquirrelReducer'
import {SquirrelActions} from 'Types/SquirrelTypes'

const SquirrelState: React.FC = ({children}) => {
    const [squirrelState, dispatch] = useReducer(SquirrelReducer, {})

    const setSquirrelElement = (squirrelElement: HTMLImageElement|null) => dispatch({
        type: SquirrelActions.SET_SQUIRREL_ELEMENT,
        payload: squirrelElement
    })

    return (
        <SquirrelContext.Provider value={{
            squirrelState,
            setSquirrelElement
        }}>
            {children}
        </SquirrelContext.Provider>
    )
}

export default SquirrelState
