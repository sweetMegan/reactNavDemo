import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from "./AppRoutes";
import {
    BrowserRouter,
} from 'react-router-dom';
ReactDOM.render(<BrowserRouter>
    {AppRoutes}
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
