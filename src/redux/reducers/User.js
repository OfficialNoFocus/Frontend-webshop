const User = (state = {}, action) => {
  switch (action.type) {

    case 'set-user': {
      state =  {
        ...action.payload
      };
      break;
    }
    case 'update-user':
      state = {
        ...state,
        user: action.payload
      };
      break;
    default:{
      return state;
    }
  }
  return state;
};

export default User;
