export interface PlanetType {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
}

export interface PlanetsStateType {
    count?: number,
    next?: string,
    previous?: null,
    results?: PlanetType[]
}

export interface PlanetsContextType {
    planetsState: PlanetsStateType,
    getAllPlanets: () => Promise<void>
}

export enum PlanetsActions {
    GET_PLANETS = 'GET_PLANETS',
    DEFAULT = 'DEFAULT'
}

export interface PlanetsActionType {
    type: PlanetsActions
    payload: PlanetsStateType
}

export interface PlanetsHandlersType {
    [PlanetsActions.DEFAULT]: (state: PlanetsStateType, action: PlanetsActionType) => PlanetsStateType
    [PlanetsActions.GET_PLANETS]: (state: PlanetsStateType, action: PlanetsActionType) => PlanetsStateType
}
