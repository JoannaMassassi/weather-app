
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';
import Router from './routes';

const Index = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Index;
