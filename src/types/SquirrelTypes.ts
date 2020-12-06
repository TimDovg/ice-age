export interface SquirrelContextType {
    squirrelState: SquirrelStateType,
    setSquirrelElement: (squirrelElement: HTMLImageElement|null) => void
}

export interface SquirrelStateType {
    squirrelElement?: HTMLImageElement|null
}

export enum SquirrelActions {
    SET_SQUIRREL_ELEMENT = 'SET_SQUIRREL_ELEMENT',
    DEFAULT = 'DEFAULT'
}

export interface SquirrelActionType {
    type: SquirrelActions,
    payload: HTMLImageElement|null
}

export interface SquirrelHandlersType {
    [SquirrelActions.DEFAULT]: (state: SquirrelStateType) => SquirrelStateType
    [SquirrelActions.SET_SQUIRREL_ELEMENT]: (state: SquirrelStateType, action: SquirrelActionType) => SquirrelStateType
}
