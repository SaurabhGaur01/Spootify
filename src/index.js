import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

const store = createStore(
  rootReducer,
);

ReactDOM.render(
  <Provider store={store}>
    <CoreLayout>
      <Routes />
    </CoreLayout>
    </Provider>,
  document.getElementById('root')
);
