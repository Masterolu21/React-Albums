import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
  /*whenever this runs it will return a list of libraries to the user*/
});
