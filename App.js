import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Teams from './screens/Teams';

const App = () => {
  return (
    <Provider store={store}>
      <Teams />
    </Provider>
  );
};

export default App;
