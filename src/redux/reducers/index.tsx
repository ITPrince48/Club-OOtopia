import { combineReducers } from 'redux';
import flipReducer from './flipReducer';


const rootReducer = combineReducers({
  flipstate: flipReducer
});

export default rootReducer;