import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nbateams from './components/nbateams/Nbateams';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <section className="container">
          <Route exact path="/" component={Nbateams} />
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
