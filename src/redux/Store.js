import RootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Config from '../config/Config';
export const store = Config.DEV? createStore(RootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware))) :  createStore(RootReducer,applyMiddleware(thunkMiddleware));
