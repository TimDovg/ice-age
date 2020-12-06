import React, { useReducer } from 'react'
import PlanetsContext from './PlanetsContext'
import PlanetsReducer from './PlanetsReducer'
import StarWarsAxios from 'Axios/StarWarsAxios'

import { PlanetsActions } from 'Types/PlanetsTypes/PlanetsTypes'

const PlanetsState: React.FC = ({ children }) => {
    const [ planetsState, dispatch ] = useReducer(PlanetsReducer, {})

    const getAllPlanets = async () => {
        const { data: planets } = await StarWarsAxios.get('planets/')

        dispatch({
            type: PlanetsActions.GET_PLANETS,
            payload: planets
        })
    }

    return (
        <PlanetsContext.Provider value={{
            planetsState,
            getAllPlanets
        }}>
            {children}
        </PlanetsContext.Provider>
    )
}

export default PlanetsState
