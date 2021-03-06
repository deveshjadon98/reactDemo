import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home/home';
import Create from './components/create/create';
import Update from './components/update/update';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home} />
         <Route path="home" component={Home} />
         <Route path="create" component={Create} />
         <Route path="update/:id" component={Update} />
      </Route>
   </Router>
),
  document.getElementById('root')
);
