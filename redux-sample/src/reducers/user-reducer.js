export default function userReducer (state={}, action) {
  switch(action.type) {
    case "SET_NAME": {
      return {...state, name: action.payload};
      break;
    }
    case "SET_AGE": {
      return {...state, age: action.payload};
      break;
    }
  }
  return state;
}