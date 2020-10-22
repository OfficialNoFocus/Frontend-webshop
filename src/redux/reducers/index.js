

import {combineReducers} from 'redux'
import User from './User';
import general from './general';
import Product from './product';

export default combineReducers({
  user: User,
  general,
  product: Product
});
