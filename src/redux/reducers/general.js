let initialState = {};


const general = (state = initialState, action) => {
  switch (action.type) {
    case 'set-logged-in': {
      state = {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      }
      break;
    }
    case 'set-general': {
      state = {
        ...action.payload
      };
      break;
    }
    case 'set-api-token': {
      state = {
        ...state,
        apiToken: action.payload
      };
      break;
    }
    case 'set-loading': {
      state = {
        ...state,
        general: action.payload
      }
      break;
    }
    default:{
      return state;
    }
  }
  return state;
};

export default general
