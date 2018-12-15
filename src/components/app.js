import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './landing_page';
import CityPage from './city_page';
import NotFound from './not_found';


const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/:zipcode" component={CityPage}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;
