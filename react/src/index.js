// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//CSS
import './index.css';
import './stylesheets/authform.css';
import './stylesheets/footer.css';
import './stylesheets/homepage.css';
import './stylesheets/navBar.css';
import './stylesheets/playStation.css';
import './stylesheets/xbox.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// REDUX
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RegisterReducer from './store/reducers/registerReducer';
import UserNameReducer from './store/reducers/usernameReducer';
import isLoggedReducer from './store/reducers/isLoggedReducer';
import isRegisterdReducer from './store/reducers/isRegisterdReducer';

// REDUCERS
const rootReducer = combineReducers({
  register: RegisterReducer,
  username: UserNameReducer,
  checkLoggin: isLoggedReducer,
  checkRegisterd: isRegisterdReducer,
});

// STORE
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
