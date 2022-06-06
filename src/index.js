import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import {
  Provider
} from 'react-redux';
import userReducer from './features/userSlice';
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
  key: 'root', 
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
})


const persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
      <Provider store = {store} >
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
      </Provider> 
    </React.StrictMode>
);