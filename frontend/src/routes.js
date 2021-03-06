import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import ProFile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={ProFile}/>
                <Route path="/incident/new" component={NewIncident}/>
                <Route path="/" /*exact*/ component={Logon} />
            </Switch>
        </BrowserRouter>
    )
}