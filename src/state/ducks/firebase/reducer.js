import types from './types';
import initialState from './initialState';

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER: {
      const user = action.payload;
      return { ...state, user };
    }
    case types.SET_USER_PROFILE: {
      const userProfile = action.payload;
      return { ...state, userProfile };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
