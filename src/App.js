import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import Game from 'Containers/Game/Game'
import MouseState from 'Context/Mouse/MouseState'

function App() {
  return (
    <>
        <MouseState>
            <Game />
            <Switch>
                <Redirect to="/game" />
            </Switch>
        </MouseState>
    </>
  )
}

export default App
