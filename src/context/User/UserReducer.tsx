import {UserActions, UserActionType, UserHandlersType, UserStateType} from 'Types/UserTypes'

const handlers: UserHandlersType = {
    [UserActions.ADD_SCORE_POINTS]: (state: UserStateType): UserStateType => ({
        ...state,
        scorePoints: (state?.scorePoints || 0) + 1
    }),
    [UserActions.MINUS_LIFE]: (state: UserStateType): UserStateType => {
        const lifePoints = state?.healthPoints || 0

        return {
            ...state,
            healthPoints: lifePoints && lifePoints - 1
        }
    },
    [UserActions.DEFAULT]: (state: UserStateType): UserStateType => state
}

const UserReducer = (state: UserStateType, action: UserActionType): UserStateType => {
    const handler = handlers[action.type] || handlers

    return handler(state)
}

export default UserReducer
