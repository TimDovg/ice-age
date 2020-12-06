import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import GameContainer from 'Containers/GameContainer/GameContainer'
import MouseState from 'Context/Mouse/MouseState'

function App() {
  return (
    <>
        <MouseState>
            <GameContainer />
            <Switch>
                <Redirect to="/game" />
            </Switch>
        </MouseState>
    </>
  )
}

export default App
