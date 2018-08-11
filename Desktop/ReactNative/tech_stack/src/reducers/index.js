import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  /*whenever this runs it will return a list of libraries to the user*/
  selectedLibraryId: SelectionReducer
});
