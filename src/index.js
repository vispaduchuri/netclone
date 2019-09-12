import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import secondscreen from './modules/common/secondscreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
(
    <Provider store={store}>
        <Router>
      <div>

      <Route exact path='/' component={App} />
        <Route path='/secondscreen/' component={secondscreen} />

        </div>
  </Router>



        {/* <App /> */}
        </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
