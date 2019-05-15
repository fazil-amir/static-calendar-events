import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';

import { Provider } from 'react-redux'
import store from './store'

const ReduxWrapper = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<ReduxWrapper />, document.getElementById('root'));

