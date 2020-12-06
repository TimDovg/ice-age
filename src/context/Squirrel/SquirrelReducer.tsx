import {SquirrelActions, SquirrelActionType, SquirrelHandlersType, SquirrelStateType} from 'Types/SquirrelTypes'

const handlers: SquirrelHandlersType = {
    [SquirrelActions.SET_SQUIRREL_ELEMENT]: (state: SquirrelStateType, { payload }: SquirrelActionType) => ({ ...state, squirrelElement: payload }),
    [SquirrelActions.DEFAULT]: (state: SquirrelStateType) => state
}

const SquirrelReducer = (state: SquirrelStateType, action: SquirrelActionType): SquirrelStateType => {
    const handler = handlers[action.type] || handlers[SquirrelActions.DEFAULT]

    return handler(state, action)
}

export default SquirrelReducer
