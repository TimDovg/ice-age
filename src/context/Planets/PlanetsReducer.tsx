import { PlanetsHandlersType, PlanetsActionType, PlanetsStateType, PlanetsActions } from 'Types/PlanetsTypes/PlanetsTypes'

const handlers: PlanetsHandlersType = {
    [PlanetsActions.DEFAULT]: (state: PlanetsStateType) => state,
    [PlanetsActions.GET_PLANETS]: (state: PlanetsStateType, { payload }: PlanetsActionType) => payload
}

const PlanetsReducer = (state: PlanetsStateType, action: PlanetsActionType): PlanetsStateType => {
    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}

export default PlanetsReducer
