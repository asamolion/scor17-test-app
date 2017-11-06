const initialState = {
  name: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROCESS_NAME':
      action.name = action.name.replace(/e/g, 'k');
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
};

export default rootReducer;
