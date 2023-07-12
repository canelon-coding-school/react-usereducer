const initialState = {
  user: null,
  tweets: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
