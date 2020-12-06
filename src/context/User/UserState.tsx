import React, {useReducer} from 'react'
import UserContext from 'Context/User/UserContext'
import UserReducer from 'Context/User/UserReducer'
import {UserActions} from 'Types/UserTypes'

const UserState: React.FC = ({ children }) => {
    const initialUser = {
        scorePoints: 0,
        healthPoints: 5
    }

    const [userState, dispatch] = useReducer(UserReducer, initialUser)

    const addUserScorePoints = () => dispatch({ type: UserActions.ADD_SCORE_POINTS })
    const minusLife = () => dispatch({ type: UserActions.MINUS_LIFE })

    return (
        <UserContext.Provider value={{
            userState,
            addUserScorePoints,
            minusLife
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState
