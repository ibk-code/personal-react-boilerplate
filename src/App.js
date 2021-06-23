import React, { Fragment, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
// import Loader from './components/Loader'
import LayoutComposer from './components/Composer/LayoutComposer'
import DashboardLayout from './Layout/DashboardLayout'

const Home = lazy(() => import('./screens/home'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/admin/dashboard" />}
            />
            <Route path="/admin/dashboard">
              <LayoutComposer layout={DashboardLayout} pageTitle="Dashboard">
                <Home />
              </LayoutComposer>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default App
