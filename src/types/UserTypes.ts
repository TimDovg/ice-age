export interface UserContextType {
    userState: UserStateType,
    addUserScorePoints: () => void,
    minusLife: () => void
}

export interface UserStateType {
    scorePoints?: number,
    healthPoints?: number
}

export enum UserActions {
    ADD_SCORE_POINTS = 'ADD_SCORE_POINTS',
    MINUS_LIFE = 'MINUS_LIFE',
    DEFAULT = 'DEFAULT'
}

export interface UserActionType {
    type: UserActions
}

export interface UserHandlersType {
    [UserActions.ADD_SCORE_POINTS]: (state: UserStateType) => UserStateType
    [UserActions.MINUS_LIFE]: (state: UserStateType) => UserStateType
    [UserActions.DEFAULT]: (state: UserStateType) => UserStateType
}
