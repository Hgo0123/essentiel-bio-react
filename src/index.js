import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENT
import App from './App';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import Fruits from './components/Fruits';
import Legumes from './components/Legumes';
import Connexion from './components/Connexion';




import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => (

  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/fruits' component={Fruits} />
      <Route exact path='/legumes' component={Legumes} />
      <Route exact path='/connexion' component={Connexion} />
      <Route exact path='/admin' component={Admin} />



      <Route component={NotFound} />

    </Switch>
  </Router>

)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
