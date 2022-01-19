import React from 'react'
import { Switch, Route } from 'react-router' 

import { AppHeader } from './cmps/Stay Layout/AppHeader.jsx'
import routes from './routes.js'


export class RootCmp extends  React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Switch>
                        {routes.map(route => <Route key={route.path}  component={route.component} path={route.path} />)}
                    </Switch>
                </main>

            </div>
        )
    }
}


