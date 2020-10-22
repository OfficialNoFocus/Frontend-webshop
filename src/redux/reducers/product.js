
const Website = (state = [{id: 1, name: 'yeet'},{id: 2, name:'nibba'},{id: 3, name:'kapsalon'}], action) => {
  switch (action.type) {
    case 'ADD_WEBSITE': {

      state.push(action.payload);
      break;
    }

    default:
      return state
  }
};

export default Website
