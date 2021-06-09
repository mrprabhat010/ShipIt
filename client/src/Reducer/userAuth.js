import { LOGIN , REGISTER, LOGOUT} from '../Constants/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: true,
        user: action.user
      };
    case REGISTER:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGOUT:
      return {};
    default:
      return state
  }
}