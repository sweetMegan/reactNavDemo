/**
 * Created by zhqmac on 2018/5/11.
 */
import React from 'react';
import {
    Route,
} from 'react-router-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';
/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
    </div>
);

export default AppRoutes;
