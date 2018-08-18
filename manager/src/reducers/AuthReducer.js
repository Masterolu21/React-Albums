import {
  PASSWORD_CHANGED,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

/*boiler plate for reducers */
const INITITAL_STATE = {
  email: '',
password: '',
  user: null,
  error: ''
  };

export default (state = INITITAL_STATE, action) => {
console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      /*logic for when email is changed*/
      return {...state, email: action.payload };
      /*created a new object using ...*/
    case PASSWORD_CHANGED:
      return {...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
        return {...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL: 
      return {...state, error: 'Incorrect email or password.', password: ''};
      /*Displays error message and clears password*/
    default:
      return state;
  }
};
