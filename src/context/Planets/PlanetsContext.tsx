import { createContext } from 'react'

import { PlanetsContextType } from 'Types/PlanetsTypes/PlanetsTypes'

const PlanetsContext = createContext<Partial<PlanetsContextType>>({})

export default PlanetsContext
