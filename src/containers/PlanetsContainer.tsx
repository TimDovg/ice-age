import React, { useContext, useEffect, useState } from 'react'
import PlanetsContext from 'Context/Planets/PlanetsContext'
import Loader from 'Components/Loader'

import { PlanetsContextType } from 'Types/PlanetsTypes/PlanetsTypes'

const PlanetsContainer: React.FC = () => {
    const { planetsState, getAllPlanets } = useContext<Partial<PlanetsContextType>>(PlanetsContext)
    const [ loader, setLoader ] = useState<boolean>(false)

    useEffect(() => {
        const getPlanets = async () => {
            setLoader(true)

            getAllPlanets && await getAllPlanets()

            setLoader(false)
        }

        getPlanets().catch(err => new Error(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        loader || !planetsState
            ? <Loader />
            : <ul className="d-flex flex-column">{
                planetsState?.results?.map(planet => (
                    <li>{planet.name}</li>
                ))
            }</ul>
    )
}

export default PlanetsContainer
