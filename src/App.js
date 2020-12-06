import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PlanetsContainer from 'Containers/PlanetsContainer'
import Navigation from 'Components/Navigation'
import PlanetsState from 'Context/Planets/PlanetsState'

function App() {
  return (
    <>
        <PlanetsState>
            <Navigation />
            <Switch>
                <Route path="/planets" component={PlanetsContainer} />
                <Redirect to="/planets" />
            </Switch>
        </PlanetsState>
    </>
  )
}

export default App
